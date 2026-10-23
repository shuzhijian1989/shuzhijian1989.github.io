import assert from 'node:assert/strict'
import fs from 'node:fs'
import vm from 'node:vm'
import { recognizeHandwriting, supportsLocalHandwriting } from '../src/domain/handwriting.js'
import { gradeQuizAnswer } from '../src/domain/midterm-quiz.js'

// 独立书写样本，不引用识别器的模板；9包含截图中“左侧拖笔+小圈+长竖”的写法。
const ink = text => text.split('|').map(line => line.split(' ').map(pair => {
  const [x, y] = pair.split(',').map(Number)
  return { x, y }
}))
const samples = [
  ['9', '77,243 91,231 112,216 121,204 120,197 110,192 94,190 90,194 96,202 111,209 120,211 118,248 116,288 115,327'],
  ['0', '42,14 20,22 12,45 15,75 32,93 56,96 77,80 84,54 77,28 59,14 42,14'],
  ['1', '45,10 44,35 46,60 45,95'],
  ['2', '10,22 24,10 48,9 70,17 78,33 60,55 38,72 12,94 43,95 82,96'],
  ['3', '14,15 38,7 65,12 78,27 66,40 42,48 65,51 82,67 75,87 51,98 17,90'],
  ['4', '59,10 44,29 13,59 82,60|60,11 60,98'],
  ['5', '80,10 14,10 12,45 43,42 68,50 80,69 66,91 41,98 12,91'],
  ['6', '70,8 44,16 22,40 13,70 24,93 50,97 73,81 76,62 60,50 35,48 15,66'],
  ['7', '12,14 83,13 60,48 34,96'],
  ['8', '43,8 17,14 9,28 27,44 57,56 78,75 63,95 30,95 11,79 24,61 60,41 75,23 61,9 43,8'],
  ['+', '10,54 88,53|50,15 49,96'], ['-', '15,52 88,50'],
  ['=', '12,32 85,31|11,72 87,70'], ['<', '85,12 11,53 84,96'], ['>', '11,12 87,54 12,95']
]
for (const [expected, data] of samples) {
  const strokes = ink(data)
  const result = recognizeHandwriting(strokes)
  console.log(`${expected} → ${result.text}${result.uncertain ? '（需核对）' : ''}`)
  assert.equal(result.text, expected)
  // 缩放、平移不会改变识别字符。
  const moved = strokes.map(stroke => stroke.map(p => ({ x: p.x * 1.4 + 100, y: p.y * 1.4 + 20 })))
  assert.equal(recognizeHandwriting(moved).text, expected)
}
const one = ink(samples.find(sample => sample[0] === '1')[1])
const two = ink(samples.find(sample => sample[0] === '2')[1]).map(stroke => stroke.map(p => ({ x: p.x + 90, y: p.y })))
assert.equal(recognizeHandwriting([...one, ...two]).text, '12')
assert.equal(recognizeHandwriting([...two, ...one]).text, '12', '笔画书写顺序不改变从左到右读取')
assert.throws(() => recognizeHandwriting([]), /先写一个答案/)
assert.throws(() => recognizeHandwriting([[{ x: 1, y: 1 }]]), /笔迹太短/)
assert.equal(supportsLocalHandwriting({ subject: '语文', grade: 'fill', topic: '看拼音写词语' }), false)
assert.equal(supportsLocalHandwriting({ subject: '数学', grade: 'fill', topic: '连减' }), true)

const saved = [], toasts = []
const context = vm.createContext({
  ref: value => ({ value }), computed: getter => ({ get value() { return getter() } }), watch() {},
  gradeQuizAnswer, recognizeHandwriting, supportsLocalHandwriting,
  createQuiz: () => [], buildQuizReport: () => ({}), saveQuizWrong: record => saved.push(record),
  uni: { showToast: toast => toasts.push(toast) }
})
const source = fs.readFileSync('src/pages/today/index.vue', 'utf8')
vm.runInContext(source.split('<script setup>')[1].split('</script>')[0].replace(/^import .*$/gm, ''), context)
const run = code => vm.runInContext(code, context)
context.sampleNine = ink(samples[0][1])
context.testQuestion = { subject: '数学', no: 10, type: '连减', topic: '连减', grade: 'fill', stem: '16-3-4=？', answer: '9', score: 5, explain: '16-3-4=9', praise: '你一步一步减对了。' }
run("quizOrder.value = [testQuestion, testQuestion]; phase.value = 'quiz'; changeHandwriting(sampleNine); submit()")
if (run('needsRecognitionCheck.value')) run('submit()')
assert.equal(run('records.value.length'), 1)
assert.equal(run('records.value[0].input'), '9')
assert.equal(run('records.value[0].score'), 5)
assert.equal(run('index.value'), 1)
assert.equal(toasts.length, 0)
// 同一笔迹面对标准答案7时仍识别为9，并判错，不能按答案猜笔迹。
run("testQuestion = { ...testQuestion, answer: '7' }; quizOrder.value = [testQuestion, testQuestion]; index.value = 0; phase.value = 'quiz'; draft.value = ''; changeHandwriting(sampleNine); submit()")
if (run('needsRecognitionCheck.value')) run('submit()')
assert.equal(run('records.value[1].input'), '9')
assert.equal(run('records.value[1].score'), 0)
run("recognizedDraft.value = true; draft.value = '9'; needsRecognitionCheck.value = true; changeHandwriting([])")
assert.equal(run('draft.value'), '')
assert.equal(run('needsRecognitionCheck.value'), false)
assert.ok(!source.includes('请家长对照手写答案评分'))
console.log('通过：数字/符号独立样本、平移缩放、多位数、截图9的写法、真实评分流程、不按标准答案猜测、清空后旧识别作废。')
