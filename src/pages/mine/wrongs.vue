<template>
  <z-paging ref="paging" v-model="rows" :loading-more-enabled="false" :refresher-enabled="false" :hide-empty-view="true" @query="queryList">
    <template #top>
      <uni-nav-bar title="错题本" :border="false" status-bar left-icon="left" background-color="#f4f7f5" color="#1c2430" @clickLeft="goBack" />
    </template>
    <view class="sheet">
      <view v-for="group in rows" :key="group.kpId" class="card" @click="practice(group)">
        <view class="row">
          <text class="title">{{ group.kpName }}</text>
          <text class="link">去练习</text>
        </view>
        <view v-for="item in group.items" :key="item.itemId" class="muted stem">{{ item.stem }}</view>
      </view>
      <yd-empet v-if="loaded && !rows.length" text="还没有错题" />
    </view>
  </z-paging>
</template>

<script setup>
// 错题列表
import { onShow } from '@dcloudio/uni-app'
// 按知识点回练
import { useLearningStore } from '@/store/learning.js'
import { ref } from 'vue'

const store = useLearningStore()
const paging = ref(null)
const rows = ref([])
const loaded = ref(false)
const loading = ref(false)

/** 加载错题分组。列表写入后再显示空态，失败时提示。 */
function queryList() {
  try {
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

/** 返回上一页。 */
function goBack() {
  uni.navigateBack()
}

onShow(() => {
  if (paging.value) {
    paging.value.reload()
  }
})
</script>

<style>
.stem {
  margin-top: 8px;
  line-height: 1.5;
}
</style>
