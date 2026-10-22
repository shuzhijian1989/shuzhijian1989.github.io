// 应用入口
import { createSSRApp } from 'vue'
// 学习进度
import { createPinia } from 'pinia'
// 根组件
import App from './App.vue'

export function createApp() {
  const app = createSSRApp(App)
  app.use(createPinia())
  return { app }
}
