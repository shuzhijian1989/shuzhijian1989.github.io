const KEY = 'midterm-quiz-wrongs-v1'

export function clearQuizWrongs(storage = uni) {
  storage.removeStorageSync(KEY)
}

/** 使用数值坐标生成只读笔迹预览。 */
export function handwritingPreview(strokes = []) {
  const lines = strokes.map(stroke => stroke.filter(p => Number.isFinite(p.x) && Number.isFinite(p.y)))
  const points = lines.flat()
  if (!points.length) return ''
  const width = Math.max(320, ...points.map(p => p.x + 8))
  const height = Math.max(260, ...points.map(p => p.y + 8))
  const paths = lines.filter(line => line.length).map(line => {
    const d = line.map((p, i) => `${i ? 'L' : 'M'}${p.x},${p.y}`).join(' ')
    return `<path d="${d} l0.1,0.1"/>`
  }).join('')
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"><g fill="none" stroke="#1c2430" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">${paths}</g></svg>`)}`
}

export function readQuizWrongs(storage = uni) {
  const raw = storage.getStorageSync(KEY)
  if (!raw) return []
  const records = typeof raw === 'string' ? JSON.parse(raw) : raw
  if (!Array.isArray(records)) throw new Error('错题数据格式不正确')
  return records
}

/** 每道错题保留最近一次错误作答，正确重做不会删除历史错题。 */
export function saveQuizWrong(record, storage = uni) {
  if (record.score >= record.full) return
  const records = readQuizWrongs(storage)
  const id = `${record.subject}-${record.no}`
  const previous = records.find(item => item.id === id)
  const next = { ...record, id, mistakes: (previous?.mistakes || 0) + 1, updatedAt: Date.now() }
  storage.setStorageSync(KEY, JSON.stringify([next, ...records.filter(item => item.id !== id)]))
}
