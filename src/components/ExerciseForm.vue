<template>
    <v-container class="exercise-form" text-xs-center fluid>
        <v-layout row wrap xs12>
            <v-flex xs12 align-self-center>{{errorMessage}}</v-flex>
            <v-flex xs4 align-self-center>
                <v-text-field
                    placeholder="type"
                    v-model="type"
                ></v-text-field>
                <v-text-field
                    placeholder="duration"
                    v-model="duration"
                ></v-text-field>
                <v-btn color="info" @click="addExercise">Add</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'ExerciseForm',
    methods: {
        addExercise(){
            console.log('TODO: Need to post exercise')
        }
    }
}
</script>

<style>

</style>
