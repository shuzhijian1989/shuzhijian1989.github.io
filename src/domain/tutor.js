/**
 * 问老师状态机。判题和老师回复分开。
 * 没有接入大模型时，老师使用题库预写句。提示词见问老师文档。
 * TODO: 接口尚未提供，这里不请求模型。
 */
import { getItem, getVariant, matchItemByText } from './content.js'

/** 最终结果是否出现在一句话里。用来拦住引导和提示泄题。 */
export function containsAnswer(text, answerText) {
  if (answerText == null || answerText === '') {
    return false
  }
  const source = String(text).replace(/\s/g, '')
  const answer = String(answerText).replace(/\s/g, '')
  const escaped = answer.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  return new RegExp(`(^|[^0-9])${escaped}([^0-9]|$)`).test(source)
}

/** 把乘号和减号收成同一种写法，再对关键步骤。 */
function normalizeStep(text) {
  return String(text).replace(/\s/g, '').replace(/×/g, '*').replace(/＊/g, '*').replace(/x/gi, '*').replace(/－/g, '-')
}

/** 学生是否写出了题库里的某个关键步骤。 */
function hasKeyStep(text, item) {
  const source = normalizeStep(text)
  return item.keySteps.some((step) => source.includes(normalizeStep(step)))
}

/**
 * 给学生这句话打标签。没有绑定题目时，不能判 mastered。
 */
export function judgeUtterance(text, item) {
  const raw = String(text || '').trim()
  if (!raw) {
    return 'off_topic'
  }
  if (/不是这道|拍错|认错了/.test(raw)) {
    return 'mismatch'
  }
  if (/看答案|看解析|告诉我答案|直接告诉|给我答案|完整解析/.test(raw)) {
    return 'request_solution'
  }
  if (/^(我)?(会了|懂了|知道了|明白了)[了呀啊吧。.!！\s]*$/.test(raw)) {
    return 'claim_only'
  }
  if (!item) {
    return /不知道|不会|忘了|没学过|不记得/.test(raw) ? 'dont_know' : 'off_topic'
  }
  const stepped = hasKeyStep(raw, item)
  const answered = containsAnswer(raw, item.answerText)
  if (stepped && answered) {
    return 'mastered'
  }
  if (stepped && !answered) {
    return 'method_ok_calc_wrong'
  }
  if (/不知道|不会|忘了|没学过|不记得/.test(raw)) {
    return 'dont_know'
  }
  if (/\d/.test(raw)) {
    return 'wrong'
  }
  return 'off_topic'
}

/** 非解析状态一旦带出最终结果，整句作废。 */
function guard(state, text, item) {
  if (state === '解析' || state === '结束' || !item) {
    return text
  }
  if (containsAnswer(text, item.answerText)) {
    return '我们先不看最终结果。你按刚才的问题再写一步。'
  }
  return text
}

/** 引导句只使用预写问题。 */
function guideText(item) {
  return item.guideQuestion
}

/** 提示只使用第一步提示，不代入结果。 */
function hintText(item) {
  return `${item.firstHint}。你用这个关系，把题目里的数代进去，先列一个式子。`
}

/** 解析按题库步骤原顺序讲。 */
function solutionText(item) {
  return item.steps.join('\n')
}

/** 变式只出示题干，不问出答案。 */
function variantText(item) {
  return `同一类题，你来做这一道。${item.stem}你准备用哪个关系？`
}

/** 练习页进入：题目已绑定，第一句就是引导。 */
export function openBoundTutor(item) {
  return {
    state: '引导',
    itemId: item.id,
    originItemId: item.id,
    noMoreVariant: false,
    variantRecorded: false,
    messages: [{ role: 'teacher', text: guard('引导', guideText(item), item) }]
  }
}

/** 底部入口：还没对上题目。 */
export function openFreeTutor() {
  return {
    state: '初始',
    itemId: '',
    originItemId: '',
    noMoreVariant: false,
    variantRecorded: false,
    messages: [{ role: 'teacher', text: '我还没对上题库里的题。你可以说说卡在哪一步，先不要急着要答案。' }]
  }
}

