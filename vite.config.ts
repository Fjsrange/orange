import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from 'node:url';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    "process.env": {},
  },
  base: "/orange/", // 设置打包路径
  // publicDir: '/orange/', // 设置公共目录
  build: {
    outDir: 'dist', // 设置打包输出目录
  },
  server: {
    port: 3001, // 设置端口号
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/assets/scss/bem" as *;`, // 自动导入变量文件
      },
    },
  },
});
