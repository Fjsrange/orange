/**
 * JS列表
*/
import { ref } from 'vue';

// 导入图片模块
const imageModules = import.meta.glob('@/assets/images/JavaScript/*.{png,jpg,jpeg,svg}', {
  eager: true,
  import: 'default'
});
// console.log('imageModules',imageModules);

// 定义 List 接口
interface List {
  name: string,
  url: string,
  info: string,
  tag: string[]
}

// 定义 Page 接口，包含一个 List 类型的数组
interface Page {
  title: string,
  list: List[]
}

const noImage = ref<Record<string, any>>(
  import.meta.glob("../assets/images/no-image.png", {
    eager: true,
    import: "default",
  })
);
// console.log('noImage',noImage.value);

// 使用 Page 接口来类型化 cssList 数组
const JSList:Page = {
  title: 'JavaScript',
  list: Object.entries(imageModules).map(([path, module]) => {
    // 提取文件名，不包括扩展名
    const name = path.split('/').pop()!.split('.')[0];
    //  module 是图片的 URL（这取决于你的构建配置）
    const url = (module || noImage.value) as string;
    // 根据实际情况填充其他字段
    return {
      name,
      url,
      info: '描述 ' + name, // 示例描述，根据实际情况修改
      tag: ['标签', '标签2'] // 示例标签，根据实际情况修改
    };
  })
  // list: [
  //   {
  //     name: '基础样式',
  //     url: '/src/assets/images/JavaScript/basic.jpeg',
  //     info: 'JavaScript基础',
  //     tag: [
  //       'js',
  //       '基础样式'
  //     ]
  //   },
  //   {
  //     name: '文本样式',
  //     url: '/src/assets/images/JavaScript/basic.jpeg',
  //     info: 'JavaScript样式',
  //     tag: [
  //       'JavaScript',
  //       '基础样式'
  //     ]
  //   },
  //   {
  //     name: '列表样式',
  //     url: '/src/assets/images/JavaScript/basic.jpeg',
  //     info: 'JavaScript',
  //     tag: [
  //       'JavaScript',
  //       '基础样式'
  //     ]
  //   },
  //   {
  //     name: '表格样式',
  //     url: '/src/assets/images/JavaScript/basic.jpeg',
  //     info: 'JavaScript',
  //     tag: [
  //       'JavaScript',
  //       '基础样式'
  //     ]
  //   }
  // ]
}



export default JSList;