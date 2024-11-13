<script setup lang="ts">
import { ref, onMounted, onUnmounted, watchEffect, reactive } from "vue";
import { useTheme } from "@/hooks/useTheme";

// 切换背景色
const { theme, toggleTheme } = useTheme();

const isDesktop = ref<boolean>(true); // 是否为桌面端
const isMenuOpen = ref<boolean>(false); // 是否展开菜单
const opacity = ref<number>(0); // 透明度
const selectItem = ref<number>(1); // 当前选中的菜单项
// 初始化 list 数据
const list = reactive([
  { name: "首页", base: "/", path: "/" },
  { name: "个人分享", base: "/share", path: "/share" },
  { name: "资源下载", base: "/resource", path: "/resource" },
  { name: "关于我", base: "/about", path: "/about" },
]);

// 监听窗口大小来确定是否为桌面端
const checkIfDesktop = () => {
  isDesktop.value = window.innerWidth >= 768;
};
// 处理滑动事件的函数
const handleScroll = () => {
  opacity.value = Math.min(window.scrollY / 200, 1);
  let blurValue = (window.scrollY / 200) * 6;

  // 你可以在这里做一些操作，展示结果或控制其他元素
  const ghHeader = document.querySelector(".gh-header");
  if (ghHeader) {
    ghHeader.style.backdropFilter = `blur(${Math.min(blurValue, 6)}px)`; // 限制最大模糊度
  }
};

