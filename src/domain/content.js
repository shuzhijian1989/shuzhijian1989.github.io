/**
 * 写死的一册数学。
 * TODO: 正式册次未确认，按文档示例使用人教版一年级上。
 * TODO: 接口尚未提供，题目不走请求。
 */

/** 教材版本。页面直接展示 name。 */
export const textbook = {
  id: 'pep-g3-a',
  name: '人教版一年级上',
  subject: '数学'
}

/** 章节。顺序就是诊断轮询和列表顺序。 */
export const chapters = [
  { id: 'ch-hm', name: '时与分' },
  { id: 'ch-ms', name: '分与秒' },
  { id: 'ch-elapsed', name: '经过时间' },
  { id: 'ch-peri', name: '周长' }
]

/** 核心知识点。prerequisiteIds 是先修。 */
export const knowledgePoints = [
  { id: 'kp-hm', name: '时与分', chapterId: 'ch-hm', isCore: true, prerequisiteIds: [] },
  { id: 'kp-ms', name: '分与秒', chapterId: 'ch-ms', isCore: true, prerequisiteIds: [] },
  { id: 'kp-elapsed', name: '经过时间', chapterId: 'ch-elapsed', isCore: true, prerequisiteIds: ['kp-hm'] },
  { id: 'kp-peri', name: '周长的含义', chapterId: 'ch-peri', isCore: true, prerequisiteIds: [] },
  { id: 'kp-rect', name: '长方形周长', chapterId: 'ch-peri', isCore: true, prerequisiteIds: ['kp-peri'] },
  { id: 'kp-square', name: '正方形周长', chapterId: 'ch-peri', isCore: true, prerequisiteIds: ['kp-peri'] }
]

/** 拼一道选择题。answerIndex 从 0 开始，只在内容文件里用。 */
function choiceItem(spec) {
  const options = spec.choices.map((text, index) => ({
    id: String(index + 1),
    text
  }))
  return {
    id: spec.id,
    kpId: spec.kpId,
    level: spec.level,
    role: spec.role,
    expectedSeconds: spec.expectedSeconds,
    stem: spec.stem,
    matchKey: spec.matchKey,
    options,
    answerOptionId: String(spec.answerIndex + 1),
    answerText: spec.answerText,
    guideQuestion: spec.guideQuestion,
    firstHint: spec.firstHint,
    steps: spec.steps,
    keySteps: spec.keySteps
  }
}

/** 时换分。答案是时 × 60 加多出来的分。 */
function hourItem(hours, extraMinutes, level, role) {
  const answer = hours * 60 + extraMinutes
  const fact = extraMinutes ? `${hours} 时 ${extraMinutes} 分` : `${hours} 时`
  const stem = extraMinutes ? `${fact}一共是多少分？` : `${fact}合多少分？`
  const key = extraMinutes ? `${hours}*60+${extraMinutes}` : `${hours}*60`
  return choiceItem({
    id: `hm-${hours}-${extraMinutes}-${level}-${role}`,
    kpId: 'kp-hm',
    level,
    role,
    expectedSeconds: level === 4 ? 50 : 40,
    stem,
    matchKey: fact,
    choices: [`${answer} 分`, `${answer + 40} 分`, `${answer - 20} 分`],
    answerIndex: 0,
    answerText: String(answer),
    guideQuestion: `这道题说的是 ${fact}，要求换成多少分。你还记得 1 时和分是什么关系吗？`,
    firstHint: '1 时 = 60 分',
    steps: extraMinutes
      ? ['1 时 = 60 分', `${hours} 时是 ${hours} 个 60 分`, `再加 ${extraMinutes} 分，得到 ${answer} 分`]
      : ['1 时 = 60 分', `${hours} 时是 ${hours} 个 60 分`, `${key.replace('*', '×')}=${answer}，所以是 ${answer} 分`],
    keySteps: [key, key.replace('*', '×')]
  })
}

/** 分换秒。 */
function minuteItem(minutes, extraSeconds, level, role) {
  const answer = minutes * 60 + extraSeconds
  const fact = extraSeconds ? `${minutes} 分 ${extraSeconds} 秒` : `${minutes} 分`
  const stem = extraSeconds ? `${fact}一共是多少秒？` : `${fact}合多少秒？`
  const key = extraSeconds ? `${minutes}*60+${extraSeconds}` : `${minutes}*60`
  return choiceItem({
    id: `ms-${minutes}-${extraSeconds}-${level}-${role}`,
    kpId: 'kp-ms',
    level,
    role,
    expectedSeconds: 40,
    stem,
    matchKey: `${fact}合秒`,
    choices: [`${answer - 30} 秒`, `${answer} 秒`, `${answer + 60} 秒`],
    answerIndex: 1,
    answerText: String(answer),
    guideQuestion: `这道题说的是 ${fact}，要求换成多少秒。你还记得 1 分和秒是什么关系吗？`,
    firstHint: '1 分 = 60 秒',
    steps: [`1 分 = 60 秒`, `${key.replace('*', '×')}=${answer}`, `所以是 ${answer} 秒`],
    keySteps: [key, key.replace('*', '×')]
  })
}

