<template>
  <z-paging ref="paging" v-model="rows" :loading-more-enabled="false" :refresher-enabled="false" @query="queryList">
    <template #top>
      <uni-nav-bar title="掌握度" :border="false" status-bar left-icon="left" background-color="#f4f7f5" color="#1c2430" @clickLeft="goBack" />
    </template>
    <view class="sheet">
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
// 与精准学同一份章节掌握度
import { useLearningStore } from '@/store/learning.js'
// 状态颜色档，文案仍用原字段
import { statusTone } from '@/status-tone.js'
import { ref } from 'vue'

const store = useLearningStore()
const paging = ref(null)
const rows = ref([])

/** 掌握度条宽度。0 也保留，未测不调用。 */
function masteryWidth(mastery) {
  return `${mastery * 100}%`
}

/** 加载章节掌握度。 */
function queryList() {
  try {
    paging.value.complete(store.chapterCards)
  } catch (error) {
    paging.value.complete(false)
    uni.showToast({ title: error.message, icon: 'none' })
  }
}

/** 返回上一页。 */
function goBack() {
  uni.navigateBack()
}
</script>
