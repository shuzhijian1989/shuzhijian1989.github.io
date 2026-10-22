<template>
  <z-paging :refresher-enabled="false" :loading-more-enabled="false" :auto="false" :hide-empty-view="true">
    <template #top>
      <uni-nav-bar title="诊断" :border="false" status-bar left-icon="left" background-color="#f4f7f5" color="#1c2430" @clickLeft="goBack" />
    </template>
    <view class="sheet">
      <view class="card">
        <text class="muted">已答 {{ view.answeredCount }} / 计划 {{ view.plannedCount }}</text>
        <view class="meter">
          <view class="meter__bar" :style="{ width: meterWidth(view.answeredCount, view.plannedCount) }" />
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
      <view class="bottom-bar">
        <button class="primary" :loading="loading" :disabled="loading || !selectedId" @click="submit">提交</button>
      </view>
    </template>
  </z-paging>
</template>

<script setup>
// 进入页面时取当前题
import { onLoad, onShow } from '@dcloudio/uni-app'
// 诊断作答
import { useLearningStore } from '@/store/learning.js'
import { ref } from 'vue'

const store = useLearningStore()
const loading = ref(false)
const selectedId = ref('')
const startedAt = ref(Date.now())
const view = ref({
  finished: false,
  answeredCount: 0,
  plannedCount: 0,
  stem: '',
  options: [],
  itemId: ''
})

/** 进度条宽度。计划题数为 0 时不画进度。 */
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

/** 从仓库取当前题。诊断结束就去结果页。 */
function loadView() {
  const next = store.readDiagnostic()
  if (next.finished) {
    uni.redirectTo({ url: '/pages/precision/result' })
    return
  }
  if (next.itemId !== view.value.itemId) {
    selectedId.value = ''
    startedAt.value = Date.now()
  }
  view.value = next
}

/** 提交当前选项。用时按秒记，0 秒也保留。 */
function submit() {
  loading.value = true
  try {
    const seconds = Math.round((Date.now() - startedAt.value) / 1000)
    store.submitDiagnostic({ optionId: selectedId.value, seconds })
    loadView()
  } catch (error) {
    uni.showToast({ title: error.message, icon: 'none' })
  } finally {
    loading.value = false
  }
}

/** 返回上一页。 */
function goBack() {
  uni.navigateBack()
}

onLoad(() => {
  try {
    store.beginDiagnostic()
  } catch (error) {
    uni.showToast({ title: error.message, icon: 'none' })
  }
})

onShow(() => {
  try {
    loadView()
  } catch (error) {
    uni.showToast({ title: error.message, icon: 'none' })
  }
})
</script>
