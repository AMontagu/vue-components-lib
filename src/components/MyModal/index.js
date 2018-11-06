import MyModal from "./MyModal";

MyModal.install = function install(Vue, options) {
  if (!Vue.prototype.$libOptions) {
    Vue.prototype.$libOptions = {};
  }

  Vue.prototype.$libOptions.MyModal = { ...options };

  Vue.component(MyModal.name, MyModal);
};

export default MyModal;
