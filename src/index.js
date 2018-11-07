import * as VueComponentsLibComponents from "./components";
import MyStoreModule from "./store/myStoreModule";

const VueComponentLib = {
  install(Vue, options) {
    Object.values(VueComponentsLibComponents).forEach(component => {
      Vue.use(
        component,
        options[component.name] ? options[component.name] : {}
      );
    });
  }
};

export default VueComponentLib;
export { VueComponentLib, MyStoreModule };