// 初始化检查窗口大小
onMounted(() => {
  checkIfDesktop();
  window.addEventListener("resize", checkIfDesktop);
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

watchEffect(() => {
  handleScroll();
});
</script>

<template>
  <header class="navbar gh-header">
    <div class="logo" v-if="isDesktop">
      <img src="@/assets/icons/menu-icon.png" style="width: 40px" />
    </div>
    <div v-else style="font-size: 20px; font-weight: 600">主页</div>

    <!-- <nav class="main-nav gh-header" v-show="isDesktop"> -->
    <div
      class="nav-list gh-space justify-start align-start gh-header__list"
      style="gap: 3rem"
      v-show="isDesktop"
    >
      <div
        class="tab-item"
        :class="{ active: selectItem === index }"
        v-for="(item, index) in list"
        :key="index"
      >
        {{ item.name }}
      </div>
      <!-- <a class="router-link-active router-link-exact-active" :href="item.base">
        <span class="gh-text">{{item.name}}</span>
      </a>
      <a><span class="gh-text">文档</span></a>
      <a><span class="gh-text">资源信息</span></a>
      <a><span class="gh-text">关于我</span></a> -->
    </div>
    <!-- </nav> -->

    <div class="actions gh-space size-s align-start">
      <div class="gh-input">
        <div
          class="gh-input__inner gh-input__inner--primary gh-input__inner--l"
        >
          <!-- <input
            type="text"
            placeholder="搜索"
            class="gh-input__widget"
            v-if="isDesktop"
          /> -->
          <input type="text" class="target" />
          <img
            src="@/assets/icons/search-icon.png"
            alt="Search Icon"
            class="search-icon"
          />
        </div>
      </div>
      <div
        class="color-toggle"
        :class="theme"
        @click="toggleTheme"
        v-if="isDesktop"
      >
        {{ theme }}
      </div>
    </div>
    <div class="top-bar-bg" :style="{ opacity: opacity }"></div>
    <!-- 移动端菜单 -->
    <div class="mobile-menu" v-if="!isDesktop">
      <img
        src="@/assets/icons/search-icon.png"
        alt="Search Icon"
        class="search-icon"
      />
      <div @click="isMenuOpen = !isMenuOpen" class="menu">
        <img
          src="@/assets/icons/menu-icon.png"
          alt="Menu Icon"
          class="menu-icon"
        />
      </div>
      <ul v-show="isMenuOpen" class="mobile-nav">
        <li><a href="#">首页</a></li>
        <li><a href="#">分享</a></li>
        <li><a href="#">资源信息</a></li>
        <li><a href="#">关于我</a></li>
      </ul>
    </div>
  </header>
</template>

<style scoped lang="scss">
@include b(header) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  position: fixed; // 固定定位
  top: 0;
  left: 0;
  z-index: 10; // 设置层级
  width: 100%;
  padding: 0 2rem;
  // transition: all 0.3s;
  .logo {
    margin-right: 120px;
  }

  &.router-link-active {
    position: relative;
    &.gh-text {
      color: var(--gray3);
      font-size: 1rem;
    }
  }
  @include b(text) {
    color: var(--gray3);
    font-size: 1rem;
  }
}
.router-link-exact-active {
  :before {
    content: "";
    display: block;
    width: 16px;
    height: 3px;
    border-radius: 2px;
    position: absolute;
    bottom: -4px;
    left: 50%;
    margin-left: -8px;
    background-color: #1eacd8;
  }
}
.tab-item {
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  border-bottom: 2px solid transparent;
  &::after {
    content: "";
    display: block;
    width: 16px;
    height: 3px;
    border-radius: 2px;
    position: absolute;
    bottom: -4px;
    left: 50%;
    margin-left: -8px;
    border-color: #007bff;
  }
}

.tab-item:hover {
  background-color: green;
}
.tab-item.active {
  font-weight: bold;
}

@include b(input) {
  display: inline-flex;
  align-items: center;
  transition: all 0.2s ease-in-out;
  .search-icon {
    width: 1rem;
  }
  @include e(inner) {
    display: inline-flex;
    align-items: center;
    transition: all 0.2s ease-in-out;
    width: inherit;
    @include m(primary) {
      background: var(--bgColor2);
      color: var(--textColor);
      border: 1px solid var(--bgColor2);
      &:focus {
        outline: none;
        border-color: var(--primaryColor);
      }
      @include m(focus) {
        background-color: var(--bgColor1);
        border: 1px solid var(--gray3);
      }
    }
    @include m(l) {
      padding: 0 1rem; // 设置内边距
      border-radius: 8px;
      .target {
        border: none;
        outline: none; // 去除input选中后边框的样式
        // 输入框内字体
        font-size: 16px;
        // 输入框内字体颜色
        color: #000;
        // 输入框内字体样式
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        // 输入框内字体粗细
        font-weight: 400;
        // 输入框内字体间距
        letter-spacing: 0;
        // 输入框内字体行高
        line-height: 1.5;
        // 输入框内字体大小写
        text-transform: none;
        padding: 6px;
        background: transparent;
      }
      &:hover,
      &:focus {
        background-color: var(--bgColor1);
        border: 1px solid var(--gray3);
      }
    }
  }
  @include e(widget) {
    min-width: 35px;
    border: none;
    color: var(--gray);
    background: transparent;
  }
}
.gh-space {
  display: flex;
  gap: 2rem; // 设置间距
  // transition: all 0.2s ease-in-out; // 设置过渡效果
  .justify-start {
    justify-content: flex-start; // 设置主轴上的对齐方式为起始位置
  }
  .align-start {
    align-items: flex-start; // 将子元素在交叉轴上对齐到起始位置
  }
  .size-s {
    gap: 1rem;
  }
}

.gh-space,
.size-s {
  gap: 1rem;
}
.top-bar-bg {
  width: 100%;
  height: 100%;
  background-color: var(--bgColor1);
  backdrop-filter: blur(12px); // 设置背景模糊效果，模糊半径为12px
  position: absolute;
  left: 0;
  z-index: -1;
  border-bottom: 1px solid var(--gray1);
}

/* .navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: var(--bgColor);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  height: 64px;
  position: fixed; // 固定定位
  top: 0;
  left: 0;
  z-index: 10; // 设置层级
  width: 100%;
  padding: 0 32px;
  transition: all 0.3s;

  .logo img {
    height: 40px;
    margin-right: 60px;
  }

  .main-nav {
    display: flex;
    .nav-list {
      display: flex;
      list-style-type: none;
      padding: 0;
      margin: 0;
      gap: 20px;

      li a {
        text-decoration: none;
        color: var(--textColor);
        font-weight: bold;
      }
    }
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 10px;

    .search-box {
      padding: 5px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    .color-toggle {
      padding: 8px 12px;
      border: 1px solid #ccc;
      border-radius: 4px;
      cursor: pointer;
    }
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

  // 移动端样式
  .mobile-menu {
    display: none;
    align-items: center;
    gap: 10px;
  }

  .menu {
    background: none;
    border: none;
    cursor: pointer;
  }
  .menu-icon {
    width: 26px;
  }
  .search-icon {
    height: 20px;
  }

  .mobile-nav {
    display: none;
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    list-style-type: none;
    padding: 0;
    margin: 0;

    li a {
      text-decoration: none;
      color: var(--textColor);
      padding: 10px 20px;
      display: block;
    }
  }

  @media (max-width: 768px) {
    .main-nav {
      display: none;
    }

    .mobile-menu {
      display: flex;
    }

    .mobile-nav {
      display: block;
    }
  }
}
@media (max-width: 768px) {
  .navbar {
    padding: 10px;
  }
} */
</style>
