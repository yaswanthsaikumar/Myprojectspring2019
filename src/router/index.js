import Vue from 'vue';
import Router from 'vue-router';

import Login from '../pages/Login.vue';
import SignUp from '../pages/SignUp.vue';
import Home from '../pages/Home.vue';
import Exercise from '../pages/Exercise.vue';
import Diet from '../pages/Diet.vue';
import Share from '../pages/Share.vue';
import Messages from '../pages/Messages.vue';

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
    {
      path: '/exercise',
      name: 'exercise',
      component: Exercise,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/diet',
      name: 'diet',
      component: Diet,
      meta: {
        requiresAuth: true,
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
    {
      path: '/messages',
      name: 'messages',
      component: Messages,
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
