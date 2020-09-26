import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [],
  },

  getters: {
    items(state) {
      return state.items;
    }
  },

  mutations: {
    ADD_ITEM(state, text) {
      state.items.push({
        id: state.items.length,
        title: text,
        count: 0,
      });
    },
  },

  actions: {
    addItem(context, text) {
      context.commit("ADD_ITEM", text);
    }
  }
});
