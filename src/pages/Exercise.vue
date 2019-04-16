<template>
    <v-container class="exercise" text-xs-center fluid>
        <v-layout row wrap xs12>
            <v-flex xs12 align-self-center>
                <exercise-form></exercise-form>
            </v-flex>
            <v-flex xs12 align-self-center>
                <exercises></exercises>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import ExerciseForm from '../components/ExerciseForm';
import Exercises from '../components/Exercises';

export default {
    name: 'Exercise',
    components: {
        ExerciseForm,
        Exercises
    }
}
</script>
