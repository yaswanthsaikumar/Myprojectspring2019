
<template>
  <v-toolbar fixed class="black" dark>
    <v-toolbar-title class="mr-4">
    <span
      class="home"
      @click="navigateTo({name: 'root'})">
      FitnessTracker
    </span>
    </v-toolbar-title>
    <v-toolbar-items>

    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items class="red" dark>
      <v-btn flat dark
        @click="navigateTo({name: 'Login'})">
        Login
      </v-btn>
      <v-btn flat dark
        @click="navigateTo({name: 'Home'})">
        Home
      </v-btn>
      <v-btn flat dark
        @click="navigateTo({name: 'About'})">
        About
      </v-btn>
      <v-btn flat dark
        @click="navigateTo({name: 'Contact'})">
        Contact
      </v-btn>
      <v-btn flat dark
        @click="navigateTo({name: 'Register'})">
        Sign Up
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>

export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}

.home:hover {
  color: #E9E;
}
</style>
