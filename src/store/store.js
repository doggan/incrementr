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
    ADD_ITEM(state, payload) {
      state.items.push({
        id: state.items.length,
        text: payload,
        count: 0,
      });
    },

    UPDATE_ITEMS(state, payload) {
      state.items = payload;
    }
  },

  actions: {
    addItem({commit}, payload) {
      commit("ADD_ITEM", payload);
    },

    updateItems({commit}, payload) {
      commit("UPDATE_ITEMS", payload);
    }
  }
});
