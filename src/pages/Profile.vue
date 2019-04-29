<template>
  <v-container class="profile-form text-xs-center fluid">
    <v-flex xs12 align-self-center>{{errorMessage}}</v-flex>
    <v-flex class="xs4 align-self-center">
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
      <v-btn color="info" @click="updateUserDetails">update</v-btn>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      errorMessage: '',
      age: this.$store.getters['user/age'],
      height: this.$store.getters['user/height'],
      weight: this.$store.getters['user/weight'],
    };
  },
  methods: {
    updateUserDetails() {
      this.$store.dispatch('user/updateUser', {
        age: this.age,
        height: this.height,
        weight: this.weight,
      });
    },
  },
};
</script>

<style>

</style>
