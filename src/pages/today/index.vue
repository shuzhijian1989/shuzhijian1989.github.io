<template>
  <z-paging :refresher-enabled="false" :loading-more-enabled="false" :auto="false" :hide-empty-view="true">
    <template #top>
      <uni-nav-bar title="今日学、加油【舒琛柯】奥利给！" :border="false" status-bar background-color="#f4f7f5" color="#1c2430" />
    </template>
    <view v-if="phase === 'ready'" class="sheet">
      <view class="card">
        <text class="title">期中练习</text>
        <text class="rule">我们一共做 40 道题，语文 20 道、数学 20 道。顺序是打乱的，提交过的题不会再出现。</text>
        <text class="rule">准备好了吗？点「开始」，我们就做第 1 题。</text>
        <button class="primary start" @click="start">开始</button>
      </view>
    </view>
    <view v-else-if="phase === 'quiz'" class="sheet">
      <view v-if="lastResult" class="card" :class="lastResult.correct ? 'feedback-ok' : 'feedback-miss'">
        <text class="feedback-line">{{ lastResult.comment }}</text>
        <text v-if="!lastResult.correct" class="feedback-line">正确答案：{{ lastResult.answer }}</text>
        <text v-if="!lastResult.correct" class="feedback-line">{{ lastResult.explain }}</text>
        <text v-if="lastResult.note" class="feedback-line">扣分：{{ lastResult.note }}</text>
        <text class="feedback-line">这题 {{ lastResult.score }} 分</text>
      </view>
      <view class="card">
        <text class="eyebrow">{{ current.subject }} 第{{ index + 1 }}题 / 共{{ quizOrder.length }}题</text>
        <text class="muted">{{ current.type }} · {{ current.score }}分</text>
        <text v-if="current.picture" class="picture">{{ current.picture }}</text>
        <text class="title question">{{ current.stem }}</text>
        <view v-if="current.options">
          <view v-for="option in current.options" :key="option.key" class="option"
            :class="{ 'option--on': option.key === selected }" @click="selected = option.key">
            <text class="option__key">{{ option.key }}</text>
            <text class="option__text">{{ option.text }}</text>
          </view>
        </view>
        <textarea v-else-if="current.grade === 'write' || current.grade === 'apply'" v-model="draft" class="answer-box"
          placeholder="写在这里" />
        <input v-else v-model="draft" class="answer-input" placeholder="写在这里" />
        <text class="ask">【请作答】写好后点提交。</text>
      </view>
    </view>
    <view v-else class="sheet">
      <view v-if="lastResult" class="card" :class="lastResult.correct ? 'feedback-ok' : 'feedback-miss'">
        <text class="feedback-line">{{ lastResult.comment }}</text>
        <text v-if="!lastResult.correct" class="feedback-line">正确答案：{{ lastResult.answer }}</text>
        <text v-if="!lastResult.correct" class="feedback-line">{{ lastResult.explain }}</text>
        <text v-if="lastResult.note" class="feedback-line">扣分：{{ lastResult.note }}</text>
        <text class="feedback-line">这题 {{ lastResult.score }} 分</text>
      </view>
      <view class="card">
        <text class="title">成绩报告</text>
        <text class="score-line">【总分】语文{{ report.chineseScore }}分 + 数学{{ report.mathScore }}分 = {{ report.totalScore
        }}分 /
          200分</text>
        <text class="block-name">【语文】得分 {{ report.chineseScore }} / 100</text>
        <view v-if="report.chineseWrongs.length">
          <view v-for="item in report.chineseWrongs" :key="'cn-' + item.no" class="wrong">
            <text class="wrong-line">第{{ item.no }}题 {{ item.stem }}</text>
            <text class="wrong-line">你的答案：{{ item.input }}</text>
            <text class="wrong-line">正确答案：{{ item.answer }}</text>
            <text class="wrong-line">{{ item.reason }}</text>
          </view>
        </view>
        <text v-else class="muted wrong-line">这次语文没有错题。</text>
        <text class="wrong-line">薄弱：{{ chineseWeakText }}</text>
        <text class="block-name">【数学】得分 {{ report.mathScore }} / 100</text>
        <view v-if="report.mathWrongs.length">
          <view v-for="item in report.mathWrongs" :key="'ma-' + item.no" class="wrong">
            <text class="wrong-line">第{{ item.no }}题 {{ item.stem }}</text>
            <text class="wrong-line">你的答案：{{ item.input }}</text>
            <text class="wrong-line">正确答案：{{ item.answer }}</text>
            <text class="wrong-line">{{ item.reason }}</text>
          </view>
        </view>
        <text v-else class="muted wrong-line">这次数学没有错题。</text>
        <text class="wrong-line">薄弱：{{ mathWeakText }}</text>
        <text class="block-name">【总体评价】</text>
        <text class="summary">{{ report.summary }}</text>
        <text class="block-name">【下一步建议】</text>
        <text v-for="(tip, index) in report.suggestions" :key="index" class="wrong-line">{{ tip }}</text>
      </view>
    </view>
    <template #bottom>
      <view v-if="phase === 'quiz'" class="bottom-bar" :class="{ actions: index > 0 }">
        <button v-if="index > 0" class="ghost" :disabled="submitting" @click="goPrev">返回上一题</button>
        <button class="primary" :loading="submitting" :disabled="submitting" @click="submit">提交</button>
      </view>
    </template>

  </z-paging>
  <view v-if="showVideo" class="video-mask">
    <view class="video-dialog">
      <text class="video-title">答对了，看一段【童年】的视频</text>
      <video class="reward-video" :src="videoSrc" autoplay controls object-fit="contain" @ended="closeVideo" />
      <button class="primary video-close" @click="closeVideo">看完了</button>
    </view>
  </view>

