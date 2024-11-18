import { createRouter, createWebHashHistory } from "vue-router";

const pages = import.meta.glob("../views/**/page.ts", {
  eager: true,
  import: "default",
});
const comps = import.meta.glob("../views/**/index.vue");

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
