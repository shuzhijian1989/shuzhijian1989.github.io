<template>
  <z-paging :refresher-enabled="false" :loading-more-enabled="false" :auto="false" :hide-empty-view="true">
    <template #top>
      <uni-nav-bar :title="view.title || '微课'" :border="false" status-bar left-icon="left" background-color="#f4f7f5" color="#1c2430" @clickLeft="goBack" />
    </template>
    <view class="sheet">
      <view class="card">
        <text class="muted">{{ view.durationText }} · 第 {{ view.nodeIndex }} / {{ view.nodeCount }} 步</text>
        <view class="meter">
          <view class="meter__bar" :style="{ width: meterWidth(view.nodeIndex, view.nodeCount) }" />
        </view>
        <view class="title question">{{ view.text }}</view>
        <view
          v-for="(option, index) in view.options"
          :key="option.id"
          class="option"
          :class="{ 'option--on': option.id === selectedId }"
          @click="choose(option)"
        >
          <text class="option__key">{{ optionKey(index) }}</text>
          <text class="option__text">{{ option.text }}</text>
        </view>
        <view v-if="view.feedback" class="feedback">{{ view.feedback }}</view>
      </view>
    </view>
    <template #bottom>
      <view class="bottom-bar">
        <button v-if="view.done && view.practiceNodeId" class="primary" @click="goPractice">去做练习</button>
        <button v-else-if="view.done" class="primary" @click="goBack">学完了</button>
        <button v-else class="primary" :loading="loading" :disabled="loading || !view.canNext" @click="next">继续</button>
      </view>
    </template>
  </z-paging>
</template>

<script setup>
// 微课 id
import { onLoad } from '@dcloudio/uni-app'
// 微课播放进度
import { useLearningStore } from '@/store/learning.js'
import { ref } from 'vue'

const store = useLearningStore()
const lessonId = ref('')
const loading = ref(false)
const selectedId = ref('')
const view = ref({
  title: '',
  durationText: '',
  nodeIndex: 1,
  nodeCount: 1,
  kind: '',
  text: '',
  options: [],
  feedback: '',
  canNext: false,
  done: false,
  practiceNodeId: ''
})

/** 进度条宽度。总步数为 0 时不画进度。 */
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

/** 读取当前节点。 */
function loadView() {
  view.value = store.readLesson(lessonId.value)
}

/** 必答节点提交后才允许继续。讲解节点可以直接继续。 */
function choose(option) {
  if (view.value.kind !== '必答' || view.value.feedback) {
    return
  }
  selectedId.value = option.id
  loading.value = true
  try {
    store.submitLesson({ lessonId: lessonId.value, optionId: option.id })
    loadView()
  } catch (error) {
    uni.showToast({ title: error.message, icon: 'none' })
  } finally {
    loading.value = false
  }
}

/** 进入下一步。未答的必答节点过不去。 */
function next() {
  loading.value = true
  try {
    store.advanceLesson(lessonId.value)
    selectedId.value = ''
    loadView()
  } catch (error) {
    uni.showToast({ title: error.message, icon: 'none' })
  } finally {
    loading.value = false
  }
}

/** 微课结束后进入这 3 道练习。 */
function goPractice() {
  uni.redirectTo({ url: `/pages/precision/practice?nodeId=${view.value.practiceNodeId}` })
}

/** 返回上一页。 */
function goBack() {
  uni.navigateBack()
}

onLoad((query) => {
  lessonId.value = query.lessonId || ''
  try {
    loadView()
  } catch (error) {
    uni.showToast({ title: error.message, icon: 'none' })
  }
})
</script>

<style>
.feedback {
  margin-top: 12px;
  padding: 10px 12px;
  border-radius: 12px;
  background: #f3faf7;
  color: #1f6f5b;
  line-height: 1.5;
}
</style>
