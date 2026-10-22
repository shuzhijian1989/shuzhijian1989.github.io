<template>
  <z-paging :refresher-enabled="false" :loading-more-enabled="false" :auto="false" :hide-empty-view="true">
    <template #top>
      <uni-nav-bar title="家长学情" :border="false" status-bar left-icon="left" background-color="#f4f7f5" color="#1c2430" @clickLeft="goBack" />
    </template>
    <view class="sheet">
      <!-- TODO: 正确率、订正率、上周掌握度还没有字段。哑铃图等上周分值返回后再画，未测不补 0。 -->
      <view class="stats">
        <view class="stats__item">
          <text class="stats__num">{{ parent.weakPoints.length }}</text>
          <text class="muted">薄弱项</text>
        </view>
        <view class="stats__item">
          <text class="stats__num">{{ parent.records.length }}</text>
          <text class="muted">完成记录</text>
        </view>
      </view>
      <view class="card">
        <text class="title">薄弱知识点</text>
        <view v-if="parent.weakPoints.length">
          <view v-for="item in parent.weakPoints" :key="item.id" class="stack-item">
            <view class="row">
              <text>{{ item.name }}</text>
              <text class="status" :class="statusTone(item.status)">{{ item.status }}</text>
            </view>
            <text v-if="item.masteryText !== item.status" class="muted mastery-text">{{ item.masteryText }}</text>
          </view>
        </view>
        <yd-empet v-else text="还没有薄弱项" />
      </view>
      <view class="card">
        <text class="title">已完成</text>
        <view v-if="parent.records.length" class="record-list">
          <view v-for="record in parent.records" :key="record.id" class="record">
            <view class="record__dot" />
            <text>{{ record.text }}</text>
          </view>
        </view>
        <yd-empet v-else text="还没有完成记录" />
      </view>
    </view>
  </z-paging>
</template>

<script setup>
// 家长只读，不提供时长管控
import { useLearningStore } from '@/store/learning.js'
// 状态颜色档，文案仍用原字段
import { statusTone } from '@/status-tone.js'
import { computed } from 'vue'

const store = useLearningStore()

/** 薄弱项和完成记录。 */
const parent = computed(() => store.parentCards)

/** 返回上一页。 */
function goBack() {
  uni.navigateBack()
}
</script>

<style>
.stats {
  display: flex;
  margin: 12px 16px 0;
  padding: 16px;
  background: #ffffff;
  border: 1px solid #e7eeea;
  border-radius: 16px;
}

.stats__item {
  flex: 1;
}

.stats__num {
  display: block;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.2;
}
</style>
