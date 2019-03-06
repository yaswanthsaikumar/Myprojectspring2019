<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="green" dark>
          <v-toolbar-title dark>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
        <form
            name="Fitness-tracker-form"
            autocomplete="off">
        <v-text-field label="Email" v-model="email"></v-text-field>
        <br>
        <v-text-field label="password" type="password" v-model="password" autocomplete="new-password"></v-text-field>
        </form>
        <br>
        <div class="error" v-html="error"/>
        <br>
        <v-btn class="green" dark @click="register">Register</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: 'register'
}
</script>
