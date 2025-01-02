import { createRouter, createWebHashHistory } from "vue-router";

const pages = import.meta.glob("../views/**/page.ts", {
  eager: true,
  import: "default",
});
const comps = import.meta.glob("../views/**/index.vue");

// export const generateArticleRoutes = generateRoutesFn(pages, comps, 'article')   // 生成article模块的路由

let img = import.meta.glob("../views/share/css/**/index.ts", {
  eager: true,
  import: "default",
});
/**
 * 获取 css 模块的信息
 * @type {Array<any>}
 * title、info、img、menuOrder、tag
 * 名称、描述、图片、菜单排序、标签
 */
let cssList:Array<any> = Object.entries(img).map(([_, meta]) => {
  return meta;
});
console.log(new URL(import.meta.url));
console.log();

console.log('cssList',cssList);
let url = new URL(import.meta.url).host;
console.log(url + cssList[0].img);



const routes: Array<any> = Object.entries(pages).map(([path, meta]) => {
  const compTsPath = path.replace("page.ts", "index.vue") || "/";
  path = path.replace("../views", "").replace("/page.ts", "") || "/";
  const name = path.split("/").filter(Boolean).join("-") || "index";

  return {
    path,
    name,
    component: comps[compTsPath],
    meta,
  };
});

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
