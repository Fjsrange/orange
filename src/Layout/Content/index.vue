<template>
  <div class="gh-content">
    <div class="warp">
      <div class="item-warp left gh-space size-m dir-vertical">
        <div class="warp-item">warp-item</div>
        <div class="warp-item">warp-item</div>
      </div>
      <div class="item-warp2">item</div>
    </div>

    <Learn :title="cssList.title" :list="cssList.list"></Learn>

    <Learn :title="JSList.title" :list="JSList.list"></Learn>
  </div>
</template>
<script setup lang="ts">
// import Learn from "@/components/Learn/index.vue";
import Learn from "../../components/Learn/index.vue";
import cssList from "../../utils/cssList";
import JSList from "../../utils/javascriptList";
</script>
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

/* 手机的样式 */
@media screen and (max-width: 768px) {
  .warp {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    .item-warp {
      display: flex;
      flex-direction: column;
      gap: 26px;
      .warp-item {
        width: 22rem;
        height: 11.7rem;
        /* height: 7.63rem; */
        border-radius: 1.5rem;
        padding: 2rem 2.5rem;
        border: 1px solid #ccc;
      }
    }
    .item-warp2 {
      width: 22rem;
      margin-left: 0;
      height: 14rem;
      margin-bottom: 20px;
    }
  }
  .gh-space {
    gap: 16px;
    .size-m {
      gap: 16px;
    }
  }
  /* .item-warp {
    .warp-item {
      width: 100%;
      height: 7.63rem;
    }
  } */
  /* .item-warp2 {
    width: 100%;
    margin-left: 0;
    height: 25rem;
  } */
}
</style>
