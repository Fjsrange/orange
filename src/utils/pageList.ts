interface Page {
  name: string;
  base: string;
  path: string;
}

const pageList:Page[] = [
  { name: "首页", base: "/", path: "/" },
  { name: "个人分享", base: "/share", path: "/share" },
  { name: "资源下载", base: "/resource", path: "/resource" },
  { name: "关于我", base: "/about", path: "/about" },
]

export default pageList;