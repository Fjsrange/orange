<template>
  <div class="learn" v-if="list!.length > 0">
    <div class="title__name">{{ title }}</div>
    <div class="learn-item">
      <div class="item gh-space" v-for="item in list">
        <img :src="item.url" alt="item.name" />
        <!-- <img
          v-for="(image, index) in imageList"
          :key="index"
          :src="image"
          alt="item.name"
        /> -->
        <!-- <img :src="noImage['../../assets/images/no-image.png']" alt="" /> -->
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
const { title, list } = defineProps({
  title: String,
  list: Array as PropType<List[]>,
});

// // 使用动态导入所有图片
// const imageList = ref<Record<string, any>>({});
// // const noImage = ref<Record<string, any>>(
// //   import.meta.glob("../../assets/images/no-image.png", {
// //     eager: true,
// //     import: "default",
// //   })
// // );
// // console.log("noImage", noImage.value);

// onMounted(async () => {
//   if (title) {
//     // 使用 Object.fromEntries() 将过滤后的键值对数组转换回一个对象。
//     imageList.value = Object.fromEntries(
//       // 使用使用 Object.entries() 方法将上一个步骤返回的对象转换为一个键值对数组。每个键是模块的路径，每个值是模块的默认导出。
//       Object.entries(
//         import.meta.glob("../../assets/images/**/*.*", {
//           eager: true,
//           import: "default",
//         })
//       ).filter(([key]) => key.includes(`../../assets/images/${title}`))
//     );
//     // console.log("所有图片路径", title, imageList.value);
//     // noImage.value = import.meta.glob("../../assets/images/no-image.png", {
//     //   eager: true,
//     //   import: "default",
//     // });
//     // console.log("noImage", noImage);
//   }
// });
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
      box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.3),
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
        padding: 0 10px;
        font-size: 1.2rem;
        font-weight: 600;
        color: #333;

        .item__msg-name {
          margin-top: 5px;
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
        /* padding: 10px; */
        margin: 10px 0;
        border: 1px solid #ccc;
        border-radius: 5px;
      }
    }
  }
}
</style>
