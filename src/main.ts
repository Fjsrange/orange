import { createApp } from "vue";
import App from "./App.vue";
// import "./assets/scss/bem.scss";
import "./assets/scss/index.scss";
import { createPinia } from "pinia";

import router from "./router";

const app = createApp(App);
const pinia = createPinia(); // 创建Pinia实例

app.use(router); // 注册路由插件
app.use(pinia); // 使用pinia
app.mount("#app");

// createApp(App).mount('#app')
