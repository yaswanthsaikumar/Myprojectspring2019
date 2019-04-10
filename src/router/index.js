import Vue from 'vue';
import Router from 'vue-router';

import Login from '../pages/Login.vue';
import SignUp from '../pages/SignUp.vue';
import Home from '../pages/Home.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
      meta: {
        requiresAuth: false,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      next();
    } else {
      next({ name: 'login' });
    }
  } else {
    next();
  }
});

export default router;
