import Vue from "vue";
import App from "./App.vue";
import VueComponentLib from "../../src/index";

Vue.config.productionTip = false;

Vue.use(VueComponentLib, {
  MyModal: {
    headerModal: false
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");
