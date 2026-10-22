/**
 * 学习路径。只收录薄弱知识点，先修在前，同一层按掌握度从低到高。
 */
import { pickItem, knowledgeLayer } from './diagnostic.js'
import { masteryScore, masteryStatus } from './mastery.js'
import { getKnowledgePoint, knowledgePoints, items } from './content.js'

/** 某个知识点目前的作答。 */
function attemptsOf(state, knowledgePointId) {
  return state.attempts.filter((item) => item.kpId === knowledgePointId)
}

/** 知识点状态。正确率高于 90% 时 forced 优先，但 M 掉到 0.6 以下会被 session 清掉。 */
export function statusOf(state, knowledgePointId) {
  const score = masteryScore(attemptsOf(state, knowledgePointId))
  const forced = state.forcedMasteredKpIds.includes(knowledgePointId)
  return masteryStatus(score, forced)
}

/** 路径和诊断已经占用的题目。 */
function usedItemIds(state) {
  const ids = []
  if (state.diagnostic) {
    state.diagnostic.queue.forEach((row) => ids.push(row.itemId))
  }
  state.pathNodes.forEach((node) => {
    if (node.itemIds) {
      node.itemIds.forEach((id) => ids.push(id))
    }
  })
  return ids
}

/** 按目标难度抽 3 道未用过的题。抽不到就抛错，不塞空题。 */
function pickThree(state, knowledgePointId, targets) {
  const used = usedItemIds(state)
  const itemIds = []
  targets.forEach((target) => {
    const item = pickItem(items, knowledgePointId, target, used.concat(itemIds))
    itemIds.push(item.id)
  })
  return itemIds
}

/** 微课节点。 */
function lessonNode(knowledgePointId, status, source) {
  return {
    id: `path-lesson-${knowledgePointId}-${source}`,
    type: '微课',
    kpId: knowledgePointId,
    lessonId: `lesson-${knowledgePointId}`,
    status,
    source,
    resultText: ''
  }
}

/** 练习节点。固定 3 道题。 */
function practiceNode(knowledgePointId, itemIds, status, source) {
  return {
    id: `path-practice-${knowledgePointId}-${source}-${itemIds[0]}`,
    type: '练习',
    kpId: knowledgePointId,
    itemIds,
    answers: [],
    status,
    source,
    resultText: ''
  }
}

/** 没有进行中的节点时，把下一节未开始的标成进行中。 */
function activateNext(nodes) {
  if (nodes.some((node) => node.status === '进行中')) {
    return nodes
  }
  const next = nodes.find((node) => node.status === '未开始')
  if (!next) {
    return nodes
  }
  return nodes.map((node) => (node.id === next.id ? { ...node, status: '进行中' } : node))
}

/** 诊断结束后生成路径。已有节点时不推倒重排。 */
export function buildInitialPath(state) {
  if (state.pathNodes.length) {
    return state.pathNodes
  }
  const weak = knowledgePoints
    .map((knowledgePoint) => ({
      knowledgePoint,
      score: masteryScore(attemptsOf(state, knowledgePoint.id)),
      status: statusOf(state, knowledgePoint.id)
    }))
    .filter((row) => row.status === '薄弱')
  weak.sort((left, right) => {
    const layerDiff = knowledgeLayer(left.knowledgePoint, knowledgePoints) - knowledgeLayer(right.knowledgePoint, knowledgePoints)
    if (layerDiff !== 0) {
      return layerDiff
    }
    const leftScore = left.score == null ? -1 : left.score
    const rightScore = right.score == null ? -1 : right.score
    return leftScore - rightScore
  })
  const nodes = []
  weak.forEach((row) => {
    nodes.push(lessonNode(row.knowledgePoint.id, '未开始', '薄弱'))
    nodes.push(practiceNode(row.knowledgePoint.id, pickThree(state, row.knowledgePoint.id, [0.4, 0.4, 0.6]), '未开始', '薄弱'))
  })
  return activateNext(nodes)
}