</template>

<script setup>
// 期中逐题练习和评分
import { buildQuizReport, gradeQuizAnswer, quizQuestions } from '@/domain/midterm-quiz.js'
import { computed, ref } from 'vue'

const encouragements = [
  '没关系，下一题慢慢看。',
  '这题没对，我们继续做。',
  '做错也没关系，你还在学。',
  '差一点点，下一题可以更仔细。',
  '不怕错，做完就很棒。'
]

const phase = ref('ready')
const index = ref(0)
const draft = ref('')
const selected = ref('')
const submitting = ref(false)
const lastResult = ref(null)
const records = ref([])
const quizOrder = ref([])
const showVideo = ref(false)
const videoSrc = ref('')

/** 当前这一题。顺序在开始时打乱，提交过的题只占一个位置。 */
const current = computed(() => quizOrder.value[index.value])

/** 全部题目批完后的成绩。 */
const report = computed(() => buildQuizReport(records.value))

/** 语文薄弱点。没有错题时用这一句。 */
const chineseWeakText = computed(() => {
  if (!report.value.chineseWeak.length) {
    return '这次没有明显薄弱点'
  }
  return report.value.chineseWeak.join('、')
})

/** 数学薄弱点。没有错题时用这一句。 */
const mathWeakText = computed(() => {
  if (!report.value.mathWeak.length) {
    return '这次没有明显薄弱点'
  }
  return report.value.mathWeak.join('、')
})

/** 打乱题目。同一题在这一轮里只出现一次。 */
function shuffleQuestions() {
  const list = quizQuestions.slice()
  for (let i = list.length - 1; i > 0; i -= 1) {
    const swap = Math.floor(Math.random() * (i + 1))
    const item = list[i]
    list[i] = list[swap]
    list[swap] = item
  }
  return list
}

/** 从 1.mp4 到 49.mp4 里抽一个。文件在 src/static/video，打包后走 /static/video。 */
function randomVideo() {
  const index = Math.floor(Math.random() * 49) + 1
  return `/static/video/${index}.mp4`
}

/** 答错时抽一句鼓励语。 */
function randomEncouragement() {
  const index = Math.floor(Math.random() * encouragements.length)
  return encouragements[index]
}

/** 视频关掉后再进入下一题；最后一题进入成绩报告。 */
function goNext() {
  showVideo.value = false
  videoSrc.value = ''
  if (index.value >= quizOrder.value.length - 1) {
    phase.value = 'report'
    return
  }
  index.value += 1
}

