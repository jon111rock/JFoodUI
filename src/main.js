import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import $ from "jquery";
import "bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
Vue.config.productionTip = false;
AOS.init();
window.$ = $;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
