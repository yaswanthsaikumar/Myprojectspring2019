<template>
    <v-container class="exercise-form" text-xs-center fluid>
        <v-layout row wrap xs12>
            <v-flex xs12 align-self-center>{{errorMessage}}</v-flex>
            <v-flex xs4 align-self-center>
                <v-combobox
                    label="type"
                    :items="exerciseLogTypes"
                    v-model="type"
                ></v-combobox>
                <v-text-field
                    label="duration"
                    v-model="duration"
                ></v-text-field>
                <v-btn color="info" @click="addExercise">Add</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ExerciseForm',
  data() {
    return {
      type: '',
      duration: '',
      errorMessage: '',
    };
  },
  computed: {
    ...mapGetters('user', {
      exerciseLogTypes: 'exerciseLogTypes',
    }),
  },
  methods: {
    addExercise() {
      this.$store.dispatch('addExercise', {
        type: this.type,
        duration: Number.parseFloat(this.duration),
      }, { root: true });
    },
  },
};
</script>

<style>

</style>