/** 经过的整时。开始和结束都不能等于答案，避免引导句泄题。 */
function elapsedItem(startHour, endHour, level, role) {
  const answer = endHour - startHour
  const fact = `从 ${startHour} 时到 ${endHour} 时`
  return choiceItem({
    id: `el-${startHour}-${endHour}-${level}-${role}`,
    kpId: 'kp-elapsed',
    level,
    role,
    expectedSeconds: 35,
    stem: `${fact}，经过了多少时？`,
    matchKey: fact,
    choices: [`${answer + 2} 时`, `${answer} 时`, `${answer + 1} 时`],
    answerIndex: 1,
    answerText: String(answer),
    guideQuestion: `这道题是 ${fact}，要求经过了多久。你觉得应该用结束时刻减去开始时刻吗？`,
    firstHint: '用结束时刻减去开始时刻',
    steps: [`结束是 ${endHour} 时，开始是 ${startHour} 时`, `${endHour}-${startHour}=${answer}`, `经过了 ${answer} 时`],
    keySteps: [`${endHour}-${startHour}`, `${endHour}－${startHour}`]
  })
}

/** 三角形周长。 */
function periItem(sides, level, role) {
  const answer = sides[0] + sides[1] + sides[2]
  const fact = `三条边是 ${sides[0]} 厘米、${sides[1]} 厘米、${sides[2]} 厘米`
  const key = `${sides[0]}+${sides[1]}+${sides[2]}`
  return choiceItem({
    id: `peri-${sides.join('-')}-${level}-${role}`,
    kpId: 'kp-peri',
    level,
    role,
    expectedSeconds: 40,
    stem: `一个三角形${fact}，周长是多少厘米？`,
    matchKey: fact,
    choices: [`${answer} 厘米`, `${answer + 3} 厘米`, `${sides[0]} 厘米`],
    answerIndex: 0,
    answerText: String(answer),
    guideQuestion: `这道题给出${fact}，要求周长。你还记得周长是怎么来的吗？`,
    firstHint: '周长是所有边的长度相加',
    steps: ['周长要把每条边都加进去', `${key}=${answer}`, `周长是 ${answer} 厘米`],
    keySteps: [key]
  })
}

/** 长方形周长。 */
function rectItem(length, width, level, role) {
  const answer = (length + width) * 2
  const fact = `长 ${length} 厘米、宽 ${width} 厘米`
  return choiceItem({
    id: `rect-${length}-${width}-${level}-${role}`,
    kpId: 'kp-rect',
    level,
    role,
    expectedSeconds: 45,
    stem: `长方形${fact}，周长是多少厘米？`,
    matchKey: `长方形${fact}`,
    choices: [`${length + width} 厘米`, `${answer + 4} 厘米`, `${answer} 厘米`],
    answerIndex: 2,
    answerText: String(answer),
    guideQuestion: `这道题是长方形，${fact}，要求周长。你还记得周长和长、宽是什么关系吗？`,
    firstHint: '（长 + 宽）× 2',
    steps: ['长方形周长用（长 + 宽）× 2', `(${length}+${width})×2=${answer}`, `周长是 ${answer} 厘米`],
    keySteps: [`(${length}+${width})*2`, `(${length}+${width})×2`, `${length}+${width}`]
  })
}

/** 正方形周长。 */
function squareItem(side, level, role) {
  const answer = side * 4
  const fact = `边长 ${side} 厘米`
  return choiceItem({
    id: `sq-${side}-${level}-${role}`,
    kpId: 'kp-square',
    level,
    role,
    expectedSeconds: 35,
    stem: `正方形${fact}，周长是多少厘米？`,
    matchKey: `正方形${fact}`,
    choices: [`${answer} 厘米`, `${side * 2} 厘米`, `${side} 厘米`],
    answerIndex: 0,
    answerText: String(answer),
    guideQuestion: `这道题是正方形，${fact}，要求周长。你还记得周长和边长是什么关系吗？`,
    firstHint: '边长 × 4',
    steps: ['正方形四条边一样长', `边长 × 4 = ${side}×4`, `周长是 ${answer} 厘米`],
    keySteps: [`${side}*4`, `${side}×4`]
  })
}

