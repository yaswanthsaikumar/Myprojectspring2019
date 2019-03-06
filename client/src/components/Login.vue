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
export default {
  name: 'login'
}
</script>
