import Vue from 'vue';
import Vuex from 'vuex';

import profile from './modules/profile';
import user from './modules/user';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    profile,
    user,
  },
  strict: debug,
});
