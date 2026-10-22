/**
 * 五个页面共用的学习会话。页面只读这里返回的字段。
 * TODO: 接口尚未提供，规则在本地计算，不发请求。
 */
import { chapters, getItem, getKnowledgePoint, getLesson, items, knowledgePoints, lessons, textbook } from './content.js'
import { answerDiagnostic, createDiagnostic } from './diagnostic.js'
import { masteryScore, masteryText } from './mastery.js'
import { branchPractice, buildInitialPath, completeLessonNode, ensurePracticeNode, statusOf } from './path.js'
import { openBoundTutor, openFreeTutor, sendTutor } from './tutor.js'

/** 深拷贝会话，避免页面把内部对象改掉。 */
function copyState(state) {
  return JSON.parse(JSON.stringify(state))
}

/** 空会话。 */
export function createInitialState() {
  return {
    attempts: [],
    diagnostic: null,
    pathNodes: [],
    downgradeUsedKpIds: [],
    forcedMasteredKpIds: [],
    lessonProgress: {},
    wrongs: [],
    records: [],
    tutor: openFreeTutor(),
    notice: ''
  }
}

/** 诊断模块用的内容包。 */
function diagnosticContent() {
  return { chapters, knowledgePoints, items }
}

/** 记一次作答。变式的时长按缺失处理。 */
function recordAttempt(state, attempt) {
  state.attempts.push({
    kpId: attempt.kpId,
    itemId: attempt.itemId,
    correct: attempt.correct,
    seconds: attempt.seconds,
    expectedSeconds: attempt.expectedSeconds,
    level: attempt.level,
    source: attempt.source
  })
  const score = masteryScore(state.attempts.filter((item) => item.kpId === attempt.kpId))
  if (score != null && score < 0.6) {
    state.forcedMasteredKpIds = state.forcedMasteredKpIds.filter((id) => id !== attempt.kpId)
  }
  if (!attempt.correct && (attempt.source === 'practice' || attempt.source === 'variant')) {
    if (!state.wrongs.some((item) => item.itemId === attempt.itemId)) {
      state.wrongs.push({ itemId: attempt.itemId, kpId: attempt.kpId })
    }
  }
}

/** 追加一条学习记录。 */
function pushRecord(state, text) {
  state.records.push({ id: String(state.records.length + 1), text })
}

/** 今日任务。没有诊断时只有诊断一步。 */
export function todayView(state) {
  if (!state.diagnostic || !state.diagnostic.finished) {
    return {
      tasks: [
        {
          id: 'diagnostic',
          type: '诊断',
          title: '首次诊断',
          status: state.diagnostic ? '进行中' : '未开始',
          lessonId: '',
          source: '',
          resultText: ''
        }
      ]
    }
  }
  return {
    tasks: state.pathNodes.map((node) => ({
      id: node.id,
      type: node.type,
      title: `${getKnowledgePoint(node.kpId).name}${node.type}`,
      status: node.status,
      lessonId: node.lessonId || '',
      source: node.source,
      resultText: node.resultText || ''
    }))
  }
}

/** 章节掌握度列表。未测章节也返回，文案是未测。 */
export function chapterView(state) {
  return {
    chapters: chapters.map((chapter) => summarizeChapter(state, chapter))
  }
}

/** 一章的掌握情况。雷达图不使用未测章节。 */
function summarizeChapter(state, chapter) {
  const cores = knowledgePoints.filter((item) => item.chapterId === chapter.id && item.isCore)
  const tested = cores.filter((item) => statusOf(state, item.id) !== '未测')
  if (!tested.length) {
    return { id: chapter.id, name: chapter.name, status: '未测', masteryText: '未测', mastery: null }
  }
  const scores = tested.map((item) => masteryScore(state.attempts.filter((attempt) => attempt.kpId === item.id)))
  const average = scores.reduce((sum, score) => sum + score, 0) / scores.length
  const statuses = tested.map((item) => statusOf(state, item.id))
  let status = '学习中'
  if (statuses.every((item) => item === '已掌握')) {
    status = '已掌握'
  } else if (statuses.some((item) => item === '薄弱')) {
    status = '薄弱'
  }
  return {
    id: chapter.id,
    name: chapter.name,
    status,
    masteryText: masteryText(average, status),
    mastery: Math.round(average * 100) / 100
  }
}

