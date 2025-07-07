import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  /* 깃허브 연결할때 */
  base:'/jaesuk_react/',/* //사이에 깃허브 주소 맨뒤에있는 저장소명  */
  build: {
    outDir: 'dist',/* 디렉터링 */
    assetsDir: 'assets',/* 자료 */
  },
})
