import MyModal from "./components/MyModal.vue";

const VueComponentLib = {
  install(Vue, options) {
    Vue.prototype.$libOptions = options;

    Vue.component(MyModal.name, MyModal);
  }
};

export default VueComponentLib;
