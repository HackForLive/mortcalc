import posthtml from '@vituum/vite-plugin-posthtml'
import { resolve } from 'path'
import { defineConfig } from 'vite'


export default defineConfig({
    root: resolve(__dirname, 'src'),
    plugins: [posthtml()],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/views/index.html'),
                nested: resolve(__dirname, 'src/views/components/head.html'),
            },
        },
    },
})