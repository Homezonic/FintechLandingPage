import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import AOS from "aos";
import BootstrapVue3 from "bootstrap-vue-3";

import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

import "./assets/custom.scss";

const app = createApp(App).use(router);
app.use(BootstrapVue3);
app.use(AOS.init());
app.mount("#app");
