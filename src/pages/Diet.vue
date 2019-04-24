<template>
    <v-container class="diet" text-xs-center fluid>
        <h3>Diet</h3>
        <v-layout row wrap xs12>
            <v-flex xs12 align-self-center>
                <diet-form></diet-form>
            </v-flex>
            <v-flex xs12 align-self-center>
                <diet-log></diet-log>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import DietForm from '../components/DietForm.vue';
import DietLog from '../components/DietLog.vue';

export default {
  name: 'Diet',
  components: {
    DietForm,
    DietLog,
  },
};
</script>