/** 诊断结果：雷达轴和薄弱列表。 */
export function resultView(state) {
  const chaptersView = chapterView(state).chapters
  const weakPoints = knowledgePoints
    .map((item) => ({
      id: item.id,
      name: item.name,
      status: statusOf(state, item.id),
      score: masteryScore(state.attempts.filter((attempt) => attempt.kpId === item.id))
    }))
    .filter((item) => item.status === '薄弱')
    .sort((left, right) => {
      const leftScore = left.score == null ? -1 : left.score
      const rightScore = right.score == null ? -1 : right.score
      return leftScore - rightScore
    })
    .map((item) => ({
      id: item.id,
      name: item.name,
      status: item.status,
      masteryText: masteryText(item.score, item.status)
    }))
  return {
    radarAxes: chaptersView
      .filter((item) => item.status !== '未测')
      .map((item) => ({ name: item.name, mastery: item.mastery })),
    weakPoints
  }
}

/** 开始或继续诊断。 */
export function startDiagnostic(state) {
  if (state.diagnostic && state.diagnostic.finished) {
    throw new Error('诊断已完成')
  }
  if (state.diagnostic) {
    return state
  }
  const next = copyState(state)
  next.diagnostic = createDiagnostic(diagnosticContent())
  return next
}

/** 诊断页要画的题。不含答案。 */
export function diagnosticView(state) {
  if (!state.diagnostic) {
    throw new Error('还没有诊断')
  }
  const answeredCount = state.diagnostic.answers.length
  const plannedCount = state.diagnostic.queue.length
  if (state.diagnostic.finished) {
    return { finished: true, answeredCount, plannedCount, stem: '', options: [], itemId: '' }
  }
  const current = state.diagnostic.queue[state.diagnostic.cursor]
  const item = getItem(current.itemId)
  return {
    finished: false,
    answeredCount,
    plannedCount,
    stem: item.stem,
    itemId: item.id,
    options: item.options.map((option) => ({ id: option.id, text: option.text }))
  }
}

/** 提交诊断选项。对错由题目答案决定。 */
export function submitDiagnosticAnswer(state, payload) {
  const next = copyState(state)
  if (!next.diagnostic || next.diagnostic.finished) {
    throw new Error('当前没有诊断题')
  }
  const current = next.diagnostic.queue[next.diagnostic.cursor]
  const item = getItem(current.itemId)
  if (!item.options.some((option) => option.id === payload.optionId)) {
    throw new Error('没有这个选项')
  }
  const correct = payload.optionId === item.answerOptionId
  recordAttempt(next, {
    kpId: item.kpId,
    itemId: item.id,
    correct,
    seconds: payload.seconds,
    expectedSeconds: item.expectedSeconds,
    level: item.level,
    source: 'diagnostic'
  })
  next.diagnostic = answerDiagnostic(next.diagnostic, diagnosticContent(), {
    correct,
    seconds: payload.seconds
  })
  if (next.diagnostic.finished) {
    next.pathNodes = buildInitialPath(next)
    pushRecord(next, '完成首次诊断')
  }
  return next
}