/** 原题讲完后推变式。没有变式题就结束，不现编。 */
function enterVariant(tutor, item) {
  const variant = getVariant(item.kpId)
  if (!variant) {
    tutor.state = '结束'
    tutor.messages.push({ role: 'teacher', text: '今天这一题先到这里。' })
    return { tutor, variantAttempt: null }
  }
  tutor.state = '变式'
  tutor.itemId = variant.id
  tutor.messages.push({ role: 'teacher', text: guard('变式', variantText(variant), variant) })
  return { tutor, variantAttempt: null }
}

/** 进入解析。变式解析讲完后结束，不再推第二道变式。 */
function enterSolution(tutor, item) {
  tutor.messages.push({ role: 'teacher', text: solutionText(item) })
  const variantFlow = item.role === 'variant' || tutor.noMoreVariant
  if (variantFlow) {
    tutor.state = '结束'
    tutor.messages.push({ role: 'teacher', text: '这一步可以之后再练，今天先停在这里。' })
    if (tutor.variantRecorded) {
      return { tutor, variantAttempt: null }
    }
    tutor.variantRecorded = true
    return {
      tutor,
      variantAttempt: { itemId: item.id, kpId: item.kpId, correct: false, level: item.level }
    }
  }
  return enterVariant(tutor, item)
}

/**
 * 学生发来一句后切换状态。
 * 返回的 variantAttempt 只有变式做对或变式解析结束时才有，供掌握度另记一次。
 */
export function sendTutor(tutor, text) {
  const next = {
    ...tutor,
    messages: tutor.messages.concat({ role: 'student', text })
  }
  if (next.state === '初始') {
    const matched = matchItemByText(text)
    if (!matched) {
      next.messages.push({ role: 'teacher', text: '我还没对上题库里的题。你可以说说卡在哪一步，先不要急着要答案。' })
      return { tutor: next, variantAttempt: null }
    }
    next.itemId = matched.id
    next.originItemId = matched.id
    next.state = '引导'
    next.messages.push({ role: 'teacher', text: guard('引导', guideText(matched), matched) })
    return { tutor: next, variantAttempt: null }
  }
  if (next.state === '结束') {
    next.messages.push({ role: 'teacher', text: '今天先停在这里。' })
    return { tutor: next, variantAttempt: null }
  }
  const item = getItem(next.itemId)
  const label = judgeUtterance(text, item)
  if (label === 'mismatch') {
    next.state = '初始'
    next.itemId = ''
    next.messages.push({ role: 'teacher', text: '那我们换一道。你卡在哪一步？先不要急着要答案。' })
    return { tutor: next, variantAttempt: null }
  }
  if (label === 'mastered') {
    if (item.role === 'variant') {
      next.state = '结束'
      next.variantRecorded = true
      next.messages.push({ role: 'teacher', text: '你把这个关系用对了。今天先到这里。' })
      return {
        tutor: next,
        variantAttempt: { itemId: item.id, kpId: item.kpId, correct: true, level: item.level }
      }
    }
    return enterVariant(next, item)
  }
  if (label === 'request_solution') {
    return enterSolution(next, item)
  }
  if (next.state === '引导' && (label === 'dont_know' || label === 'wrong')) {
    next.state = '提示'
    next.messages.push({ role: 'teacher', text: guard('提示', hintText(item), item) })
    return { tutor: next, variantAttempt: null }
  }
  if (next.state === '提示' && label === 'wrong') {
    return enterSolution(next, item)
  }
  if (next.state === '变式' && (label === 'dont_know' || label === 'wrong')) {
    next.noMoreVariant = true
    next.state = '提示'
    next.messages.push({ role: 'teacher', text: guard('提示', hintText(item), item) })
    return { tutor: next, variantAttempt: null }
  }
  if (label === 'method_ok_calc_wrong') {
    next.messages.push({ role: 'teacher', text: '关系对了，结果再算一遍。' })
    return { tutor: next, variantAttempt: null }
  }
  if (next.state === '提示') {
    next.messages.push({ role: 'teacher', text: '你先按这个关系列一个式子。' })
    return { tutor: next, variantAttempt: null }
  }
  next.messages.push({ role: 'teacher', text: '你先写一个式子，我再看你卡在哪。' })
  return { tutor: next, variantAttempt: null }
}
