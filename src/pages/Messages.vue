<template>
    <v-container class="messages-page" text-xs-center fluid>
        <h3>Messages</h3>
        <v-layout row wrap xs12>
            <v-flex xs12 align-self-center>
              <v-list three-line v-if="statMessages">
                  <template v-for="(msg, index) in statMessages">
                      <v-list-tile :key="index">
                          <v-list-tile-content>
                              <v-list-tile-title v-html="'from: '+msg.from"></v-list-tile-title>
                              <div>exercises</div>
                              <div>diets</div>
                          </v-list-tile-content>
                      </v-list-tile>
                  </template>
              </v-list>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Messages',
  computed: {
    ...mapGetters('user', {
      statMessages: 'statMessages',
    }),
  },
};
</script>

<style>

</style>
