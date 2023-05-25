import { createStore } from 'vuex'

export default createStore({
  state: {
    mode: localStorage.getItem("mode") || "green",
  },
  mutations: {
    setMode(state, mode) {
      state.mode = mode;
      localStorage.setItem("mode", mode);
    }
  },
  actions: {},
  modules: {}
})
