import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from 'node:url';
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    "process.env": {},
  },
  base: "/",
  server: {
    port: 8080, // 设置端口号
  },
  resolve: {
    alias: {
      // "@": path.resolve(__dirname, "src"), // 配置@指向src目录
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
