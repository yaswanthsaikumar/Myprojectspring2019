import { getAuthUserDetails } from '../../api/user';
/* eslint-disable no-param-reassign */
const state = {
  authUserDetails: {},
};
const getters = {
  exerciseLog: state => state.exerciseLog,
};

const actions = {
  async getUser({ commit }) {
    const response = await getAuthUserDetails();
    if (response) {
      commit('setAuthUserDetails', response);
    }
  },
};

const mutations = {
  setAuthUserDetails(state, authUserDetails) {
    state.authUserDetails = authUserDetails;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
