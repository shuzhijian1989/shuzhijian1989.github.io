<template>
  <z-paging :refresher-enabled="false" :loading-more-enabled="false" :auto="false" :hide-empty-view="true">
    <template #top>
      <uni-nav-bar title="诊断结果" :border="false" status-bar left-icon="left" background-color="#f4f7f5" color="#1c2430" @clickLeft="goBack" />
    </template>
    <view class="sheet">
      <view class="card">
        <text class="title">章节掌握度</text>
        <!-- TODO: 少于 3 个已测章节时不画雷达，避免把未测补成 0。 -->
        <radar-chart :axes="result.radarAxes" />
        <text v-if="result.radarAxes.length < 3" class="muted radar-empty">已测章节少于 3 个</text>
      </view>
      <view v-if="result.weakPoints.length" class="card">
        <text class="title">薄弱项</text>
        <view v-for="item in result.weakPoints" :key="item.id" class="stack-item">
          <view class="row">
            <text>{{ item.name }}</text>
            <text class="status" :class="statusTone(item.status)">{{ item.status }}</text>
          </view>
          <text v-if="item.masteryText !== item.status" class="muted mastery-text">{{ item.masteryText }}</text>
        </view>
      </view>
      <yd-empet v-else text="这次没有薄弱项" />
    </view>
  </z-paging>
</template>

<script setup>
// 诊断结果
import { useLearningStore } from '@/store/learning.js'
// 状态颜色档，文案仍用原字段
import { statusTone } from '@/status-tone.js'
import { computed } from 'vue'

const store = useLearningStore()

/** 雷达和薄弱列表都用仓库里的结果。 */
const result = computed(() => store.resultCards)

/** 返回上一页。 */
function goBack() {
  uni.navigateBack()
}
</script>

<style>
.radar-empty {
  display: block;
  margin-top: 8px;
}
</style>
