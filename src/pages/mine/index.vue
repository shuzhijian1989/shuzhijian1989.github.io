<template>
  <z-paging :refresher-enabled="false" :loading-more-enabled="false" :auto="false" :hide-empty-view="true">
    <template #top>
      <uni-nav-bar title="我的" :border="false" status-bar background-color="#f4f7f5" color="#1c2430" />
    </template>
    <view class="sheet">
      <view class="card">
        <text class="eyebrow">{{ textbook.subject }}</text>
        <text class="title">{{ textbook.name }}</text>
      </view>
      <view class="card menu">
        <view v-for="item in entries" :key="item.url" class="menu-item" @click="openEntry(item)">
          <text>{{ item.title }}</text>
          <view class="chevron" />
        </view>
      </view>
      <button class="quiet" @click="reset">清空本地学习记录</button>
    </view>
  </z-paging>
</template>

<script setup>
// 我的入口。家长页只读，没有管控。
const entries = [
  { title: '教材版本', url: '/pages/mine/textbook' },
  { title: '错题库', url: '/pages/mine/wrongs' },
  { title: '掌握度', url: '/pages/mine/report' },
  { title: '学习记录', url: '/pages/mine/records' },
  { title: '家长学情', url: '/pages/mine/parent' },
  { title: '期中试卷', url: '/pages/mine/paper' }
]

// 学习进度
import { useLearningStore } from '@/store/learning.js'
import { computed } from 'vue'
import { clearQuizWrongs } from '@/domain/quiz-wrongs.js'

const store = useLearningStore()

/** 当前教材，只展示学科和册名。 */
const textbook = computed(() => store.textbookCard)

/** 打开二级页。 */
function openEntry(item) {
  if (item.url === '/pages/mine/wrongs') {
    uni.switchTab({ url: item.url })
    return
  }
  uni.navigateTo({ url: item.url })
}

/** 清空本地进度。没有账号接口，只清本机。 */
function reset() {
  clearQuizWrongs()
  store.reset()
  uni.showToast({ title: '已清空', icon: 'none' })
}
</script>

<style>
.menu {
  padding-top: 4px;
  padding-bottom: 4px;
}

.menu-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 52px;
  border-bottom: 1px solid #eef3f1;
}

.menu-item:last-child {
  border-bottom: none;
}

.chevron {
  width: 8px;
  height: 8px;
  border-right: 2px solid #c5d0cb;
  border-bottom: 2px solid #c5d0cb;
  transform: rotate(-45deg);
}

.quiet {
  margin: 8px 16px 0;
  height: 44px;
  line-height: 44px;
  background-color: transparent;
  color: #8a6244;
  font-size: 14px;
}

uni-button.quiet {
  background-color: transparent;
}
</style>
