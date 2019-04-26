<template>
    <v-container class="login-form" text-xs-center fluid>
        <v-layout row wrap xs12>
            <v-flex xs12 align-self-center>{{errorMessage}}</v-flex>
            <v-flex xs4 align-self-center>
                <v-text-field
                    placeholder="email"
                    v-model="logemail"
                ></v-text-field>
                <v-text-field
                    placeholder="password"
                    type="password"
                    v-model="logpassword"
                ></v-text-field>
                <v-btn color="info" @click="login">Login</v-btn>
            </v-flex>
            <v-flex xs12 align-self-center>
                New User? <router-link :to="'signup'">SignUp</router-link>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      logemail: '',
      logpassword: '',
    };
  },
  computed: {
    ...mapGetters('profile', {
      isLoggedIn: 'isLoggedIn',
      errorMessage: 'errorMessage',
    }),
  },
  watch: {
    isLoggedIn(newValue) {
      if (newValue === true) {
        this.$router.push('/');
      }
    },
  },
  methods: {
    login() {
      this.$store.dispatch('profile/login', {
        logemail: this.logemail,
        logpassword: this.logpassword,
      });
    },
  },
};
</script>
