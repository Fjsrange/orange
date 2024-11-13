<script setup lang="ts">
import Header from "@/Layout/Header/index.vue";
import Content from "@/Layout/Content/index.vue";
// import Header from "../Layout/Header/index.vue";
// import Content from "../Layout/Content/index.vue";
// import Menu from "../Layout/Menu/index.vue";
</script>

<template>
  <div class="gh-layout">
    <!-- <div>
      <Menu></Menu>
    </div> -->
    <div class="gh-layout__right">
      <Header></Header>
      <Content></Content>
    </div>
  </div>
</template>

<style scoped lang="scss">
@include b(layout) {
  @include bfc();
  display: flex;

  @include e(right) {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
}
</style>
