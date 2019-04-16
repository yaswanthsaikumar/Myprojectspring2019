import Vue from 'vue';
import Router from 'vue-router';

import Login from '../pages/Login.vue';
import LogOut from '../pages/LogOut.vue';
import SignUp from '../pages/SignUp.vue';
import Home from '../pages/Home.vue';
import Exercise from '../pages/Exercise.vue';
import Diet from '../pages/Diet.vue';
import Share from '../pages/Share.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: false,
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
      path: '/logout',
      name: 'logout',
      component: LogOut,
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
    {
      path: '/exercise',
      name: 'exercise',
      component: Exercise,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/diet',
      name: 'diet',
      component: Diet,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/share',
      name: 'share',
      component: Share,
      meta: {
        requiresAuth: true,
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
