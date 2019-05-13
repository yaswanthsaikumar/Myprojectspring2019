<template>
    <v-container class="diet-form" text-xs-center fluid>
        <v-layout row wrap xs12>
            <v-flex xs12 align-self-center>{{errorMessage}}</v-flex>
            <v-flex xs4 align-self-center>
                <v-combobox
                    label="name"
                    :items="dietLogNames"
                    v-model="name"
                ></v-combobox>
                <v-text-field
                    label="quantity"
                    v-model="quantity"
                ></v-text-field>
                <v-btn color="info" @click="addDiet">Add</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'DietForm',
  data() {
    return {
      name: '',
      quantity: '',
      errorMessage: '',
    };
  },
  computed: {
    ...mapGetters('user', {
      dietLogNames: 'dietLogNames',
    }),
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
