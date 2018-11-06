import Vue from "vue";
import App from "./App.vue";
import MyModal from "../../src/components/MyModal";

Vue.config.productionTip = false;

Vue.use(MyModal, {
  headerModal: false
});

new Vue({
  render: h => h(App)
}).$mount("#app");
