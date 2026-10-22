// 学习会话。页面通过这里读写，不自己改掌握度。
import { defineStore } from 'pinia'
// 诊断、路径、答疑的纯函数
import * as session from '@/domain/session.js'

const STORAGE_KEY = 'learning-state-v1'

/** 读取本地进度。损坏时回到空会话，并带上提示。 */
function readState() {
  try {
    const raw = uni.getStorageSync(STORAGE_KEY)
    if (!raw) {
      return session.createInitialState()
    }
    const parsed = JSON.parse(raw)
    if (!parsed || !Array.isArray(parsed.attempts) || !parsed.tutor) {
      const fresh = session.createInitialState()
      fresh.notice = '本地学习记录已重置'
      return fresh
    }
    return parsed
  } catch (error) {
    const fresh = session.createInitialState()
    fresh.notice = '本地学习记录已重置'
    return fresh
  }
}

export const useLearningStore = defineStore('learning', {
  state: () => readState(),
  getters: {
    /** 今日任务列表。 */
    todayTasks(state) {
      return session.todayView(state).tasks
    },
    /** 章节掌握度。 */
    chapterCards(state) {
      return session.chapterView(state).chapters
    },
    /** 诊断结果页。 */
    resultCards(state) {
      return session.resultView(state)
    },
    /** 微课目录。 */
    lessonChapters(state) {
      return session.lessonListView(state).chapters
    },
    /** 错题分组。 */
    wrongGroups(state) {
      return session.wrongView(state).groups
    },
    /** 学习记录。 */
    recordRows(state) {
      return session.recordView(state).records
    },
    /** 家长只读学情。 */
    parentCards(state) {
      return session.parentView(state)
    },
    /** 问老师对话。 */
    tutorCards(state) {
      return session.tutorView(state)
    },
    /** 教材版本。 */
    textbookCard() {
      return session.textbookView()
    }
  },
  actions: {
    /** 把整份会话写回本地。 */
    persist() {
      const notice = this.notice
      this.notice = ''
      uni.setStorageSync(STORAGE_KEY, JSON.stringify(this.$state))
      this.notice = notice
    },
    /** 用领域模块返回的新会话替换当前进度。 */
    replace(next) {
      this.$patch({
        attempts: next.attempts,
        diagnostic: next.diagnostic,
        pathNodes: next.pathNodes,
        downgradeUsedKpIds: next.downgradeUsedKpIds,
        forcedMasteredKpIds: next.forcedMasteredKpIds,
        lessonProgress: next.lessonProgress,
        wrongs: next.wrongs,
        records: next.records,
        tutor: next.tutor,
        notice: next.notice == null ? '' : next.notice
      })
      this.persist()
    },
    /** 清空本地进度，方便重新诊断。 */
    reset() {
      uni.removeStorageSync(STORAGE_KEY)
      this.replace(session.createInitialState())
    },
    /** 诊断页数据。 */
    readDiagnostic() {
      return session.diagnosticView(this.$state)
    },
    /** 开始诊断。 */
    beginDiagnostic() {
      this.replace(session.startDiagnostic(this.$state))
    },
    /** 提交一道诊断题。 */
    submitDiagnostic(payload) {
      this.replace(session.submitDiagnosticAnswer(this.$state, payload))
    },
    /** 练习页数据。 */
    readPractice(nodeId) {
      return session.practiceView(this.$state, nodeId)
    },
    /** 提交一道练习题。 */
    submitPractice(payload) {
      this.replace(session.submitPracticeAnswer(this.$state, payload))
    },
    /** 微课播放数据。 */
    readLesson(lessonId) {
      return session.lessonView(this.$state, lessonId)
    },
    /** 提交微课必答。 */
    submitLesson(payload) {
      this.replace(session.submitLessonChoice(this.$state, payload))
    },
    /** 微课进入下一步。 */
    advanceLesson(lessonId) {
      this.replace(session.advanceLesson(this.$state, lessonId))
    },
    /** 从错题打开练习，返回节点 id。 */
    openWrong(knowledgePointId) {
      const opened = session.openWrongPractice(this.$state, knowledgePointId)
      this.replace(opened.state)
      return opened.nodeId
    },
    /** 练习页打开问老师。 */
    openTutor(itemId) {
      this.replace(session.openTutorForItem(this.$state, itemId))
    },
    /** 底部问老师保留已有对话。 */
    ensureTutor() {
      this.replace(session.ensureTutor(this.$state))
    },
    /** 发送给学生回复。 */
    sendTutor(text) {
      this.replace(session.submitTutor(this.$state, text))
    },
    /** 读一次提示后清掉，避免每次刷新都弹。 */
    consumeNotice() {
      const notice = this.notice
      this.notice = ''
      return notice
    }
  }
})
