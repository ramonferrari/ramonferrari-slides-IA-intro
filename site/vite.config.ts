import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  publicDir: fileURLToPath(new URL('../public', import.meta.url)),
  plugins: [
    vue(),
    UnoCSS(),
    Components({
      dirs: [fileURLToPath(new URL('../components', import.meta.url))],
      dts: false,
    }),
  ],
  resolve: {
    alias: {
      '@components': fileURLToPath(new URL('../components', import.meta.url)),
      // components/ lives outside site/, so Node's upward node_modules
      // resolution from there won't find deps installed only in site/node_modules.
      '@vueuse/core': fileURLToPath(new URL('./node_modules/@vueuse/core', import.meta.url)),
    },
  },
  build: {
    outDir: fileURLToPath(new URL('./dist', import.meta.url)),
    emptyOutDir: true,
  },
})
