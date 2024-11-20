<template>
  <div class="learn">
    <div class="title__name">{{ props.title }}</div>
    <div class="learn-item">
      <div class="item gh-space" v-for="item in props.list">
        <img :src="item.url" alt="" />
        <div class="item__msg">
          <div class="item__msg-name">
            {{ item.name }}
          </div>
          <div class="item__msg-explain">
            {{ item.explain }}
          </div>
          <div class="item__msg-tag">
            <div v-for="tag in item.tag">{{ tag }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, PropType } from "vue";

interface List {
  name: string;
  url: string;
  explain: string;
  tag: string[];
}
const props = defineProps({
  title: String,
  list: Array as PropType<List[]>,
});
console.log(props.title); // 这将是 "基础"
console.log(props.list); // 这将是 List[] 类型的数组
</script>
<style scoped lang="scss">
.learn {
  margin-top: 4rem;
  .learn-item {
    display: flex;
    flex-wrap: wrap;
    .item {
      height: 16rem;
      width: 20rem;
      margin: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.3),
        -2px -2px 5px 0px rgba(0, 0, 0, 0.1);
      display: block;
      flex-direction: column;
      &:hover {
        cursor: pointer;
        transform: translateY(-5px);
      }
      img {
        width: 100%;
        height: 60%;
      }
      .item__msg {
        padding: 10px;
        font-size: 1.2rem;
        font-weight: 600;
        color: #333;

        .item__msg-name {
          margin-top: 10px;
          font-size: 1.2rem;
          font-weight: 600;
          color: #333;
        }
        .item__msg-explain {
          font-size: 1rem;
          font-weight: 500;
          color: #000;
        }
        .item__msg-tag {
          font-size: 1rem;
          font-weight: 500;
          color: #666;
          display: flex;
          justify-content: flex-end;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .learn {
    margin-top: 4rem;
    .learn-item {
      display: flex;
      flex-wrap: wrap;
      .item {
        height: 16rem;
        width: 22rem;
        padding: 10px;
        margin: 10px 0;
        border: 1px solid #ccc;
        border-radius: 5px;
      }
    }
  }
}
</style>
