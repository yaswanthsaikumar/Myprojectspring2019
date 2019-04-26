<template>
    <v-container class="home" text-xs-center fluid>
        <v-layout class="row wrap xs12">
          <v-flex class="xs6 align-self-center">
            <p class="welcome-msg">Welcome {{username}}, this is your dashboard.</p>
            <ul class="site-nav">
                <li><router-link :to="'exercise'">exercise</router-link></li>
                <li><router-link :to="'diet'">diet</router-link></li>
                <li>
                  <router-link :to="'messages'">messages</router-link>
                </li>
                <li><router-link :to="'share'">share</router-link></li>
                <li><router-link :to="'profile'">profile</router-link></li>
                <li><a href="#" @click="logOut">logout</a></li>
            </ul>
          </v-flex>
          <v-flex class="xs6 align-self-center">
            <bmi-result></bmi-result>
          </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

import BmiResult from '../components/BmiResult.vue';

export default {
  name: 'Home',
  computed: {
    ...mapGetters('profile', {
      isLoggedIn: 'isLoggedIn',
    }),
    ...mapGetters('user', {
      username: 'username',
    }),
  },
  methods: {
    logOut() {
      this.$store.dispatch('profile/logout');
    },
  },
  watch: {
    isLoggedIn(newValue) {
      if (newValue === false) {
        this.$router.push('/login');
      }
    },
  },
  components: {
    BmiResult,
  },
};
</script>

<style>
.home .welcome-msg{
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
}
.home .site-nav li{
  font-family: Arial, Helvetica, sans-serif;
  list-style: none;
  font-size: 18px;
}
.home .site-nav li:hover{
  font-size: 22px;
}
</style>
