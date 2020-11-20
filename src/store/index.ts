import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentPage: 'Welcome',
    headerMenuData: [
      { title: "Portfolio Risk", selected: false, isPro: false },
      { title: "Peer Benchmarking", selected: false, isPro: false },
      { title: "Stress test", selected: false, isPro: false },
      { title: "Research", selected: false, isPro: false },
      { title: "Scenario Planner", selected: false, isPro: true },
    ],

    currentPortfolioId: '',

    sidebarData: [
      { name: "Portfolio Name", score: 4, selected: true },
      { name: "Portfolio Name", score: 4, selected: false },
      { name: "Portfolio Name", score: 4, selected: false },
    ]

  },

  getters: {
    hasMenuHeader: state => {
      if (state.currentPage === 'Welcome') return false;
      return true;
    },

    hasSidebar: state => {
      if (state.currentPage === 'Welcome') return false;
      return true;
    },
  },
  

  mutations: {

    SWITCH_PAGE(state, payload) {
      state.currentPage = payload;
      state.headerMenuData.forEach((element) => {
        if (element.title === state.currentPage) {
          element.selected = true;
        }
        else {
          element.selected = false;
        }
      });
    },

    SWITCH_PORTFOLIO(state, payload) {
      state.sidebarData.forEach((element) => {
          element.selected = false;
      });
      state.sidebarData[payload].selected = true;
    },


  },

  actions: {
  },

  modules: {
  },
});
