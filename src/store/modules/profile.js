import {
  signin,
  signup,
  signout,
} from '../../api/profile';

/* eslint-disable no-param-reassign */
const state = {
  isLoggedIn: localStorage.getItem('isLoggedIn'),
  errorMessage: '',
};

const getters = {
  isLoggedIn: state => state.isLoggedIn,
  errorMessage: state => state.errorMessage,
};

const actions = {
  async login({ commit, dispatch }, credentials) {
    const response = await signin(credentials);
    if (response.success) {
      localStorage.setItem('isLoggedIn', true);
      commit('setLoginStatus', true);
      commit('setErrorMessage', '');
      dispatch('user/getUser', null, { root: true });
    } else {
      localStorage.setItem('isLoggedIn', false);
      commit('setLoginStatus', false);
      if (response.message) {
        commit('setErrorMessage', response.message);
      }
    }
  },
  async signup({ commit }, signUpData) {
    const response = await signup(signUpData);
    if (response.success) {
      localStorage.setItem('isLoggedIn', true);
      commit('setLoginStatus', true);
      commit('setErrorMessage', '');
    } else {
      localStorage.setItem('isLoggedIn', false);
      commit('setLoginStatus', false);
      if (response.message) {
        commit('setErrorMessage', response.message);
      }
    }
  },
  async logout({ commit }) {
    const response = await signout();
    if (response.success) {
      localStorage.setItem('isLoggedIn', false);
      commit('setLoginStatus', false);
    }
  },
};

const mutations = {
  setLoginStatus(state, loginStatus) {
    state.isLoggedIn = loginStatus;
  },
  setErrorMessage(state, message) {
    state.errorMessage = message;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
