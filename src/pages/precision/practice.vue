<template>
  <z-paging :refresher-enabled="false" :loading-more-enabled="false" :auto="false" :hide-empty-view="true">
    <template #top>
      <uni-nav-bar title="练习" :border="false" status-bar left-icon="left" background-color="#f4f7f5" color="#1c2430" @clickLeft="goBack" />
    </template>
    <view class="sheet">
      <view class="card" v-if="view.finished">
        <text class="eyebrow">练习结果</text>
        <view class="result-score">做对 {{ view.correctCount }} / {{ view.totalCount }}</view>
        <view class="muted result">{{ view.resultText }}</view>
      </view>
      <view class="card" v-else>
        <text class="muted">第 {{ view.currentIndex }} / {{ view.totalCount }} 题</text>
        <view class="meter">
          <view class="meter__bar" :style="{ width: meterWidth(view.currentIndex, view.totalCount) }" />
        </view>
        <view class="title question">{{ view.stem }}</view>
        <view
          v-for="(option, index) in view.options"
          :key="option.id"
          class="option"
          :class="{ 'option--on': option.id === selectedId }"
          @click="selectedId = option.id"
        >
          <text class="option__key">{{ optionKey(index) }}</text>
          <text class="option__text">{{ option.text }}</text>
        </view>
      </view>
    </view>
    <template #bottom>
      <view class="bottom-bar" v-if="view.finished">
        <button class="primary" @click="goToday">返回今日学</button>
      </view>
      <view class="bottom-bar actions" v-else>
        <button class="ghost" @click="askTeacher">问老师</button>
        <button class="primary" :loading="loading" :disabled="loading || !selectedId" @click="submit">提交</button>
      </view>
    </template>
  </z-paging>
</template>

<script setup>
// 练习节点 id
import { onLoad } from '@dcloudio/uni-app'
// 练习作答
import { useLearningStore } from '@/store/learning.js'
import { ref } from 'vue'

const store = useLearningStore()
const nodeId = ref('')
const loading = ref(false)
const selectedId = ref('')
const startedAt = ref(Date.now())
const view = ref({
  finished: false,
  stem: '',
  options: [],
  itemId: '',
  currentIndex: 1,
  totalCount: 3,
  correctCount: 0,
  resultText: ''
})

/** 进度条宽度。总题数为 0 时不画进度。 */
function meterWidth(done, total) {
  if (!total) {
    return '0%'
  }
  return `${(done / total) * 100}%`
}

/** 选项序号，按顺序标 A、B、C。 */
function optionKey(index) {
  return 'ABCDEFGH'[index] || String(index + 1)
}

/** 读取当前这道练习。 */
function loadView() {
  const next = store.readPractice(nodeId.value)
  if (next.itemId !== view.value.itemId) {
    selectedId.value = ''
    startedAt.value = Date.now()
  }
  view.value = next
}

/** 提交这一题。满 3 题后的分支文案由仓库返回。 */
function submit() {
  loading.value = true
  try {
    const seconds = Math.round((Date.now() - startedAt.value) / 1000)
    store.submitPractice({ nodeId: nodeId.value, optionId: selectedId.value, seconds })
    loadView()
  } catch (error) {
    uni.showToast({ title: error.message, icon: 'none' })
  } finally {
    loading.value = false
  }
}

/** 带着当前题去问老师。 */
function askTeacher() {
  if (!view.value.itemId) {
    return
  }
  try {
    store.openTutor(view.value.itemId)
    uni.switchTab({ url: '/pages/tutor/index' })
  } catch (error) {
    uni.showToast({ title: error.message, icon: 'none' })
  }
}

/** 返回今日学。 */
function goToday() {
  uni.switchTab({ url: '/pages/today/index' })
}

/** 返回上一页。 */
function goBack() {
  uni.navigateBack()
}

onLoad((query) => {
  nodeId.value = query.nodeId || ''
  try {
    loadView()
  } catch (error) {
    uni.showToast({ title: error.message, icon: 'none' })
  }
})
</script>

<style>
.result-score {
  margin-top: 8px;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.3;
}

.result {
  margin-top: 8px;
}
</style>
