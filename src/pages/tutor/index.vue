<template>
  <z-paging ref="paging" v-model="rows" use-chat-record-mode :refresher-enabled="false" :loading-more-enabled="false" @query="queryList">
    <template #top>
      <uni-nav-bar title="问老师" :border="false" status-bar background-color="#f4f7f5" color="#1c2430" />
    </template>
    <view v-for="(message, index) in rows" :key="index" class="bubble-wrap" :class="message.role === 'teacher' ? 'is-teacher' : 'is-student'">
      <view class="bubble">{{ message.text }}</view>
    </view>
    <template #bottom>
      <view class="bottom-bar composer">
        <input v-model="draft" class="input" confirm-type="send" placeholder="说说你卡在哪" @confirm="send" />
        <button class="primary send" :loading="loading" :disabled="loading" @click="send">发送</button>
      </view>
    </template>
  </z-paging>
</template>

<script setup>
// 回到问老师时保留会话
import { onShow } from '@dcloudio/uni-app'
// 答疑状态机
import { useLearningStore } from '@/store/learning.js'
import { ref } from 'vue'

const store = useLearningStore()
const paging = ref(null)
const rows = ref([])
const draft = ref('')
const loading = ref(false)

/** 加载对话。聊天列表需要把最新一句放在数组前面。 */
function queryList() {
  try {
    const messages = store.tutorCards.messages.slice().reverse()
    paging.value.complete(messages)
  } catch (error) {
    paging.value.complete(false)
    uni.showToast({ title: error.message, icon: 'none' })
  }
}

/** 发送学生原话。空话不提交。 */
function send() {
  const text = draft.value
  loading.value = true
  try {
    store.sendTutor(text)
    draft.value = ''
    paging.value.reload()
  } catch (error) {
    uni.showToast({ title: error.message, icon: 'none' })
  } finally {
    loading.value = false
  }
}

onShow(() => {
  try {
    store.ensureTutor()
    if (paging.value) {
      paging.value.reload()
    }
  } catch (error) {
    uni.showToast({ title: error.message, icon: 'none' })
  }
})
</script>

<style>
.bubble-wrap {
  display: flex;
  padding: 6px 16px;
  transform: scaleY(-1);
}

.is-teacher {
  justify-content: flex-start;
}

.is-student {
  justify-content: flex-end;
}

.bubble {
  max-width: 78%;
  padding: 12px 14px;
  border-radius: 16px;
  line-height: 1.55;
  white-space: pre-wrap;
  background: #ffffff;
  border: 1px solid #e7eeea;
}

.is-teacher .bubble {
  border-bottom-left-radius: 4px;
}

.is-student .bubble {
  background: #1f6f5b;
  border-color: #1f6f5b;
  color: #ffffff;
  border-bottom-right-radius: 4px;
}

.composer {
  display: flex;
  gap: 8px;
  align-items: center;
}

.input {
  flex: 1;
  height: 44px;
  padding: 0 14px;
  background: #f4f7f5;
  border-radius: 12px;
  font-size: 16px;
}

.send {
  width: 72px;
  height: 44px;
  line-height: 44px;
  flex-shrink: 0;
}
</style>
