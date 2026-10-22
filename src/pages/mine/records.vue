<template>
  <z-paging ref="paging" v-model="rows" :loading-more-enabled="false" :refresher-enabled="false" :hide-empty-view="true" @query="queryList">
    <template #top>
      <uni-nav-bar title="学习记录" :border="false" status-bar left-icon="left" background-color="#f4f7f5" color="#1c2430" @clickLeft="goBack" />
    </template>
    <view class="sheet">
      <view v-if="rows.length" class="card">
        <view v-for="record in rows" :key="record.id" class="record">
          <view class="record__dot" />
          <text>{{ record.text }}</text>
        </view>
      </view>
      <yd-empet v-if="loaded && !rows.length" text="还没有学习记录" />
    </view>
  </z-paging>
</template>

<script setup>
// 学习记录
import { useLearningStore } from '@/store/learning.js'
import { ref } from 'vue'

const store = useLearningStore()
const paging = ref(null)
const rows = ref([])
const loaded = ref(false)

/** 加载学习记录。列表写入后再显示空态，失败时提示。 */
function queryList() {
  try {
    Promise.resolve(paging.value.complete(store.recordRows)).then(() => {
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

/** 返回上一页。 */
function goBack() {
  uni.navigateBack()
}
</script>
