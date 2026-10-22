/**
 * 掌握度公式。页面不调用这里重算，只展示 session 返回的结果。
 */

/** 难度档换成 d。约定档位是 1 到 5，d = 档位 / 5。 */
export function difficultyOf(level) {
  return level / 5
}

/**
 * 答对时的时长系数。
 * 期望时长或作答时长缺失时按 1，不用 0 代替缺失。
 */
export function timeFactor(seconds, expectedSeconds) {
  if (seconds == null || expectedSeconds == null) {
    return 1
  }
  const ratio = seconds / expectedSeconds
  if (ratio < 0.4) {
    return 0.7
  }
  if (ratio <= 2) {
    return 1
  }
  return 0.85
}

/** 作答是否过快。缺失期望时长时不判过快。 */
export function isTooFast(seconds, expectedSeconds) {
  if (seconds == null || expectedSeconds == null) {
    return false
  }
  return seconds / expectedSeconds < 0.4
}

/**
 * 计算掌握度 M。没有作答返回 null，调用方必须保持「未测」，不能写成 0。
 * attempt.correct、attempt.level、attempt.seconds、attempt.expectedSeconds 由记录原样传入。
 */
export function masteryScore(attempts) {
  if (!attempts.length) {
    return null
  }
  let weighted = 0
  let weightSum = 0
  attempts.forEach((attempt) => {
    const difficulty = difficultyOf(attempt.level)
    if (attempt.correct) {
      const factor = timeFactor(attempt.seconds, attempt.expectedSeconds)
      weighted += factor * difficulty
      weightSum += difficulty
      return
    }
    weightSum += (1 - difficulty) + 0.2
  })
  if (weightSum === 0) {
    throw new Error('掌握度权重为 0')
  }
  return weighted / weightSum
}

/** 由 M 和「3 题全对」的强制掌握得到状态文案。 */
export function masteryStatus(score, forcedMastered) {
  if (forcedMastered) {
    return '已掌握'
  }
  if (score == null) {
    return '未测'
  }
  if (score > 0.9) {
    return '已掌握'
  }
  if (score >= 0.6) {
    return '学习中'
  }
  return '薄弱'
}

/** 展示文案。未测不显示 0。 */
export function masteryText(score, status) {
  if (status === '未测') {
    return '未测'
  }
  const rounded = Math.round(score * 100) / 100
  return String(rounded)
}
