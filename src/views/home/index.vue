<script setup lang="ts">
// import Layout from "@/Layout/index.vue";
import Navbar from "@/components/Navbar/index.vue";
import Content from "@/Layout/Content/index.vue";
</script>

<template>
  <div class="gh-home">
    <!-- <Layout></Layout> -->
    <Navbar></Navbar>
    <Content></Content>
  </div>
</template>

<style scoped lang="scss">
// .gh-home {
//   @include b(home) {
//     height: 100%;
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//   }
// }
@include b(home) {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  // align-items: center;
  padding: 140px;
}
</style>
