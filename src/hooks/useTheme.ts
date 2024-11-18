import { ref, watchEffect } from "vue";

// 获取本地存储的主题
const key = "__theme__";
const theme = ref(localStorage.getItem(key) || "light");

// 监听主题变化
watchEffect(() => {
  // 将主题设置为文档元素的dataset属性
  document.documentElement.dataset.theme = theme.value;
  // 将主题存入本地
  localStorage.setItem(key, theme.value);
});

// 导出，由于获取主题
export function useTheme() {
  return {
    theme, // 主题
    toggleTheme() {
      theme.value = theme.value === "light" ? "dark" : "light"; // 切换主题
    },
  };
}
