<script setup lang="ts">
import Navbar from "../src/components/Navbar/index.vue";
</script>

<template>
  <Navbar></Navbar>
  <div class="gh-content">
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
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
</style>
