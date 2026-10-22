/**
 * 领域规则自检。不启动页面。
 */
import { items } from './content.js'
import { containsAnswer, judgeUtterance, openBoundTutor, sendTutor } from './tutor.js'
import { difficultyOf, masteryScore, masteryStatus } from './mastery.js'
import { createInitialState, practiceView, startDiagnostic, submitDiagnosticAnswer, submitPracticeAnswer, submitTutor, todayView } from './session.js'

/** 断言失败就停下。 */
function assert(condition, message) {
  if (!condition) {
    throw new Error(message)
  }
}

/** 引导和提示不能带最终结果，解析步骤必须带结果。 */
function assertItems() {
  items.forEach((item) => {
    assert(!containsAnswer(item.guideQuestion, item.answerText), `${item.id} 引导泄题`)
    assert(!containsAnswer(item.firstHint, item.answerText), `${item.id} 提示泄题`)
    assert(item.steps.some((step) => containsAnswer(step, item.answerText)), `${item.id} 解析没有结果`)
  })
}

/** 文档里的掌握度例子。 */
function assertMastery() {
  const medium = { level: 3, expectedSeconds: 40 }
  const correct = masteryScore([{ ...medium, correct: true, seconds: 30 }])
  assert(correct === 1, '正常答对应该是 1')
  assert(masteryStatus(correct, false) === '已掌握', '正常答对应该已掌握')
  const wrong = masteryScore([{ ...medium, correct: false, seconds: 30 }])
  assert(wrong === 0, '答错应该是 0')
  assert(masteryStatus(wrong, false) === '薄弱', '答错应该薄弱')
  const fast = masteryScore([{ ...medium, correct: true, seconds: 10 }])
  assert(Math.abs(fast - 0.7) < 0.001, '过快答对应该是 0.7')
  assert(masteryStatus(fast, false) === '学习中', '过快答对应该学习中')
  assert(difficultyOf(3) === 0.6, '3 档难度应该是 0.6')
  assert(masteryScore([]) == null, '未作答不能算出 0')
}

/** 把诊断全部答错，确认会生成微课和练习。 */
function answerAllWrong(state) {
  let current = startDiagnostic(state)
  assert(current.diagnostic.queue.length >= 5 && current.diagnostic.queue.length <= 10, '诊断题量应在 5 到 10')
  while (!current.diagnostic.finished) {
    const question = current.diagnostic.queue[current.diagnostic.cursor]
    const item = items.find((row) => row.id === question.itemId)
    const wrongOption = item.options.find((option) => option.id !== item.answerOptionId)
    current = submitDiagnosticAnswer(current, { optionId: wrongOption.id, seconds: 30 })
  }
  return current
}

/** 路径、降级和问老师泄题。 */
function assertFlow() {
  const learned = answerAllWrong(createInitialState())
  const tasks = todayView(learned).tasks
  assert(tasks.some((task) => task.type === '微课'), '答错后应该有微课')
  const practice = tasks.find((task) => task.type === '练习')
  assert(practice, '答错后应该有练习')
  let state = learned
  let guard = 0
  while (practiceView(state, practice.id).finished !== true && guard < 3) {
    const view = practiceView(state, practice.id)
    const item = items.find((row) => row.id === view.itemId)
    const wrongOption = item.options.find((option) => option.id !== item.answerOptionId)
    state = submitPracticeAnswer(state, { nodeId: practice.id, optionId: wrongOption.id, seconds: 30 })
    guard += 1
  }
  const finished = practiceView(state, practice.id)
  assert(finished.finished === true, '3 题后练习应结束')
  assert(finished.resultText.includes('低于 60%'), '全错应该降级')
  const hour = items.find((item) => item.id === 'hm-2-0-3-bank')
  let tutorState = createInitialState()
  tutorState = submitTutor({ ...tutorState, tutor: openBoundTutor(hour) }, '不知道')
  const hinted = tutorState.tutor.messages[tutorState.tutor.messages.length - 1].text
  assert(tutorState.tutor.state === '提示', '不知道后应进入提示')
  assert(!containsAnswer(hinted, hour.answerText), '提示不能出现最终结果')
  tutorState = submitTutor(tutorState, '2*60=120')
  assert(tutorState.tutor.state === '变式', '做对后应进入变式')
  const variantText = tutorState.tutor.messages[tutorState.tutor.messages.length - 1].text
  assert(!containsAnswer(variantText, '540'), '变式不能出现变式答案')
  assert(judgeUtterance('我会了', hour) === 'claim_only', '只说会了不能算掌握')
  assert(judgeUtterance('120', hour) === 'wrong', '只报数字不能算掌握')
}

assertItems()
assertMastery()
assertFlow()
console.log('domain ok')
