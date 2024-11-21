<script>
import vueOfficeWord from "@vue-office/docx";
import myUpload from "../../components/myUpload/index.vue";
import { ref } from "vue";

export default {
  components: {
    vueOfficeWord,
    myUpload,
  },
  setup() {
    const wordSrc = ref(null);

    const onChangeFn = (e) => {
      const fr = new FileReader();
      fr.readAsDataURL(e);
      fr.onload = (e) => {
        wordSrc.value = e.target.result;
      };
    };

    return {
      wordSrc,
      onChangeFn,
    };
  },
};
</script>

<template>
  <div class="word">
    <div class="word-upload">
      <myUpload needList @change="onChangeFn" />
    </div>
    <vueOfficeWord
      v-if="wordSrc"
      :src="wordSrc"
      style="height: 500px; overflow-y: auto"
    />
  </div>
</template>

<style lang="scss" scoped>
.word-upload {
  width: 300px;
  margin: 0 auto 20px;
}

@media screen and (max-width: 768px) {
  .word-upload {
    width: 18.75rem;
    margin-bottom: 1.25rem;
  }
}
</style>
