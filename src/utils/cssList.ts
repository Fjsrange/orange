/**
import { createApp } from 'vue';
 * css列表
*/
// import {ref} from 'vue';
// 导入图片模块
const imageModules = import.meta.glob('@/assets/images/CSS/*.{png,jpg,jpeg,svg}', {
  eager: true,
  import: 'default'
});


// 定义 List 接口
interface List {
  name: string,
  url: string,
  explain: string,
  tag: string[]
}

// 定义 Page 接口，包含一个 List 类型的数组
interface Page {
  title: string,
  list: List[]
}

// 使用 Page 接口来类型化 cssList 数组
const cssList:Page = {
  title: 'CSS',
  list: Object.entries(imageModules).map(([path, module]) => {
    // 提取文件名，不包括扩展名
    const name = path.split('/').pop()!.split('.')[0];
    //  module 是图片的 URL（这取决于你的构建配置）
    const url = module as string;
    // 根据实际情况填充其他字段
    return {
      name,
      url,
      explain: '描述 ' + name, // 示例描述，根据实际情况修改
      tag: ['标签', '标签2'] // 示例标签，根据实际情况修改
    };
  })
  // list: [
  //   {
  //     name: '基础样式',
  //     url: '/assets/images/CSS/basic.jpeg',
  //     // url: new URL('../assets/images/CSS/basic.png', import.meta.url).href, // 使用 new URL() 来获取图片的绝对路径
  //     explain: 'css基础样式',
  //     tag: [
  //       '基础',
  //       '基础样式'
  //     ]
  //   },
  //   {
  //     name: '文本样式',
  //     // url: '/src/assets/images/CSS/basic.jpeg',
  //     explain: 'css基础样式',
  //     tag: [
  //       'CSS',
  //       '基础样式'
  //     ]
  //   },
  //   {
  //     name: '列表样式',
  //     // url: '/src/assets/images/CSS/basic.jpeg',
  //     explain: 'css基础样式',
  //     tag: [
  //       'CSS',
  //       '基础样式'
  //     ]
  //   },
  //   {
  //     name: '表格样式',
  //     // url: '/src/assets/images/CSS/basic.jpeg',
  //     explain: 'css基础样式',
  //     tag: [
  //       'CSS',
  //       '基础样式'
  //     ]
  //   }
  // ]
}

// 使用 ref 来确保响应式
// const cssListRef = ref(cssList);

export default cssList;