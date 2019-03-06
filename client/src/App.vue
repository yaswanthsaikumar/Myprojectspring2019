<template>

  <div id="app">

   <img src="./assets/bg.png">

     <v-app>
      <App-Navigation/>
     <main>
       <v-container fluid>
        <router-view>

        </router-view>
       </v-container>
     </main>
    </v-app>
  </div>
</template>

<script>
import AppNavigation from '@/components/AppNavigation.vue'
export default {
  name: 'App',
  components: {
    AppNavigation
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
