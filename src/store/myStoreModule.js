const state = {
  myData: 0
};

const getters = {
  getMyData: state => {
    return state.myData;
  }
};

const actions = {};

const mutations = {
  setMyData(state, data) {
    state.myData = data;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