/** 从准备页进入第 1 题。 */
function start() {
  quizOrder.value = shuffleQuestions()
  phase.value = 'quiz'
  index.value = 0
  draft.value = ''
  selected.value = ''
  lastResult.value = null
  records.value = []
  showVideo.value = false
  videoSrc.value = ''
}

/** 回到上一题并清掉那一题的得分，方便重做。第 1 题没有上一题。 */
function goPrev() {
  if (submitting.value || index.value <= 0) {
    return
  }
  const videoOpen = showVideo.value
  showVideo.value = false
  videoSrc.value = ''
  if (videoOpen) {
    records.value.pop()
  }
  index.value -= 1
  records.value.pop()
  const prev = records.value[records.value.length - 1]
  lastResult.value = prev ? prev.result : null
  draft.value = ''
  selected.value = ''
}

/** 关闭奖励视频并继续。播完和按钮可能接连触发，只进入一次。 */
function closeVideo() {
  if (!showVideo.value) {
    return
  }
  goNext()
}

/** 选择题用选项，其余题用输入框。 */
function answerText() {
  if (current.value.options) {
    return selected.value
  }
  return draft.value
}

/** 提交当前答案。空答案不进入下一题。 */
function submit() {
  submitting.value = true
  try {
    const input = answerText()
    const result = gradeQuizAnswer(current.value, input)
    const reason = result.note || result.explain
    records.value.push({
      subject: current.value.subject,
      no: current.value.no,
      stem: current.value.stem,
      topic: current.value.topic,
      input,
      answer: current.value.answer,
      score: result.score,
      full: current.value.score,
      reason,
      result
    })
    if (!result.correct) {
      result.comment = randomEncouragement()
    }
    lastResult.value = result
    draft.value = ''
    selected.value = ''
    if (result.correct) {
      videoSrc.value = randomVideo()
      showVideo.value = true
      return
    }
    goNext()
  } catch (error) {
    uni.showToast({ title: error.message, icon: 'none' })
  } finally {
    submitting.value = false
  }
}
</script>

<style>
:deep(.zp-paging-container) {
  background-image: url('/static/images/1.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.rule {
  display: block;
  margin-top: 12px;
  font-size: 16px;
  line-height: 1.6;
}

.start {
  margin-top: 16px;
}

.picture {
  display: block;
  margin-top: 10px;
  color: #667085;
  font-size: 15px;
  line-height: 1.5;
}

.ask {
  display: block;
  margin-top: 12px;
  color: #667085;
  font-size: 14px;
}

.answer-input,
.answer-box {
  margin-top: 12px;
  padding: 10px 12px;
  background: #f4f7f5;
  border-radius: 12px;
  font-size: 16px;
}

.answer-input {
  height: 44px;
}

.answer-box {
  width: 100%;
  height: 96px;
  box-sizing: border-box;
}

.feedback-ok {
  background: #f3faf7;
  border-color: #cfe3db;
}

.feedback-miss {
  background: #fbf6ee;
  border-color: #f3e6d4;
  color: red
}

.bridge,
.feedback-line,
.score-line,
.block-name,
.wrong-line,
.summary {
  display: block;
  line-height: 1.6;
}

.bridge {
  margin-bottom: 8px;
  font-weight: 600;
}

.feedback-line+.feedback-line,
.score-line,
.block-name,
.wrong-line,
.summary {
  margin-top: 6px;
}

.block-name {
  margin-top: 14px;
  font-weight: 600;
}

.wrong {
  margin-top: 10px;
}

.score-line {
  margin-top: 12px;
  font-size: 16px;
}

.video-mask {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;
  background: rgba(28, 36, 48, 0.72);
  box-sizing: border-box;
}

.video-dialog {
  width: 100%;
  padding: 16px;
  background: #ffffff;
  border-radius: 16px;
  box-sizing: border-box;
}

.video-title {
  display: block;
  margin-bottom: 12px;
  font-size: 17px;
  font-weight: 600;
  text-align: center;
}

.reward-video {
  width: 100%;
  height: 220px;
  border-radius: 12px;
  background: #1c2430;
}

.video-close {
  margin-top: 12px;
}
</style>
