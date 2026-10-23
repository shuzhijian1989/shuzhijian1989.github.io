import assert from 'node:assert/strict'
import fs from 'node:fs'
import vm from 'node:vm'
import { quizQuestions, createQuiz, gradeQuizAnswer, buildQuizReport } from '../src/domain/midterm-quiz.js'
import { saveQuizWrong, readQuizWrongs } from '../src/domain/quiz-wrongs.js'

assert.equal(quizQuestions.length, 240)
assert.equal(new Set(quizQuestions.map(q => `${q.subject}-${q.no}`)).size, 240)
for (const subject of ['语文', '数学']) {
  const questions = quizQuestions.filter(q => q.subject === subject)
  assert.equal(questions.length, 120)
  assert.equal(questions.filter(q => q.no > 20).length, 100)
  assert.equal(new Set(questions.map(q => `${q.picture || ''}${q.stem}`)).size, 120, `${subject}题干重复`)
}
for (const question of quizQuestions) {
  assert.equal(question.score, 5)
  for (const key of ['type', 'topic', 'stem', 'answer', 'explain', 'praise']) assert.ok(question[key], `${question.subject}-${question.no} 缺少 ${key}`)
  assert.equal(gradeQuizAnswer(question, question.answer).score, 5, `${question.subject}-${question.no}标准答案应满分`)
  if (question.options) assert.equal(question.options.filter(option => option.key === question.answer).length, 1)
  for (const answer of question.accepts || []) assert.equal(gradeQuizAnswer(question, answer).score, 5)
  assert.throws(() => gradeQuizAnswer(question, '  '), /先写一个答案/)
}
const patterns = new Set()
for (let i = 0; i < 200; i++) {
  const questions = createQuiz()
  patterns.add(questions.map(q => `${q.subject}-${q.no}`).join(','))
  assert.equal(questions.length, 40)
  assert.equal(new Set(questions.map(q => `${q.subject}-${q.no}`)).size, 40)
  for (const subject of ['语文', '数学']) {
    assert.equal(questions.filter(q => q.subject === subject).length, 20)
    assert.equal(questions.filter(q => q.subject === subject && (q.level === 'advanced' || ['write', 'apply'].includes(q.grade))).length, 4)
  }
  const records = questions.map((q, index) => ({ ...q, quizNo: index + 1, input: q.answer, full: 5, ...gradeQuizAnswer(q, q.answer) }))
  const report = buildQuizReport(records)
  assert.equal(report.totalScore, 200)
  assert.equal(report.chineseScore, 100)
  assert.equal(report.mathScore, 100)
  assert.ok(report.suggestions.length >= 2 && report.suggestions.length <= 3)
}
assert.equal(patterns.size, 200)
const apple = quizQuestions.find(q => q.subject === '数学' && q.no === 12)
assert.equal(gradeQuizAnswer(apple, '15+3=18，一共有18个。').score, 1, '不能把18当成8或15+3当成5+3')
assert.equal(gradeQuizAnswer(apple, '5+3=8').score, 4)
assert.equal(gradeQuizAnswer(apple, '5+3=8，一共有8个。').score, 5)
const queue = quizQuestions.find(q => q.subject === '数学' && q.no === 20)
assert.equal(gradeQuizAnswer(queue, '3+4+1=8，一共有8人。').score, 5)

// 用实际页面脚本和真实评分/存储模块走完40题，不依赖浏览器的渲染。
const memory = {}
const storage = { getStorageSync: key => memory[key], setStorageSync: (key, value) => { memory[key] = value } }
const toasts = []
const timers = new Map()
let timerId = 0
let hidePage, unmountPage
const context = vm.createContext({
  onHide: callback => { hidePage = callback }, onBeforeUnmount: callback => { unmountPage = callback },
  setTimeout: callback => { timers.set(++timerId, callback); return timerId },
  clearTimeout: id => timers.delete(id),
  ref: value => ({ value }), computed: getter => ({ get value() { return getter() } }), watch() {},
  createQuiz, gradeQuizAnswer, buildQuizReport, saveQuizWrong: record => saveQuizWrong(record, storage),
  uni: { showToast: toast => toasts.push(toast) }
})
const page = fs.readFileSync('src/pages/today/index.vue', 'utf8')
vm.runInContext(page.split('<script setup>')[1].split('</script>')[0].replace(/^import .*$/gm, ''), context)
const run = code => vm.runInContext(code, context)
assert.equal(run('phase.value'), 'ready')
run('start(); submit()')
assert.equal(run('index.value'), 0)
assert.equal(run('records.value.length'), 0)
assert.equal(toasts.length, 1)
for (let i = 0; i < 40; i++) {
  assert.equal(run('index.value'), i)
  assert.equal(run('phase.value'), 'quiz')
  const question = run('current.value')
  const answer = i === 0 ? '错误答案' : question.answer
  context.testAnswer = answer
  run('if (current.value.options) selected.value = testAnswer; else draft.value = testAnswer; submit()')
  assert.equal(run('records.value.length'), i + 1)
  if (i > 0) {
    assert.equal(run('celebrating.value'), true)
    assert.equal(run('index.value'), i, '烟花结束前不进入下一题')
    run('submit()')
    assert.equal(run('records.value.length'), i + 1, '烟花期间重复提交不重复计分')
    assert.equal(timers.size, 1)
    const callback = [...timers.values()][0]
    callback()
    assert.equal(run('celebrating.value'), false)
    callback()
    assert.equal(run('index.value'), Math.min(i + 1, 39), '重复结束回调不能跳题')
  } else assert.equal(run('celebrating.value'), false, '答错不放烟花')
  if (i < 39) assert.equal(run('phase.value'), 'quiz')
}
assert.equal(run('phase.value'), 'report')
assert.equal(run('report.value.totalScore'), 195)
assert.equal(readQuizWrongs(storage).length, 1)
assert.equal(run('records.value[0].quizNo'), 1)
assert.ok(run('records.value[0].type'))
run('submit()')
assert.equal(run('records.value.length'), 40)
assert.ok(!page.includes('返回上一题'))
run("start(); if (current.value.options) selected.value = current.value.answer; else draft.value = current.value.answer; submit()")
assert.equal(run('celebrating.value'), true)
hidePage()
assert.equal(run('index.value'), 1)
assert.equal(timers.size, 0, '离开页面清理定时器')
run("if (current.value.options) selected.value = current.value.answer; else draft.value = current.value.answer; submit()")
unmountPage()
assert.equal(timers.size, 0, '卸载后不保留回调')
console.log('通过：240题结构与答案校验、200轮分科随机抽样、每科4道进阶题、满分报告、部分给分、完整40题流程、空答拦截、错题入库与结束后重复提交拦截。')
