import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

// 线上页面在 /dist/build/h5/，资源必须带这个前缀，否则会去站点根目录找 /assets。
const h5Base = '/dist/build/h5/'

// H5 开发配置。业务接口尚未提供，这里不配置代理。
export default defineConfig({
  base: h5Base,
  plugins: [uni()],
  server: {
    host: '0.0.0.0',
    port: 5176
  }
})
