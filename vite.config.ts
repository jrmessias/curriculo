import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
    root: 'src',
    build: {
        outDir: '../dist'
    },
    plugins: [vue()],
})
