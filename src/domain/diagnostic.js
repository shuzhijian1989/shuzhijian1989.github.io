/**
 * 诊断选题。先覆盖核心知识点，剩余名额才给下探和过快鉴别。
 */
import { isTooFast } from './mastery.js'

const MAX_ITEMS = 10
const MIN_ITEMS = 5
const PROBE_RESERVE = 2

/** 知识点被多少个点依赖。 */
function dependentCount(knowledgePoint, knowledgePoints) {
  return knowledgePoints.filter((item) => item.prerequisiteIds.includes(knowledgePoint.id)).length
}

/** 先修层数。没有先修的是第 0 层。 */
function layerOf(knowledgePoint, byId, memo) {
  if (memo.has(knowledgePoint.id)) {
    return memo.get(knowledgePoint.id)
  }
  if (!knowledgePoint.prerequisiteIds.length) {
    memo.set(knowledgePoint.id, 0)
    return 0
  }
  const layers = knowledgePoint.prerequisiteIds.map((id) => layerOf(byId.get(id), byId, memo))
  const layer = 1 + Math.max(...layers)
  memo.set(knowledgePoint.id, layer)
  return layer
}

/** 选出要覆盖的核心知识点，不够 5 个时用先修邻居补。 */
export function buildCoverageTargets(chapters, knowledgePoints) {
  const cores = knowledgePoints.filter((item) => item.isCore)
  let coverageBudget = Math.min(cores.length, MAX_ITEMS - PROBE_RESERVE)
  if (coverageBudget < MIN_ITEMS) {
    coverageBudget = Math.min(MIN_ITEMS, MAX_ITEMS)
  }
  const targets = []
  const picked = new Set()
  chapters.forEach((chapter) => {
    if (targets.length >= coverageBudget) {
      return
    }
    const inChapter = cores.filter((item) => item.chapterId === chapter.id && !picked.has(item.id))
    if (!inChapter.length) {
      return
    }
    inChapter.sort((a, b) => dependentCount(b, knowledgePoints) - dependentCount(a, knowledgePoints))
    targets.push(inChapter[0])
    picked.add(inChapter[0].id)
  })
  const rest = cores
    .filter((item) => !picked.has(item.id))
    .sort((a, b) => dependentCount(b, knowledgePoints) - dependentCount(a, knowledgePoints))
  rest.forEach((item) => {
    if (targets.length >= coverageBudget) {
      return
    }
    targets.push(item)
    picked.add(item.id)
  })
  while (targets.length < MIN_ITEMS) {
    const neighbor = knowledgePoints.find((item) => !picked.has(item.id) && item.prerequisiteIds.some((id) => picked.has(id)))
    if (!neighbor) {
      break
    }
    targets.push(neighbor)
    picked.add(neighbor.id)
  }
  if (targets.length < Math.min(MIN_ITEMS, cores.length)) {
    throw new Error('核心知识点不足以组成诊断')
  }
  return orderTargets(targets, chapters, knowledgePoints)
}

/** 对外提供的先修层，路径排序使用。 */
export function knowledgeLayer(knowledgePoint, knowledgePoints) {
  const byId = new Map(knowledgePoints.map((item) => [item.id, item]))
  return layerOf(knowledgePoint, byId, new Map())
}

/** 先修层在前，同一层按章节轮询。 */
export function orderTargets(targets, chapters, knowledgePoints) {
  const byId = new Map(knowledgePoints.map((item) => [item.id, item]))
  const memo = new Map()
  const chapterIndex = new Map(chapters.map((item, index) => [item.id, index]))
  const groups = new Map()
  targets.forEach((item) => {
    const layer = layerOf(item, byId, memo)
    if (!groups.has(layer)) {
      groups.set(layer, [])
    }
    groups.get(layer).push(item)
  })
  const ordered = []
  Array.from(groups.keys())
    .sort((a, b) => a - b)
    .forEach((layer) => {
      const byChapter = new Map()
      groups.get(layer).forEach((item) => {
        if (!byChapter.has(item.chapterId)) {
          byChapter.set(item.chapterId, [])
        }
        byChapter.get(item.chapterId).push(item)
      })
      const queues = Array.from(byChapter.entries())
        .sort((a, b) => chapterIndex.get(a[0]) - chapterIndex.get(b[0]))
        .map((entry) => entry[1])
      let moved = true
      while (moved) {
        moved = false
        queues.forEach((queue) => {
          if (queue.length) {
            ordered.push(queue.shift())
            moved = true
          }
        })
      }
    })
  return ordered
}

