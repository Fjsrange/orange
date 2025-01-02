/**
import { createApp } from 'vue';
 * css列表
*/
// import {ref} from 'vue';
// import { REACT_APP_API_BASE_URL } from '';
// 导入图片模块
// const imageModules = import.meta.glob('@/assets/images/CSS/*.{png,jpg,jpeg,svg}', {
//   eager: true,
//   import: 'default'
// });
// console.log('imageModules',imageModules);
// let img = REACT_APP_API_BASE_URL +'/assets/images/CSS/微信图片_20240511135022.jpg'
// let img = 'https://fjsrange.github.io/orange/assets/images/CSS/微信图片_20240511135022.jpg'
// console.log('process.env',new URL('../assets/images/CSS/basic.png', import.meta.url).href);
// console.log(new URL(import.meta.url));
// let images = ref<Record<string, string>>(import.meta.glob('@/assets/images/CSS/basic.jpeg', {
//   eager: true,
//   import: 'default'
// }))
// console.log('images',images.value);
// let url = new URL(import.meta.url).host; // 获取当前 URL 的主机名
// console.log('url',url);


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

// 使用 Page 接口来类型化 cssList 数组
const cssList:Page = {
  title: 'CSS',
  list: [
      {
        name: '基础样式',
        url: '/orange' + '/src/assets/images/CSS/basic.jpeg',
        // url: getImageUrl('@/assets/images/CSS/basic.jpeg'),
        // url: 'assets/images/CSS/basic.jpeg',
        // url: new URL('../assets/images/CSS/basic.png', import.meta.url).href, // 使用 new URL() 来获取图片的绝对路径
        info: 'css基础样式',
        tag: [
          '基础',
          '基础样式'
        ]
      },
      {
        name: '文本样式',
        url: '/orange' + '/src/assets/images/CSS/微信图片_20240511135022.jpg',
        info: 'css基础样式',
        tag: ['样式', '文本样式'],
      }
    ]
  // list: Object.entries(imageModules).map(([path, module]) => {
  //   // 提取文件名，不包括扩展名
  //   const name = path.split('/').pop()!.split('.')[0];
  //   //  module 是图片的 URL（这取决于你的构建配置）
  //   const url = module as string;
  //   console.log('url',url);
    
  //   // 根据实际情况填充其他字段
  //   return {
  //     name,
  //     url,
  //     info: '描述 ' + name, // 示例描述，根据实际情况修改
  //     tag: ['标签', '标签2'] // 示例标签，根据实际情况修改
  //   };
  // })
  // list: [
  //   {
  //     name: '基础样式',
  //     url: '/assets/images/CSS/basic.jpeg',
  //     // url: new URL('../assets/images/CSS/basic.png', import.meta.url).href, // 使用 new URL() 来获取图片的绝对路径
  //     info: 'css基础样式',
  //     tag: [
  //       '基础',
  //       '基础样式'
  //     ]
  //   },
  //   {
  //     name: '文本样式',
  //     // url: '/src/assets/images/CSS/basic.jpeg',
  //     info: 'css基础样式',
  //     tag: [
  //       'CSS',
  //       '基础样式'
  //     ]
  //   },
  //   {
  //     name: '列表样式',
  //     // url: '/src/assets/images/CSS/basic.jpeg',
  //     info: 'css基础样式',
  //     tag: [
  //       'CSS',
  //       '基础样式'
  //     ]
  //   },
  //   {
  //     name: '表格样式',
  //     // url: '/src/assets/images/CSS/basic.jpeg',
  //     info: 'css基础样式',
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