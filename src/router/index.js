import Vue from 'vue';
import Router from 'vue-router';

import Login from '../pages/Login.vue';
import SignUp from '../pages/SignUp.vue';
import Home from '../pages/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
    },
  ],
});
