<template>
  <z-paging ref="paging" v-model="rows" :loading-more-enabled="false" :refresher-enabled="false" :hide-empty-view="true" @query="queryList">
    <template #top>
      <uni-nav-bar title="错题库" :border="false" status-bar background-color="#f4f7f5" color="#1c2430" />
    </template>
    <view class="sheet">
      <view v-if="quizWrongs.length" class="card">
        <text class="title">练习错题 · {{ quizWrongs.length }} 道</text>
        <text class="muted stem">语文 {{ quizWrongs.filter(item => item.subject === '语文').length }} 道 · 数学 {{ quizWrongs.filter(item => item.subject === '数学').length }} 道</text>
      </view>
      <view v-for="item in quizWrongs" :key="item.id" class="card">
        <text class="muted">{{ item.subject }} · {{ item.topic }} · 累计答错 {{ item.mistakes }} 次</text>
        <view class="title stem">{{ item.stem }}</view>
        <view class="stem">你的答案：{{ item.input }}</view>
        <image v-if="item.handwriting && item.handwriting.length" :src="handwritingPreview(item.handwriting)" mode="widthFix" class="wrong-handwriting" />
        <view class="stem">参考答案：{{ item.answer }}</view>
        <view class="stem">得分：{{ item.score }} / {{ item.full }}</view>
        <view class="muted stem">{{ item.reason }}</view>
        <view v-if="item.result && item.result.explain !== item.reason" class="muted stem">{{ item.result.explain }}</view>
      </view>
      <view v-for="group in rows" :key="group.kpId" class="card" @click="practice(group)">
        <view class="row">
          <text class="title">{{ group.kpName }}</text>
          <text class="link">去练习</text>
        </view>
        <view v-for="item in group.items" :key="item.itemId" class="muted stem">{{ item.stem }}</view>
      </view>
      <yd-empet v-if="loaded && !rows.length && !quizWrongs.length" text="还没有错题" />
    </view>
  </z-paging>
</template>

<script setup>
// 错题列表
import { onShow } from '@dcloudio/uni-app'
// 按知识点回练
import { useLearningStore } from '@/store/learning.js'
import { ref } from 'vue'
import { readQuizWrongs, handwritingPreview } from '@/domain/quiz-wrongs.js'

const store = useLearningStore()
const paging = ref(null)
const rows = ref([])
const quizWrongs = ref([])
const loaded = ref(false)
const loading = ref(false)

/** 加载错题分组。列表写入后再显示空态，失败时提示。 */
function queryList() {
  try {
    quizWrongs.value = readQuizWrongs()
    Promise.resolve(paging.value.complete(store.wrongGroups)).then(() => {
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

/** 进入该知识点的练习。 */
function practice(group) {
  if (loading.value) {
    return
  }
  loading.value = true
  try {
    const nodeId = store.openWrong(group.kpId)
    uni.navigateTo({ url: `/pages/precision/practice?nodeId=${nodeId}` })
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
.wrong-handwriting { width: 100%; margin-top: 8px; background: #f4f7f5; border-radius: 12px; }
.stem {
  margin-top: 8px;
  line-height: 1.5;
}
</style>