/** 一组 3 题结束后的分支。调用前这 3 题的作答已经写在节点上。 */
export function branchPractice(state, nodeId) {
  const index = state.pathNodes.findIndex((node) => node.id === nodeId)
  if (index < 0) {
    throw new Error('练习不存在')
  }
  const node = state.pathNodes[index]
  if (node.answers.length !== 3) {
    throw new Error('练习还没做完 3 题')
  }
  const correctCount = node.answers.filter((answer) => answer.correct).length
  const accuracy = correctCount / node.answers.length
  let nodes = state.pathNodes.map((item) => (item.id === nodeId ? { ...item, status: '已完成' } : item))
  let forced = state.forcedMasteredKpIds.slice()
  let downgradeUsed = state.downgradeUsedKpIds.slice()
  let resultText = ''
  if (accuracy > 0.9) {
    if (!forced.includes(node.kpId)) {
      forced.push(node.kpId)
    }
    nodes = nodes.map((item) => {
      if (item.kpId === node.kpId && item.status === '未开始') {
        return { ...item, status: '已跳过' }
      }
      return item
    })
    resultText = `这组做对 ${correctCount} 题，正确率高于 90%，跳过已掌握内容。`
  } else if (accuracy < 0.6 && !downgradeUsed.includes(node.kpId)) {
    downgradeUsed = downgradeUsed.concat(node.kpId)
    const inserted = downgradeNodes(state, node.kpId, nodes)
    nodes = nodes.filter((item) => !inserted.removeIds.includes(item.id))
    const finishedIndex = nodes.findIndex((item) => item.id === nodeId)
    nodes = nodes.slice(0, finishedIndex + 1).concat(inserted.nodes).concat(nodes.slice(finishedIndex + 1))
    const basicName = inserted.nodes.length ? getKnowledgePoint(inserted.nodes[0].kpId).name : ''
    resultText = basicName
      ? `这组做对 ${correctCount} 题，正确率低于 60%，接下来学习「${basicName}」。`
      : `这组做对 ${correctCount} 题，正确率低于 60%，接下来做更基础的题。`
  } else if (accuracy < 0.6) {
    resultText = `这组做对 ${correctCount} 题，正确率低于 60%。这个知识点已经降过一次，先进入下一项。`
  } else {
    resultText = `这组做对 ${correctCount} 题，先进入下一项。`
  }
  nodes = nodes.map((item) => (item.id === nodeId ? { ...item, resultText } : item))
  return {
    pathNodes: activateNext(nodes),
    forcedMasteredKpIds: forced,
    downgradeUsedKpIds: downgradeUsed,
    resultText,
    correctCount,
    totalCount: 3
  }
}

/** 降级：有未学完的前置点就把它挪到当前题后面；没有就再加 3 道更易题。 */
function downgradeNodes(state, knowledgePointId, nodes) {
  const knowledgePoint = getKnowledgePoint(knowledgePointId)
  const candidates = knowledgePoint.prerequisiteIds
    .map((id) => getKnowledgePoint(id))
    .filter((item) => {
      const related = nodes.filter((node) => node.kpId === item.id && node.type === '微课')
      if (!related.length) {
        return true
      }
      return related.some((node) => node.status !== '已完成' && node.status !== '已跳过')
    })
  candidates.sort((left, right) => {
    const leftScore = masteryScore(attemptsOf(state, left.id))
    const rightScore = masteryScore(attemptsOf(state, right.id))
    const leftValue = leftScore == null ? -1 : leftScore
    const rightValue = rightScore == null ? -1 : rightScore
    return leftValue - rightValue
  })
  if (candidates.length) {
    const target = candidates[0]
    const existing = nodes.filter((node) => node.kpId === target.id && (node.status === '未开始' || node.status === '进行中'))
    if (existing.length) {
      return {
        removeIds: existing.map((node) => node.id),
        nodes: existing.map((node) => ({ ...node, source: '降级', status: '未开始' }))
      }
    }
    const lesson = lessonNode(target.id, '未开始', '降级')
    const practice = practiceNode(target.id, pickThree(state, target.id, [0.4, 0.4, 0.4]), '未开始', '降级')
    return { removeIds: [], nodes: [lesson, practice] }
  }
  const practice = practiceNode(knowledgePointId, pickThree(state, knowledgePointId, [0.4, 0.4, 0.4]), '未开始', '降级')
  return { removeIds: [], nodes: [practice] }
}

/** 微课学完后，把路径上对应节点标成已完成。 */
export function completeLessonNode(state, lessonId) {
  const nodes = state.pathNodes.map((node) => {
    if (node.lessonId === lessonId && node.status !== '已跳过' && node.status !== '已完成') {
      return { ...node, status: '已完成' }
    }
    return node
  })
  return activateNext(nodes)
}

export function ensurePracticeNode(state, knowledgePointId) {
  const existing = state.pathNodes.find((node) => node.kpId === knowledgePointId && node.type === '练习' && node.status !== '已完成' && node.status !== '已跳过')
  if (existing) {
    return {
      pathNodes: state.pathNodes.map((node) => (node.id === existing.id ? { ...node, status: '进行中' } : node)),
      nodeId: existing.id
    }
  }
  const practice = practiceNode(knowledgePointId, pickThree(state, knowledgePointId, [0.4, 0.4, 0.6]), '进行中', '回练')
  return {
    pathNodes: state.pathNodes.concat(practice),
    nodeId: practice.id
  }
}
