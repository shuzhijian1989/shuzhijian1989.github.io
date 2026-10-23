<template>
  <view class="handwriting-board">
    <view class="board-toolbar">
      <text>手写作答</text>
      <button size="mini" @click="undo">撤销</button>
      <button size="mini" @click="clear">清空</button>
    </view>
    <canvas canvas-id="answer-handwriting" class="writing-canvas" :disable-scroll="true"
      @touchstart="begin" @touchmove.stop.prevent="move" @touchend="end" @touchcancel="end"
      @mousedown="begin" @mousemove="mouseMove" @mouseup="end" @mouseleave="end" />
    <text class="board-hint">{{ localEnabled ? '数字和 > < = + - 可直接手写后提交，自动识别评分。数字之间留空隙，写在同一行。' : '这类题请在下方输入文字，可使用手机输入法的手写功能。' }}</text>
    <input :value="modelValue" class="board-answer" :placeholder="localEnabled ? '也可直接输入答案' : '在这里输入答案（可用手机手写输入法）'"
      @input="inputText" />
  </view>
</template>

<script setup>
import { getCurrentInstance, onMounted } from 'vue'
defineProps({ modelValue: { type: String, default: '' }, localEnabled: { type: Boolean, default: false } })
const emit = defineEmits(['update:modelValue', 'change', 'typing'])
function inputText(event) { emit('update:modelValue', event.detail.value); emit('typing') }
const instance = getCurrentInstance()
let context
let strokes = []
let active = null
function point(event) {
  const touch = event.touches?.[0] || event.detail || event
  return { x: touch.x ?? touch.offsetX ?? event.offsetX, y: touch.y ?? touch.offsetY ?? event.offsetY }
}
function render() {
  if (!context) return
  context.clearRect(0, 0, 2000, 2000)
  context.setStrokeStyle('#1c2430')
  context.setLineWidth(4)
  context.setLineCap('round')
  context.setLineJoin('round')
  for (const stroke of strokes) {
    context.beginPath()
    context.moveTo(stroke[0].x, stroke[0].y)
    if (stroke.length === 1) context.lineTo(stroke[0].x + 0.1, stroke[0].y + 0.1)
    for (const p of stroke.slice(1)) context.lineTo(p.x, p.y)
    context.stroke()
  }
  context.draw()
}
function begin(event) {
  if (active) return
  const p = point(event)
  if (!Number.isFinite(p.x) || !Number.isFinite(p.y)) return
  active = [p]
  strokes.push(active)
  render()
}
function move(event) {
  if (!active) return
  const p = point(event)
  if (!Number.isFinite(p.x) || !Number.isFinite(p.y)) return
  active.push(p)
  render()
}
function mouseMove(event) { if (event.buttons === 1) move(event); else end() }
function publish() { emit('change', strokes.map(stroke => stroke.map(p => ({ ...p })))) }
function end() { if (!active) return; active = null; publish() }
function undo() { active = null; strokes.pop(); render(); publish() }
function clear() { active = null; strokes = []; render(); publish() }
onMounted(() => { context = uni.createCanvasContext('answer-handwriting', instance.proxy); render() })
</script>

<style scoped>
.handwriting-board { margin-top: 12px; }
.board-toolbar { display: flex; align-items: center; gap: 12px; margin-bottom: 8px; }
.board-toolbar text { flex: 1; }
.board-toolbar button { margin: 0; }
.writing-canvas { width: 100%; height: 260px; background: #fff; border: 1px solid #cfe3db; border-radius: 12px; touch-action: none; }
.board-hint { display: block; margin: 8px 0; color: #667085; font-size: 13px; }
.board-answer { height: 44px; padding: 0 12px; background: #f4f7f5; border-radius: 12px; }
</style>
