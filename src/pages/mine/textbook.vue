<template>
  <z-paging :refresher-enabled="false" :loading-more-enabled="false" :auto="false" :hide-empty-view="true">
    <template #top>
      <uni-nav-bar title="教材版本" :border="false" status-bar left-icon="left" background-color="#f4f7f5" color="#1c2430" @clickLeft="goBack" />
    </template>
    <view class="sheet">
      <view class="card">
        <text class="eyebrow">{{ textbook.subject }}</text>
        <text class="title">{{ textbook.name }}</text>
        <!-- TODO: 正式册次未确认，当前只有这一册，不能切换。 -->
      </view>
    </view>
  </z-paging>
</template>

<script setup>
// 教材版本
import { useLearningStore } from '@/store/learning.js'
import { computed } from 'vue'

const store = useLearningStore()

/** 当前写死的一册。 */
const textbook = computed(() => store.textbookCard)

/** 返回上一页。 */
function goBack() {
  uni.navigateBack()
}
</script>
