import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

//export default defineConfig({
export default defineConfig(({ command }) => {  
  plugins: [vue()],
  //base: '/elyxira/',
  base: command === 'build' ? '/elyxira/' : '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    // 建议：确保 assetsDir 保持默认或显式设置
    assetsDir: 'assets',
  }
})
