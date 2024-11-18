<script setup lang="ts">
import Navbar from "../src/components/Navbar/index.vue";
import pageList from "./utils/pageList";
</script>

<template>
  <Navbar></Navbar>
  <div class="gh-content">
    <router-view></router-view>

    <div class="gh-home-footer">
      <div
        class="footer-aaa"
        v-for="item in pageList"
        :key="item.path"
        @click="$router.push(item.path)"
        :class="{ active: $route.path === item.path }"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
/* PC */
@media screen and (min-width: 768px) {
  @mixin bfc {
    height: 100%;
    overflow: hidden;
  }

  @include b(content) {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 8.75rem;
  }
}
/* 手机 */
@media screen and (max-width: 768px) {
  @include b(content) {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 4.75rem;
  }

  .gh-home-footer {
    display: flex;
    height: 60px;
    width: 100%;
    background-color: #fff;
    border-top: 1px solid #ccc;
    position: fixed;
    bottom: 0;
    left: 0;
    .footer-aaa {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .active {
      color: var(--textColor1);
    }
  }
}
</style>
