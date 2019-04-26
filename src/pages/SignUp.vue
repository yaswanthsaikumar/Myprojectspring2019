<template>
  <v-container class="signup-form" text-xs-center fluid>
    <v-flex xs12 align-self-center>{{errorMessage}}</v-flex>
    <v-flex xs4 align-self-center>
      <v-text-field
        label="email"
        v-model="email"
      ></v-text-field>
      <v-text-field
        label="username"
        v-model="username"
      ></v-text-field>
      <v-text-field
        label="password"
        type="password"
        v-model="password"
      ></v-text-field>
      <v-text-field
        label="age"
        type="number"
        v-model="age"
      ></v-text-field>
      <v-text-field
        label="weight (in kg.)"
        type="number"
        v-model="weight"
      ></v-text-field>
      <v-text-field
        label="height (in cm.)"
        type="number"
        v-model="height"
      ></v-text-field>
      <v-btn color="info" @click="signup">SignUp</v-btn>
    </v-flex>
    <v-flex xs12 align-self-center>
      <p>Already Have an account? <router-link :to="'login'">login</router-link></p>
    </v-flex>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'SignUp',
  data() {
    return {
      email: '',
      username: '',
      password: '',
      age: null,
      height: null,
      weight: null,
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
    signup() {
      this.$store.dispatch('profile/signup', {
        email: this.email,
        username: this.username,
        password: this.password,
        age: this.age,
        height: this.height,
        weight: this.weight,
      });
    },
  },
};
</script>