/** 练习页。做完后只返回结果文案。 */
export function practiceView(state, nodeId) {
  const node = state.pathNodes.find((item) => item.id === nodeId)
  if (!node || node.type !== '练习') {
    throw new Error('练习不存在')
  }
  const correctCount = node.answers.filter((answer) => answer.correct).length
  if (node.answers.length >= 3) {
    return {
      finished: true,
      nodeId: node.id,
      kpId: node.kpId,
      stem: '',
      options: [],
      itemId: '',
      currentIndex: 3,
      totalCount: 3,
      correctCount,
      resultText: node.resultText
    }
  }
  const item = getItem(node.itemIds[node.answers.length])
  return {
    finished: false,
    nodeId: node.id,
    kpId: node.kpId,
    stem: item.stem,
    itemId: item.id,
    options: item.options.map((option) => ({ id: option.id, text: option.text })),
    currentIndex: node.answers.length + 1,
    totalCount: 3,
    correctCount,
    resultText: ''
  }
}

/** 提交练习的一道题。满 3 题后才分支。 */
export function submitPracticeAnswer(state, payload) {
  const next = copyState(state)
  const node = next.pathNodes.find((item) => item.id === payload.nodeId)
  if (!node || node.type !== '练习') {
    throw new Error('练习不存在')
  }
  if (node.status === '已跳过') {
    throw new Error('这组练习已跳过')
  }
  if (node.answers.length >= 3) {
    throw new Error('这组练习已做完')
  }
  const item = getItem(node.itemIds[node.answers.length])
  if (!item.options.some((option) => option.id === payload.optionId)) {
    throw new Error('没有这个选项')
  }
  const correct = payload.optionId === item.answerOptionId
  node.answers.push({ itemId: item.id, correct, seconds: payload.seconds })
  recordAttempt(next, {
    kpId: item.kpId,
    itemId: item.id,
    correct,
    seconds: payload.seconds,
    expectedSeconds: item.expectedSeconds,
    level: item.level,
    source: 'practice'
  })
  if (node.answers.length === 3) {
    const branched = branchPractice(next, node.id)
    next.pathNodes = branched.pathNodes
    next.forcedMasteredKpIds = branched.forcedMasteredKpIds
    next.downgradeUsedKpIds = branched.downgradeUsedKpIds
    pushRecord(next, `${getKnowledgePoint(node.kpId).name}练习完成`)
  }
  return next
}

/** 按章节列出微课。 */
export function lessonListView(state) {
  return {
    chapters: chapters.map((chapter) => ({
      chapterId: chapter.id,
      chapterName: chapter.name,
      lessons: lessons
        .filter((lesson) => lesson.chapterId === chapter.id)
        .map((lesson) => ({
          id: lesson.id,
          title: lesson.title,
          durationText: lesson.durationText,
          doneText: state.lessonProgress[lesson.id] && state.lessonProgress[lesson.id].done ? '已学完' : '未学完'
        }))
    }))
  }
}

/** 微课当前节点。必答题的答案不下发。 */
export function lessonView(state, lessonId) {
  const lesson = getLesson(lessonId)
  const progress = state.lessonProgress[lessonId] || { index: 0, answered: {}, done: false }
  const node = lesson.nodes[progress.index]
  if (!node) {
    throw new Error('微课节点不存在')
  }
  const practice = state.pathNodes.find((item) => item.kpId === lesson.kpId && item.type === '练习' && item.status !== '已完成' && item.status !== '已跳过')
  return {
    lessonId: lesson.id,
    title: lesson.title,
    durationText: lesson.durationText,
    nodeIndex: progress.index + 1,
    nodeCount: lesson.nodes.length,
    kind: node.kind,
    text: node.text,
    options: node.options ? node.options.map((option) => ({ id: option.id, text: option.text })) : [],
    feedback: progress.answered[node.id] || '',
    canNext: node.kind === '讲解' || !!progress.answered[node.id],
    done: progress.done,
    practiceNodeId: practice ? practice.id : ''
  }
}