/** 题库。role 为 variant 的题只给问老师，不进诊断和练习。 */
export const items = [
  hourItem(3, 0, 2, 'bank'),
  hourItem(4, 0, 2, 'bank'),
  hourItem(5, 0, 2, 'bank'),
  hourItem(6, 0, 2, 'bank'),
  hourItem(8, 0, 2, 'bank'),
  hourItem(2, 0, 3, 'bank'),
  hourItem(7, 0, 3, 'bank'),
  hourItem(2, 15, 4, 'bank'),
  hourItem(9, 0, 3, 'variant'),

  minuteItem(2, 0, 2, 'bank'),
  minuteItem(4, 0, 2, 'bank'),
  minuteItem(5, 0, 2, 'bank'),
  minuteItem(6, 0, 2, 'bank'),
  minuteItem(8, 0, 2, 'bank'),
  minuteItem(3, 0, 3, 'bank'),
  minuteItem(7, 0, 3, 'bank'),
  minuteItem(2, 10, 4, 'bank'),
  minuteItem(9, 0, 3, 'variant'),

  elapsedItem(2, 5, 2, 'bank'),
  elapsedItem(3, 8, 2, 'bank'),
  elapsedItem(4, 9, 2, 'bank'),
  elapsedItem(7, 12, 2, 'bank'),
  elapsedItem(8, 13, 2, 'bank'),
  elapsedItem(1, 6, 3, 'bank'),
  elapsedItem(6, 10, 3, 'bank'),
  elapsedItem(5, 11, 4, 'bank'),
  elapsedItem(2, 7, 3, 'variant'),

  periItem([3, 4, 5], 3, 'bank'),
  periItem([2, 3, 4], 2, 'bank'),
  periItem([4, 4, 4], 2, 'bank'),
  periItem([5, 5, 6], 2, 'bank'),
  periItem([2, 2, 5], 2, 'bank'),
  periItem([6, 6, 6], 2, 'bank'),
  periItem([4, 5, 6], 3, 'bank'),
  periItem([5, 6, 7], 4, 'bank'),
  periItem([2, 2, 3], 3, 'variant'),

  rectItem(6, 4, 3, 'bank'),
  rectItem(5, 1, 2, 'bank'),
  rectItem(3, 2, 2, 'bank'),
  rectItem(8, 1, 2, 'bank'),
  rectItem(4, 2, 2, 'bank'),
  rectItem(9, 2, 2, 'bank'),
  rectItem(7, 4, 3, 'bank'),
  rectItem(10, 3, 4, 'bank'),
  rectItem(8, 5, 3, 'variant'),

  squareItem(6, 3, 'bank'),
  squareItem(3, 2, 'bank'),
  squareItem(5, 2, 'bank'),
  squareItem(2, 2, 'bank'),
  squareItem(4, 2, 'bank'),
  squareItem(10, 2, 'bank'),
  squareItem(7, 3, 'bank'),
  squareItem(8, 4, 'bank'),
  squareItem(9, 3, 'variant')
]

/** 必答节点。反馈按选项 id 存放，页面只拿被选中的那一句。 */
function askNode(id, text, choices, answerIndex, feedbacks) {
  const options = choices.map((choice, index) => ({
    id: String(index + 1),
    text: choice
  }))
  const optionFeedback = {}
  feedbacks.forEach((feedback, index) => {
    optionFeedback[String(index + 1)] = feedback
  })
  return {
    id,
    kind: '必答',
    text,
    options,
    answerOptionId: String(answerIndex + 1),
    optionFeedback
  }
}

