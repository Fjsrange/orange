<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import Home from "./home/index.vue";

const showButton = ref(false);
const opacity = ref(0.01); // 添加一个ref来控制按钮的透明度

const handleScroll = () => {
  showButton.value = window.scrollY >= 100;
  if (window.scrollY >= 100 && window.scrollY <= 200) {
    // 计算opacity值，使它在100和200之间从0.01渐变到1
    opacity.value = ((window.scrollY - 100) / (200 - 100)) * 0.99 + 0.01;
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div>
    <Home></Home>
    <div
      class="top-btn"
      :class="{ show: showButton }"
      :style="{ opacity: opacity }"
      v-show="showButton"
      @click="scrollToTop"
    >
      top
    </div>
  </div>
</template>

<style scoped lang="scss">
.top-btn {
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 50px;
  height: 50px;
  background-color: #ccc;
  border-radius: 50%;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  transition: opacity 0.3s ease; //添加过渡效果

  translate: none;
  &.show {
    opacity: 1; /* 显示时的不透明度为1 */
    transform: translateY(0); /* 显示时的偏移为0 */
  }
}

@media (max-width: 768px) {
  .top-btn {
    position: fixed;
    bottom: 86px;
    right: 12px;
    width: 50px;
    height: 50px;
    background-color: #ccc;
    border-radius: 50%;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
  }
}
</style>
