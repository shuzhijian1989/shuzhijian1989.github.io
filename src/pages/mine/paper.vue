<template>
  <z-paging :refresher-enabled="false" :loading-more-enabled="false" :auto="false" :hide-empty-view="true">
    <template #top>
      <uni-nav-bar
        title="期中试卷"
        :border="false"
        status-bar
        left-icon="left"
        :right-text="answerText"
        background-color="#f4f7f5"
        color="#1c2430"
        @clickLeft="goBack"
        @clickRight="toggleAnswer"
      />
    </template>
    <view class="sheet">
      <view v-for="page in paper.pages" :key="page.pageNo" class="paper">
        <text class="paper-title">{{ paper.title }}</text>
        <text class="paper-sub">{{ page.subject }}</text>
        <view class="name-row">
          <text>姓名________</text>
          <text>班级________</text>
        </view>
        <view v-for="section in page.sections" :key="section.title" class="block">
          <text class="block-title">{{ section.title }}</text>
          <view v-for="(item, index) in section.items" :key="index" class="item">
            <text class="stem">{{ item.stem }}</text>
            <text v-if="item.hint" class="hint">{{ item.hint }}</text>
            <view v-if="item.options" class="options">
              <text v-for="option in item.options" :key="option.key" class="option-line">{{ option.key }}. {{ option.text }}</text>
            </view>
            <view v-if="item.lines" class="writes">
              <view v-for="line in item.lines" :key="line" class="write-line" />
            </view>
            <text v-if="showAnswer" class="answer">答案：{{ item.answer }}</text>
            <text v-if="showAnswer && item.rubric" class="answer">{{ item.rubric }}</text>
          </view>
        </view>
        <text class="page-foot">{{ page.pageFoot }}</text>
      </view>
    </view>
  </z-paging>
</template>

<script setup>
// 写死的两页期中试卷
import { midtermPaper } from '@/domain/midterm-paper.js'
import { computed, ref } from 'vue'

const paper = midtermPaper
const showAnswer = ref(false)

/** 导航右侧文案。答案展开时改成收起。 */
const answerText = computed(() => (showAnswer.value ? '隐藏' : '答案'))

/** 展开或收起标准答案。 */
function toggleAnswer() {
  showAnswer.value = !showAnswer.value
}

/** 返回上一页。 */
function goBack() {
  uni.navigateBack()
}
</script>

<style>
.paper {
  margin: 12px 16px 0;
  padding: 20px 16px 16px;
  background: #ffffff;
  border: 1px solid #e7eeea;
  border-radius: 16px;
}

.paper-title {
  display: block;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
}

.paper-sub {
  display: block;
  margin-top: 4px;
  color: #1f6f5b;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
}

.name-row {
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  color: #667085;
  font-size: 14px;
}

.block {
  margin-top: 18px;
}

.block-title {
  display: block;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
}

.item {
  margin-top: 12px;
}

.stem {
  display: block;
  font-size: 17px;
  line-height: 1.6;
}

.hint {
  display: block;
  margin-top: 4px;
  color: #667085;
  font-size: 15px;
}

.options {
  margin-top: 6px;
}

.option-line {
  display: block;
  margin-top: 4px;
  font-size: 16px;
  line-height: 1.5;
}

.writes {
  margin-top: 8px;
}

.write-line {
  height: 28px;
  border-bottom: 1px solid #d5e0db;
}

.answer {
  display: block;
  margin-top: 6px;
  color: #1f6f5b;
  font-size: 14px;
  line-height: 1.5;
}

.page-foot {
  display: block;
  margin-top: 18px;
  color: #667085;
  font-size: 13px;
  text-align: center;
}
</style>
