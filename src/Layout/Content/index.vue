<script setup lang="ts"></script>

<template>
  <div lang="gh-content">
    <h1 style="color: #fff">你好</h1>
    <div class="gh-content__items" v-for="item in 100" :key="item">
      {{ item }}
    </div>
  </div>
</template>

<style scoped lang="scss">
@include b(content) {
  flex: 1;
  overflow: auto;

  @include e(items) {
    padding: 10px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
}
</style>