/** 每个知识点一节 3 到 5 分钟的脚本微课。 */
export const lessons = [
  {
    id: 'lesson-kp-hm',
    kpId: 'kp-hm',
    chapterId: 'ch-hm',
    title: '时与分',
    durationText: '4 分钟',
    nodes: [
      { id: 'hm-1', kind: '讲解', text: '钟面上的时和分不是 10 进制。先记住 1 时等于 60 分。' },
      askNode('hm-2', '1 时等于多少分？', ['60 分', '100 分', '10 分'], 0, ['1 时就是 60 分。', '时间换算不是十进制，1 时不是 100 分。', '1 时比 10 分长得多。']),
      { id: 'hm-3', kind: '讲解', text: '把几时换成多少分，就是有几个 60 分。接下来做 3 道练习。' }
    ]
  },
  {
    id: 'lesson-kp-ms',
    kpId: 'kp-ms',
    chapterId: 'ch-ms',
    title: '分与秒',
    durationText: '3 分钟',
    nodes: [
      { id: 'ms-1', kind: '讲解', text: '分和秒也是 60 进制。1 分等于 60 秒。' },
      askNode('ms-2', '1 分等于多少秒？', ['60 秒', '100 秒'], 0, ['1 分就是 60 秒。', '1 分不是 100 秒。']),
      { id: 'ms-3', kind: '讲解', text: '几分换成秒，就是几个 60 秒。' }
    ]
  },
  {
    id: 'lesson-kp-elapsed',
    kpId: 'kp-elapsed',
    chapterId: 'ch-elapsed',
    title: '经过时间',
    durationText: '4 分钟',
    nodes: [
      { id: 'el-1', kind: '讲解', text: '求经过了多久，用结束时刻减去开始时刻。' },
      askNode('el-2', '从 1 时到 4 时，经过了多久？', ['3 时', '4 时', '5 时'], 0, ['4 减 1 等于 3 时。', '4 时是结束时刻，不是经过的时间。', '把两个时刻加起来就不是经过时间了。']),
      { id: 'el-3', kind: '讲解', text: '先看清开始和结束，再相减。' }
    ]
  },
  {
    id: 'lesson-kp-peri',
    kpId: 'kp-peri',
    chapterId: 'ch-peri',
    title: '周长的含义',
    durationText: '5 分钟',
    nodes: [
      { id: 'peri-1', kind: '讲解', text: '沿着图形的边走一圈，这条长度就是周长。计算时把每条边加起来。' },
      askNode('peri-2', '三条边是 2 厘米、3 厘米、4 厘米，周长是多少？', ['9 厘米', '24 厘米', '4 厘米'], 0, ['2+3+4=9，三条边都要加。', '那是把边相乘了，周长是相加。', '只取最长的一条边，不是一圈。']),
      { id: 'peri-3', kind: '讲解', text: '周长看的是一圈，不是里面的面积。' }
    ]
  },
  {
    id: 'lesson-kp-rect',
    kpId: 'kp-rect',
    chapterId: 'ch-peri',
    title: '长方形周长',
    durationText: '5 分钟',
    nodes: [
      { id: 'rect-1', kind: '讲解', text: '长方形有两条长、两条宽。周长是（长 + 宽）× 2。' },
      askNode('rect-2', '长 2 厘米、宽 1 厘米，周长用哪一个式子？', ['（2 + 1）× 2', '2 × 1', '2 + 1'], 0, ['两条长和两条宽，所以（长 + 宽）× 2。', '长乘宽得到的是面积。', '只加一条长和一条宽，少了另外两条边。']),
      { id: 'rect-3', kind: '讲解', text: '先加长和宽，再乘 2。' }
    ]
  },
  {
    id: 'lesson-kp-square',
    kpId: 'kp-square',
    chapterId: 'ch-peri',
    title: '正方形周长',
    durationText: '3 分钟',
    nodes: [
      { id: 'sq-1', kind: '讲解', text: '正方形四条边一样长，周长是边长 × 4。' },
      askNode('sq-2', '边长 2 厘米的正方形，周长是多少？', ['8 厘米', '4 厘米', '6 厘米'], 0, ['2×4=8 厘米。', '4 是边的条数，还没有乘边长。', '2+4 把边长和条数加在一起了。']),
      { id: 'sq-3', kind: '讲解', text: '四条边相同，乘 4 就可以。' }
    ]
  }
]

/** 按 id 取知识点，没有就抛错。 */
export function getKnowledgePoint(id) {
  const found = knowledgePoints.find((item) => item.id === id)
  if (!found) {
    throw new Error('知识点不存在')
  }
  return found
}

/** 按 id 取题目，没有就抛错。 */
export function getItem(id) {
  const found = items.find((item) => item.id === id)
  if (!found) {
    throw new Error('题目不存在')
  }
  return found
}

/** 按 id 取微课，没有就抛错。 */
export function getLesson(id) {
  const found = lessons.find((item) => item.id === id)
  if (!found) {
    throw new Error('微课不存在')
  }
  return found
}

/** 某知识点的变式题。没有则返回 null，问老师据此直接结束。 */
export function getVariant(knowledgePointId) {
  return items.find((item) => item.kpId === knowledgePointId && item.role === 'variant') || null
}

/** 给问老师自由入口用的匹配。对不上返回 null。 */
export function matchItemByText(text) {
  const compact = String(text || '').replace(/\s/g, '')
  if (!compact) {
    return null
  }
  return items.find((item) => item.role !== 'variant' && compact.includes(String(item.matchKey).replace(/\s/g, ''))) || null
}
