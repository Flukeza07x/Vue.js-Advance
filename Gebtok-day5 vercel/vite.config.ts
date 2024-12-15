import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueI18n from "@intlify/vite-plugin-vue-i18n"
import { fileURLToPath, URL } from 'url'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'true', // หรือ 'true' ตามความต้องการ
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  plugins: [
    vue(),
    vueI18n({
    include: resolve(__dirname, "./locales/**"),
    isRuntimeOnly: false
    }),
  ]
})