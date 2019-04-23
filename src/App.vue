<template>
  <v-app id="app">
    <v-toolbar color="indigo" dark fixed app>
      <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon> -->
      <router-link :to="'/'" tag="span" class="home-link">
        <v-toolbar-title>Fitness Tracker</v-toolbar-title>
      </router-link>
    </v-toolbar>
    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: "App",
  mounted(){
    this.$store.dispatch('user/getUser');
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app .home-link {
  cursor: pointer;
}
</style>
