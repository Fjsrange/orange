import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    "process.env": {},
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // 配置@指向src目录
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
