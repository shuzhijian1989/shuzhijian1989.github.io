<template>
  <z-paging ref="paging" v-model="rows" :loading-more-enabled="false" :refresher-enabled="false" @query="queryList">
    <template #top>
      <uni-nav-bar title="精准学" :border="false" status-bar background-color="#f4f7f5" color="#1c2430" />
    </template>
    <view class="sheet">
      <view class="card">
        <text class="muted">{{ textbook.subject }} · {{ textbook.name }}</text>
        <button class="primary action-btn" :loading="loading" :disabled="loading" @click="openDiagnostic">{{ diagnosticText }}</button>
      </view>
      <view v-for="chapter in rows" :key="chapter.id" class="card">
        <view class="row">
          <text class="title">{{ chapter.name }}</text>
          <text class="status" :class="statusTone(chapter.status)">{{ chapter.status }}</text>
        </view>
        <text v-if="chapter.masteryText !== chapter.status" class="muted mastery-text">{{ chapter.masteryText }}</text>
        <view v-if="chapter.mastery != null" class="mastery-track">
          <view class="mastery-track__bar" :class="statusTone(chapter.status)" :style="{ width: masteryWidth(chapter.mastery) }" />
        </view>
      </view>
    </view>
  </z-paging>
</template>

<script setup>
// 返回本页时刷新章节
import { onShow } from '@dcloudio/uni-app'
// 章节掌握度
import { useLearningStore } from '@/store/learning.js'
// 状态颜色档，文案仍用原字段
import { statusTone } from '@/status-tone.js'
import { computed, ref } from 'vue'

const store = useLearningStore()
const paging = ref(null)
const rows = ref([])
const loading = ref(false)

/** 当前教材，放在诊断按钮上方。 */
const textbook = computed(() => store.textbookCard)

/** 诊断按钮文案，直接使用是否已有诊断记录。 */
const diagnosticText = computed(() => {
  if (store.diagnostic && store.diagnostic.finished) {
    return '查看诊断结果'
  }
  if (store.diagnostic) {
    return '继续诊断'
  }
  return '开始诊断'
})

/** 掌握度条宽度。0 也保留，未测不调用。 */
function masteryWidth(mastery) {
  return `${mastery * 100}%`
}

/** 加载章节列表。 */
function queryList() {
  try {
    paging.value.complete(store.chapterCards)
  } catch (error) {
    paging.value.complete(false)
    uni.showToast({ title: error.message, icon: 'none' })
  }
}

/** 进入诊断或结果。开始诊断会写入本地进度。 */
function openDiagnostic() {
  if (store.diagnostic && store.diagnostic.finished) {
    uni.navigateTo({ url: '/pages/precision/result' })
    return
  }
  loading.value = true
  try {
    store.beginDiagnostic()
    uni.navigateTo({ url: '/pages/precision/diagnostic' })
  } catch (error) {
    uni.showToast({ title: error.message, icon: 'none' })
  } finally {
    loading.value = false
  }
}

onShow(() => {
  if (paging.value) {
    paging.value.reload()
  }
})
</script>

<style>
.action-btn {
  margin-top: 12px;
}
</style>
