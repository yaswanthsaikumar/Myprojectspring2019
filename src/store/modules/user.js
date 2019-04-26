import {
  getAuthUserDetails,
  searchUsers,
} from '../../api/user';
/* eslint-disable no-param-reassign */
const state = {
  authUserDetails: {},
  searchUserResults: [],
};
const getters = {
  exerciseLog: state => state.authUserDetails.exerciseLog,
  dietLog: state => state.authUserDetails.dietLog,
  searchUserResults: state => state.searchUserResults,
  username: state => state.authUserDetails.username,
  age: state => state.authUserDetails.age,
  weight: state => state.authUserDetails.weight,
  height: state => state.authUserDetails.height,
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
  async searchUsers({ commit }, query) {
    const response = await searchUsers(query);
    if (response) {
      commit('setSearchUserResults', response);
    }
  },
};

const mutations = {
  setAuthUserDetails(state, authUserDetails) {
    state.authUserDetails = authUserDetails;
  },
  setSearchUserResults(state, searchResults) {
    state.searchUserResults = searchResults;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
