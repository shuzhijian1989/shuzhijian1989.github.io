import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

// H5 开发配置。业务接口尚未提供，这里不配置代理。
export default defineConfig({
  plugins: [uni()],
  server: {
    host: '0.0.0.0',
    port: 5173
  }
})
