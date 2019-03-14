<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="orange" dark>
          <v-toolbar-title dark>Login</v-toolbar-title>
        </v-toolbar>
        <div class="">
        <v-text-field label="Email" v-model="email"></v-text-field>
        <br>
        <v-text-field label="password" type="password" v-model="password"></v-text-field>
        <br>
        <div class="error" v-html="error"/>
        <br>
        <v-btn class="orange" dark @click="login">Login</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
import Authenticationservices from '@/services/Authenticationservices'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await Authenticationservices.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: black;
}
