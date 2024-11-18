<template>
  <div class="gh-content">
    <div class="warp">
      <div class="item-warp left gh-space size-m dir-vertical">
        <div class="warp-item">warp-item</div>
        <div class="warp-item">warp-item</div>
      </div>
      <div class="item-warp2">item</div>
    </div>

    <div class="item" v-for="item in 100">{{ item }}</div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.warp {
  display: flex;
  width: 100%;
  .item-warp {
    display: flex;
    flex-direction: column;
    gap: 26px;
    .warp-item {
      width: 19.75rem;
      height: 11.7rem;
      /* height: 7.63rem; */
      border-radius: 1.5rem;
      padding: 2rem 2.5rem;
      border: 1px solid #ccc;
    }
  }
  .item-warp2 {
    width: 100%;
    margin-left: 1.5rem;
    background-color: #fff;
    height: 25rem;
    border-radius: 1.5rem;
    border: 1px solid #ccc;
  }
}
.item {
  height: 30px;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.gh-space {
  display: flex;
  transition: all 0.2s ease-in-out;
  gap: 32px;
  .size-m {
    gap: 24px;
  }
  .dir-vertical {
    flex-direction: column;
  }
}
</style>
