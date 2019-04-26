<template>
    <v-card>
        <v-list two-line v-if="dietLog">
            <template v-for="(log) in dietLog">
                <v-list-tile :key="log._id">
                    <v-list-tile-content>
                        <v-list-tile-title v-html="log.name"></v-list-tile-title>
                        <v-list-tile-sub-title v-html="log.quantity + ' cal.'">
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
  name: 'DietLog',
  computed: {
    ...mapGetters('user', {
      dietLog: 'dietLog',
    }),
  },
};
</script>

<style>

</style>