/** 提交必答节点，只返回该选项的反馈。 */
export function submitLessonChoice(state, payload) {
  const next = copyState(state)
  const lesson = getLesson(payload.lessonId)
  const progress = next.lessonProgress[payload.lessonId] || { index: 0, answered: {}, done: false }
  const node = lesson.nodes[progress.index]
  if (!node || node.kind !== '必答') {
    throw new Error('这一步不用作答')
  }
  if (progress.answered[node.id]) {
    throw new Error('这一步已经答过')
  }
  const feedback = node.optionFeedback[payload.optionId]
  if (!feedback) {
    throw new Error('没有这个选项')
  }
  progress.answered[node.id] = feedback
  next.lessonProgress[payload.lessonId] = progress
  return next
}

/** 进入下一步。未作答的必答节点不能跳过。 */
export function advanceLesson(state, lessonId) {
  const view = lessonView(state, lessonId)
  if (!view.canNext) {
    throw new Error('先完成这一步')
  }
  const next = copyState(state)
  const lesson = getLesson(lessonId)
  const progress = next.lessonProgress[lessonId] || { index: 0, answered: {}, done: false }
  if (progress.done) {
    return state
  }
  if (progress.index + 1 >= lesson.nodes.length) {
    progress.done = true
    next.lessonProgress[lessonId] = progress
    next.pathNodes = completeLessonNode(next, lessonId)
    pushRecord(next, `${lesson.title}微课学完`)
    return next
  }
  progress.index += 1
  next.lessonProgress[lessonId] = progress
  return next
}

/** 错题按知识点分组。 */
export function wrongView(state) {
  const groups = []
  state.wrongs.forEach((wrong) => {
    let group = groups.find((item) => item.kpId === wrong.kpId)
    if (!group) {
      group = { kpId: wrong.kpId, kpName: getKnowledgePoint(wrong.kpId).name, items: [] }
      groups.push(group)
    }
    const item = getItem(wrong.itemId)
    group.items.push({ itemId: item.id, stem: item.stem })
  })
  return { groups }
}

/** 从错题回到该知识点练习。 */
export function openWrongPractice(state, knowledgePointId) {
  const next = copyState(state)
  const ensured = ensurePracticeNode(next, knowledgePointId)
  next.pathNodes = ensured.pathNodes
  return { state: next, nodeId: ensured.nodeId }
}

/** 学习记录，最近的在前。 */
export function recordView(state) {
  return { records: state.records.slice().reverse() }
}

/** 家长只读学情，和薄弱列表、学习记录是同一份数据。 */
export function parentView(state) {
  return {
    weakPoints: resultView(state).weakPoints,
    records: recordView(state).records
  }
}

/** 当前教材。只有写死的一册。 */
export function textbookView() {
  return { name: textbook.name, subject: textbook.subject }
}

/** 练习页唤起问老师，绑定当前题。 */
export function openTutorForItem(state, itemId) {
  const next = copyState(state)
  next.tutor = openBoundTutor(getItem(itemId))
  return next
}

/** 底部问老师。已有对话就接着看。 */
export function ensureTutor(state) {
  if (state.tutor && state.tutor.messages && state.tutor.messages.length) {
    return state
  }
  const next = copyState(state)
  next.tutor = openFreeTutor()
  return next
}

/** 发送一句学生的话。 */
export function submitTutor(state, text) {
  const content = String(text || '').trim()
  if (!content) {
    throw new Error('先写一句话')
  }
  const next = copyState(state)
  const result = sendTutor(next.tutor, content)
  next.tutor = result.tutor
  if (result.variantAttempt) {
    const item = getItem(result.variantAttempt.itemId)
    recordAttempt(next, {
      kpId: item.kpId,
      itemId: item.id,
      correct: result.variantAttempt.correct,
      seconds: null,
      expectedSeconds: null,
      level: item.level,
      source: 'variant'
    })
    pushRecord(next, result.variantAttempt.correct ? '变式做对' : '变式未做对')
  }
  return next
}

/** 问老师页面只看状态和对话。 */
export function tutorView(state) {
  return {
    state: state.tutor.state,
    messages: state.tutor.messages.map((message) => ({ role: message.role, text: message.text }))
  }
}
