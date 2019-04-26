<template>
  <v-card class="bmi-card">
    <v-card-title>
      <p>your BMI: <strong class="bmi-score">19</strong></p>
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
  },
};
</script>

<style>
.bmi-card .bmi-score{
  font-size: 50px
}
</style>
