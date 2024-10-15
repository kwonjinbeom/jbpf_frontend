import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 3000, // 개발 서버 포트 설정
    proxy: {
      '/api': {
        target: 'http://localhost:8088', // API 요청을 프록시할 서버 주소
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''), // '/api' 경로를 제거
      }
    }
  }
})