/** 选最接近目标难度、且本场未出过的非变式题。没有历史区分度，只按难度。 */
export function pickItem(items, knowledgePointId, targetDifficulty, usedIds) {
  const used = new Set(usedIds)
  const candidates = items.filter((item) => item.kpId === knowledgePointId && item.role !== 'variant' && !used.has(item.id))
  if (!candidates.length) {
    throw new Error('知识点缺少可用题目')
  }
  candidates.sort((a, b) => {
    const left = Math.abs(a.level / 5 - targetDifficulty)
    const right = Math.abs(b.level / 5 - targetDifficulty)
    if (left !== right) {
      return left - right
    }
    if (a.id < b.id) {
      return -1
    }
    return 1
  })
  return candidates[0]
}

/** 创建 5 到 10 题的诊断队列。覆盖题先全部排入。 */
export function createDiagnostic(content) {
  const targets = buildCoverageTargets(content.chapters, content.knowledgePoints)
  const usedIds = []
  const queue = targets.map((knowledgePoint) => {
    const item = pickItem(content.items, knowledgePoint.id, 0.6, usedIds)
    usedIds.push(item.id)
    return {
      itemId: item.id,
      kpId: knowledgePoint.id,
      role: 'coverage'
    }
  })
  if (queue.length < MIN_ITEMS || queue.length > MAX_ITEMS) {
    throw new Error('诊断题量不在 5 到 10')
  }
  return {
    queue,
    cursor: 0,
    answers: [],
    finished: false
  }
}

/** 答错且前置点还没进队列时，追加一道较易题。覆盖完成后过快答对，追加一道更难题。 */
function nextProbe(diagnostic, content, current, item, correct, seconds, answers) {
  if (diagnostic.queue.length >= MAX_ITEMS) {
    return null
  }
  const usedIds = diagnostic.queue.map((row) => row.itemId)
  if (!correct) {
    const knowledgePoint = content.knowledgePoints.find((row) => row.id === current.kpId)
    const prerequisiteId = knowledgePoint.prerequisiteIds.find((id) => !diagnostic.queue.some((row) => row.kpId === id))
    if (!prerequisiteId) {
      return null
    }
    const probe = pickItem(content.items, prerequisiteId, 0.4, usedIds)
    return {
      itemId: probe.id,
      kpId: prerequisiteId,
      role: 'probe'
    }
  }
  const coverageDone = diagnostic.queue
    .filter((row) => row.role === 'coverage')
    .every((row) => answers.some((answer) => answer.itemId === row.itemId))
  if (isTooFast(seconds, item.expectedSeconds) && coverageDone) {
    const probe = pickItem(content.items, current.kpId, 0.8, usedIds)
    return {
      itemId: probe.id,
      kpId: current.kpId,
      role: 'probe'
    }
  }
  return null
}

/** 提交当前诊断题，返回新的诊断会话。 */
export function answerDiagnostic(diagnostic, content, payload) {
  if (!diagnostic || diagnostic.finished) {
    throw new Error('诊断已结束')
  }
  const current = diagnostic.queue[diagnostic.cursor]
  if (!current) {
    throw new Error('当前没有诊断题')
  }
  const item = content.items.find((row) => row.id === current.itemId)
  if (!item) {
    throw new Error('诊断题不存在')
  }
  const answers = diagnostic.answers.concat({
    itemId: current.itemId,
    kpId: current.kpId,
    correct: payload.correct,
    seconds: payload.seconds
  })
  const probe = nextProbe(diagnostic, content, current, item, payload.correct, payload.seconds, answers)
  const queue = probe ? diagnostic.queue.concat(probe) : diagnostic.queue.slice()
  const cursor = diagnostic.cursor + 1
  return {
    queue,
    cursor,
    answers,
    finished: cursor >= queue.length
  }
}
