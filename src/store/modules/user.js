import { getAuthUserDetails } from '../../api/user';
/* eslint-disable no-param-reassign */
const state = {
  authUserDetails: {},
};
const getters = {
  exerciseLog: state => state.authUserDetails.exerciseLog,
};

const actions = {
  async getUser({ commit, dispatch }) {
    const response = await getAuthUserDetails();
    if (response && !response.message) {
      commit('setAuthUserDetails', response);
    } else {
      dispatch('profile/logout', null, { root: true });
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
