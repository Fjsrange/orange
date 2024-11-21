<script setup>
import { ref, onMounted } from "vue";
const fileRef = ref(null);
const uploadRef = ref(null);

const { borderRadius, limit, multiple, accept } = defineProps({
  borderRadius: {
    type: [String, Number],
    default: "15",
  },
  info: {
    type: String,
    default: "点击上传文件",
  },
  // 限制上传文件数量
  limit: {
    type: Number,
    default: 9,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  // 文件类型
  accept: {
    type: String,
    default: "",
  },
  needList: {
    type: Boolean,
    default: false,
  },
});

onMounted(() => {
  uploadRef.value.style.setProperty("--gray1", borderRadius + "px");
});

const emit = defineEmits(["change"]);

// 点击
const handleUpload = () => {
  fileRef.value.click();
};

const choseFile = ref([]);

// 文件框上传文件事件
const handleChange = (e) => {
  choseFile.value = Array.from(e.target.files);
  // 限制上传文件数量
  if (limit === 1 || !multiple) {
    emit("change", choseFile.value[0]);
  } else {
    emit("change", choseFile.value);
  }
};

// 删除文件
const remove = (item) => {
  const index = choseFile.value.findIndex((v) => v.name === item.name);
  choseFile.value.splice(index, 1);
  emit("change", choseFile.value);
};
</script>

<template>
  <div class="upload">
    <div ref="uploadRef" class="my-upload" @click.stop="handleUpload">
      <input
        ref="fileRef"
        :accept="accept"
        type="file"
        name=""
        id=""
        :multiple="multiple"
        @change="handleChange"
      />
      <svg-icon name="file" width="35" height="35" />
      <span v-if="!$slots.default" class="">{{ info }}</span>
      <template v-else>
        <slot></slot>
      </template>
    </div>
    <div v-if="needList" class="upload-list">
      <div v-for="item in choseFile" :key="item.name" class="upload-item">
        <span>{{
          item.name.length <= 35
            ? item.name
            : item.name.slice(0, 25) + "....." + item.name.substr(-4)
        }}</span>
        <span class="icon" @click.stop="remove(item)"></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.my-upload {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: 1px dashed var(textColor1);
  /* border: 1px dashed var(--primary-bg); */
  padding: 20px 0;
  border-radius: var(--gray1);
  background-color: var(--bgColor);
  /* background-color: var(--body-bg); */
  cursor: pointer;

  input {
    display: none;
  }

  span {
    font-size: 16px;
    color: var(textColor1);
    margin-top: 15px;
  }
}

.upload-list {
  display: flex;
  flex-direction: column;

  .upload-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: var(--gray2);
    font-size: 14px;
    margin: 10px 0;
    cursor: pointer;

    .icon {
      transition: all 0.3s;

      &::after {
        content: "√";
        display: flex;
        justify-content: center;
        align-items: center;
        width: 15px;
        height: 15px;
        color: green;
        border-radius: 50%;
        font-size: 10px;
        border: 1px solid green;
        transition: all 0.3s;
      }
    }

    &:hover {
      .icon {
        &::after {
          content: "×";
          display: flex;
          justify-content: center;
          align-items: center;
          width: 15px;
          height: 15px;
          color: gray;
          border-radius: 50%;
          font-size: 10px;
          border: 1px solid gray;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .my-upload {
    border: 0.0625rem dashed var(--textColor1);
    padding: 1.25rem 0;

    span {
      font-size: 1rem;
      margin-top: 0.9375rem;
    }
  }
}
</style>
