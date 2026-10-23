// 小字表的本地笔迹匹配：等距采样、统一缩放、点云距离。
// 无网络请求，不使用题目答案挑选识别结果。支持分开书写的数字与 + - = < >。
const definitions = {
  '0': ['50,0 20,5 3,30 0,65 18,94 48,100 78,90 92,65 90,30 72,5 50,0', '50,0 80,10 95,40 85,80 55,100 20,90 0,60 10,20 50,0'],
  '1': ['50,0 50,100', '20,20 50,0 50,100', '20,20 50,0 50,100|20,100 80,100'],
  '2': ['0,20 15,3 50,0 80,8 90,30 75,50 45,72 0,100 95,100', '0,15 30,0 65,3 80,20 65,45 30,75 0,95 40,100 90,95'],
  '3': ['0,10 35,0 75,5 90,25 65,45 30,50 70,50 95,70 85,90 50,100 5,90', '0,0 80,0 40,45 75,45 95,65 85,90 50,100 0,95'],
  '4': ['60,0 0,65 95,65|65,0 65,100', '0,0 0,55 95,55|65,0 65,100', '65,0 0,60 70,60 70,0 70,100'],
  '5': ['90,0 5,0 0,45 40,40 80,50 95,70 75,95 40,100 0,90', '90,0 10,0|10,0 5,45 45,40 80,55 85,80 60,100 10,95'],
  '6': ['80,0 40,15 10,45 0,75 15,95 50,100 80,85 85,60 65,45 30,45 5,65', '85,0 40,10 15,35 0,70 15,95 50,100 80,80 75,55 45,45 10,60'],
  '7': ['0,0 95,0 60,45 35,100', '0,0 95,0 35,100|25,45 80,45', '0,0 95,0 65,40 65,100'],
  '8': ['50,0 15,5 5,25 25,43 65,58 90,80 70,100 30,100 5,80 20,60 65,40 85,20 70,0 50,0', '50,0 15,5 0,25 15,45 50,50 80,40 90,20 75,0 50,0|50,50 15,55 0,80 20,100 65,100 90,80 80,60 50,50'],
  '9': ['0,40 30,20 30,5 20,0 8,0 5,5 10,12 28,16 30,22 28,100', '85,35 65,5 30,0 0,15 0,40 25,55 60,50 85,25 85,100', '80,10 40,0 5,10 0,30 30,45 70,35 80,10 85,100', '80,30 60,0 20,0 0,15 15,35 50,40 80,30 80,100', '0,65 70,40 70,10 40,0 10,0 0,10 20,25 65,35 70,100'],
  '+': ['0,50 100,50|50,0 50,100'],
  '-': ['0,50 100,50'],
  '=': ['0,25 100,25|0,75 100,75'],
  '<': ['100,0 0,50 100,100'],
  '>': ['0,0 100,50 0,100']
}

function bounds(strokes) {
  const points = strokes.flat()
  const xs = points.map(p => p.x), ys = points.map(p => p.y)
  return { left: Math.min(...xs), right: Math.max(...xs), top: Math.min(...ys), bottom: Math.max(...ys) }
}
const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y)

/** 每条笔画分配至少两个采样点，避免短横等小笔画消失。 */
function sample(strokes) {
  const lengths = strokes.map(stroke => stroke.slice(1).reduce((n, p, i) => n + distance(p, stroke[i]), 0))
  const total = lengths.reduce((a, b) => a + b, 0)
  if (total < 6) return null
  const points = []
  strokes.forEach((stroke, i) => {
    const count = Math.max(2, Math.round(48 * lengths[i] / total))
    for (let j = 0; j < count; j++) {
      const target = lengths[i] * j / (count - 1)
      let travelled = 0, point = stroke[0]
      for (let k = 1; k < stroke.length; k++) {
        const length = distance(stroke[k - 1], stroke[k])
        if (length && travelled + length >= target) {
          const ratio = (target - travelled) / length
          point = { x: stroke[k - 1].x + ratio * (stroke[k].x - stroke[k - 1].x), y: stroke[k - 1].y + ratio * (stroke[k].y - stroke[k - 1].y) }
          break
        }
        travelled += length
        point = stroke[k]
      }
      points.push(point)
    }
  })
  const box = bounds([points]), scale = Math.max(box.right - box.left, box.bottom - box.top, 1)
  const centerX = points.reduce((n, p) => n + p.x, 0) / points.length
  const centerY = points.reduce((n, p) => n + p.y, 0) / points.length
  return points.map(p => ({ x: (p.x - centerX) / scale, y: (p.y - centerY) / scale }))
}

const templates = Object.entries(definitions).flatMap(([text, variants]) => variants.flatMap(variant => {
  const strokes = variant.split('|').map(line => line.split(' ').map(pair => {
    const [x, y] = pair.split(',').map(Number)
    return { x, y }
  }))
  return [0.5, 0.75, 1, 1.25].map(width => ({ text, points: sample(strokes.map(stroke => stroke.map(p => ({ x: p.x * width, y: p.y })))) }))
}))

function cloudDistance(a, b) {
  const nearest = (from, to) => from.reduce((sum, p) => sum + Math.min(...to.map(q => distance(p, q))), 0) / from.length
  return (nearest(a, b) + nearest(b, a)) / 2
}

function recognizeCharacter(strokes) {
  const points = sample(strokes)
  if (!points) throw new Error('笔迹太短，请写清楚一点再提交')
  const scores = new Map()
  for (const template of templates) {
    const score = cloudDistance(points, template.points)
    scores.set(template.text, Math.min(scores.get(template.text) ?? Infinity, score))
  }
  const ranked = [...scores].sort((a, b) => a[1] - b[1])
  const [first, second] = ranked
  if (first[1] > 0.16) throw new Error('这次笔迹没认清，请重写数字，或在下面直接输入答案')
  return { text: first[0], uncertain: first[1] > 0.075 || second[1] - first[1] < 0.018 }
}

/** 根据横向重叠合并多笔画字；数字之间请留空隙，多行表达式不做本地识别。 */
export function recognizeHandwriting(strokes) {
  if (!Array.isArray(strokes) || !strokes.length) throw new Error('先写一个答案')
  const clean = strokes.map(stroke => stroke.filter(p => Number.isFinite(p.x) && Number.isFinite(p.y))).filter(stroke => stroke.length)
  if (!clean.length) throw new Error('先写一个答案')
  if (clean.flat().length > 16000 || clean.length > 80) throw new Error('请把答案写短一些，或直接输入文字')
  const groups = clean.map(stroke => ({ strokes: [stroke], ...bounds([stroke]) })).sort((a, b) => a.left - b.left)
  const merged = []
  for (const group of groups) {
    const previous = merged.at(-1)
    if (previous && group.left <= previous.right + 2) {
      previous.strokes.push(...group.strokes)
      Object.assign(previous, bounds(previous.strokes))
    } else merged.push(group)
  }
  if (merged.length > 12) throw new Error('请把数字分开写在一行，或直接输入答案')
  const characters = merged.map(group => recognizeCharacter(group.strokes))
  return { text: characters.map(item => item.text).join(''), uncertain: characters.some(item => item.uncertain) }
}

/** 按题型决定是否支持本地识别，不读取标准答案。 */
export function supportsLocalHandwriting(question) {
  return question.subject === '数学' && question.grade === 'fill' &&
    ['加法', '减法', '连加', '连减', '加减混合', '数序', '比大小', '按规律填数', '等量代换', '排队', '整时'].includes(question.topic)
}
