import Vue from 'vue';
import Vuex from 'vuex';
import Root from './modules/root'
import SideBar from './modules/sidebar'
import Header from './modules/header'

import RiskPageModule from './modules/risk-page'
import BenchmarkingModule from './modules/benchmarking'
import LossModule from './modules/lossmodel'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},

  modules: {
    Root,
    SideBar,
    Header,

    RiskPageModule,
    BenchmarkingModule,
    LossModule,
  },
});
