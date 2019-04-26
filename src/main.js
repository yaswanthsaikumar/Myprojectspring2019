import Vue from 'vue';
import Vuetify from 'vuetify';

import 'vuetify/dist/vuetify.min.css';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(Vuetify, {
  theme: {
    primary: '#2196f3',
    secondary: '#03a9f4',
    accent: '#03a9f4',
    error: '#f44336',
    warning: '#ff9800',
    info: '#03a9f4',
    success: '#4caf50',
  },
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
