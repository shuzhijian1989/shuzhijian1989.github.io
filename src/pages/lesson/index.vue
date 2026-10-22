<template>
  <z-paging ref="paging" v-model="rows" :loading-more-enabled="false" :refresher-enabled="false" :hide-empty-view="true" @query="queryList">
    <template #top>
      <uni-nav-bar title="互动课" :border="false" status-bar background-color="#f4f7f5" color="#1c2430" />
    </template>
    <view class="sheet">
      <view v-for="chapter in rows" :key="chapter.chapterId">
        <view class="chapter">{{ chapter.chapterName }}</view>
        <view v-for="lesson in chapter.lessons" :key="lesson.id" class="card lesson" @click="openLesson(lesson)">
          <view class="lesson__main">
            <text class="title">{{ lesson.title }}</text>
            <text class="muted lesson-meta">{{ lesson.durationText }}</text>
          </view>
          <text class="status" :class="statusTone(lesson.doneText)">{{ lesson.doneText }}</text>
        </view>
      </view>
      <yd-empet v-if="loaded && !rows.length" text="还没有微课" />
    </view>
  </z-paging>
</template>

<script setup>
// 返回目录时刷新学完状态
import { onShow } from '@dcloudio/uni-app'
// 微课目录
import { useLearningStore } from '@/store/learning.js'
// 状态颜色档，文案仍用原字段
import { statusTone } from '@/status-tone.js'
import { ref } from 'vue'

const store = useLearningStore()
const paging = ref(null)
const rows = ref([])
const loaded = ref(false)

/** 按章节加载微课。列表写入后再显示空态，失败时提示。 */
function queryList() {
  try {
    Promise.resolve(paging.value.complete(store.lessonChapters)).then(() => {
      loaded.value = true
    }).catch((error) => {
      loaded.value = true
      uni.showToast({ title: error.message, icon: 'none' })
    })
  } catch (error) {
    loaded.value = true
    paging.value.complete(false)
    uni.showToast({ title: error.message, icon: 'none' })
  }
}

/** 打开同一套播放器。 */
function openLesson(lesson) {
  uni.navigateTo({ url: `/pages/lesson/player?lessonId=${lesson.id}` })
}

onShow(() => {
  if (paging.value) {
    paging.value.reload()
  }
})
</script>

<style>
.chapter {
  margin: 16px 16px 0;
  color: #667085;
  font-size: 13px;
  font-weight: 600;
}

.lesson {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.lesson__main {
  flex: 1;
  min-width: 0;
}

.lesson-meta {
  display: block;
  margin-top: 6px;
}
</style>
