<template>
    <v-card>
        <v-list two-line v-if="exerciseLog">
            <template v-for="(log, index) in exerciseLog">
                <v-list-tile :key="index">
                    <v-list-tile-content>
                        <v-list-tile-title v-html="log.type"></v-list-tile-title>
                        <v-list-tile-sub-title v-html="log.duration + ' hrs'">
                        </v-list-tile-sub-title>
                    </v-list-tile-content>
                </v-list-tile>
            </template>
        </v-list>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Exercises',
  computed: {
    ...mapGetters('user', {
      exerciseLog: 'exerciseLog',
    }),
  },
};
</script>

<style>

</style>
