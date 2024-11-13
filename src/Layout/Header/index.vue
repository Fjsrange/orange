<script setup lang="ts">
import { useTheme } from "@/hooks/useTheme";

const { theme, toggleTheme } = useTheme();
</script>

<template>
  <div class="gh-header navbar">
    <div class="gh-header__left logo">logo||home</div>
    <div class="gh-space justify-start menu" style="gap: 48px">
      <div>首页</div>
      <div>文档</div>
      <div>关于我</div>
    </div>
    <div class="gh-space justify-start size-s">
      <div class="search">
        <input type="text" placeholder="搜索" />
        <div class="search-icon"></div>
      </div>
      <div :class="theme" @click="toggleTheme">{{ theme }}</div>
    </div>
    <div class="top-bar-bg" style="opacity: 0.94"></div>
  </div>
</template>

<style scoped lang="scss">
/* @include b(header) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  position: fixed; // 固定定位
  top: 0;
  left: 0;
  z-index: 10; // 设置层级
  width: 100%;
  padding: 0 32px;
  transition: all 0.3s;

  @include e(left) {
    margin-right: 200px;
  }
}
.gh-space {
  display: flex;
  gap: 32px; // 设置间距
  transition: all 0.2s ease-in-out; // 设置过渡效果
}
.justify-start {
  justify-content: flex-start;
}
.top-bar-bg {
  width: 100%;
  height: 100%;
  background: (--bgColor);
  backdrop-filter: blur(12px);
  position: absolute;
  left: 0;
  z-index: -1;
  border-bottom: 1px solid rgba(11, 25, 38, 0.08);
}
.gh-space,
.size-s {
  gap: 16px;
} */
</style>
