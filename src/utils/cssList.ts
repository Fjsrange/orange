/**
import { createApp } from 'vue';
 * css列表
*/

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
  list: [
    {
      name: '基础样式',
      url: '/src/assets/images/css/basic.jpeg',
      explain: 'css基础样式',
      tag: [
        '基础',
        '基础样式'
      ]
    },
    {
      name: '文本样式',
      url: '/src/assets/images/css/basic.jpeg',
      explain: 'css基础样式',
      tag: [
        'css',
        '基础样式'
      ]
    },
    {
      name: '列表样式',
      url: '/src/assets/images/css/basic.jpeg',
      explain: 'css基础样式',
      tag: [
        'css',
        '基础样式'
      ]
    },
    {
      name: '表格样式',
      url: '/src/assets/images/css/basic.jpeg',
      explain: 'css基础样式',
      tag: [
        'css',
        '基础样式'
      ]
    }
  ]
}


export default cssList;