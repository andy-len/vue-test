export default {
  state: {
    UPDATE_REQUEST_COUNT: ""
  },
  mutations: {
    setCount(state, val) {
      state.UPDATE_REQUEST_COUNT = val + 1;
    }
  },
  getters: {},
  actions: {}
};
