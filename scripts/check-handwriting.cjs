const fs = require('node:fs')
const vm = require('node:vm')
const assert = require('node:assert/strict')
const script = file => fs.readFileSync(file, 'utf8').split('<script setup>')[1].split('</script>')[0].replace(/^import .*$/gm, '')
const events = []
const canvas = new Proxy({}, { get: () => () => {} })
const board = vm.createContext({
  defineProps() {}, defineEmits: () => (name, data) => events.push({ name, data }),
  getCurrentInstance: () => ({ proxy: {} }), onMounted: fn => fn(),
  uni: { createCanvasContext: () => canvas }
})
vm.runInContext(script('src/components/handwriting-board/handwriting-board.vue'), board)
vm.runInContext('begin({ touches: [{ x: 80, y: 90 }] }); move({ touches: [{ x: 20, y: 120 }] }); end()', board)
assert.equal(events.at(-1).data.length, 1)
const strokes = events.at(-1).data
vm.runInContext('undo()', board)
assert.equal(events.at(-1).data.length, 0)
vm.runInContext('begin({ offsetX: 30, offsetY: 40 }); mouseMove({ buttons: 1, offsetX: 50, offsetY: 60 }); end(); clear()', board)
assert.equal(events.at(-1).data.length, 0)
const before = events.length
vm.runInContext('end()', board)
assert.equal(events.length, before, '移出画板时不能重复发布笔迹')
console.log('通过：触屏/鼠标笔迹、撤销、清空、无笔画时不重复触发变更。')
