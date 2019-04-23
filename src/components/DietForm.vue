<template>
    <v-container class="diet-form" text-xs-center fluid>
        <v-layout row wrap xs12>
            <v-flex xs12 align-self-center>{{errorMessage}}</v-flex>
            <v-flex xs4 align-self-center>
                <v-text-field
                    placeholder="name"
                    v-model="name"
                ></v-text-field>
                <v-text-field
                    placeholder="quantity"
                    v-model="quantity"
                ></v-text-field>
                <v-btn color="info" @click="addDiet">Add</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  name: 'DietForm',
  data() {
    return {
      name: '',
      quantity: '',
      errorMessage: '',
    };
  },
  methods: {
    addDiet() {
      this.$store.dispatch('addDiet', {
        name: this.name,
        quantity: Number.parseFloat(this.quantity),
      }, { root: true });
    },
  },
};
</script>

<style>
</style>
