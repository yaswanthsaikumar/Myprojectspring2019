<template>
  <v-card class="bmi-card">
    <v-card-title>
      <p>your BMI: <strong class="bmi-score">{{bmi}}</strong></p>
    </v-card-title>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'BmiResult',
  computed: {
    ...mapGetters('user', {
      weight: 'weight',
      height: 'height',
    }),
    bmi() {
      let bmi = ((this.weight / this.height / this.height) * 10000);
      bmi = Math.round(bmi * 100) / 100;
      return bmi || '';
    },
  },
};
</script>

<style>
.bmi-card .bmi-score{
  font-size: 50px
}
</style>
