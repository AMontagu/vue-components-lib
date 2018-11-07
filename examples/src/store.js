import Vue from "vue";
import Vuex from "vuex";
import { MyStoreModule } from "../../src";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    MyStoreModule
  }
});
