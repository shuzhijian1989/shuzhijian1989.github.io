/**
 * 状态文案对应的颜色档。
 * 只决定样式类名，页面上的文字仍用原字段。
 */
const toneOf = {
  未开始: 'is-idle',
  未测: 'is-idle',
  未学完: 'is-idle',
  进行中: 'is-doing',
  学习中: 'is-doing',
  已完成: 'is-done',
  已掌握: 'is-done',
  已学完: 'is-done',
  已跳过: 'is-skip',
  薄弱: 'is-weak'
}

/** 取状态颜色档。没有对应文案时不加颜色类。 */
export function statusTone(status) {
  return toneOf[status] || ''
}
