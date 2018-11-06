import MyContainer from "./MyContainer";

MyContainer.install = function install(Vue) {
  Vue.component(MyContainer.name, MyContainer);
};

export default MyContainer;
