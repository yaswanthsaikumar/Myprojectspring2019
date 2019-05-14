<template>
    <v-container class="messages-page" text-xs-center fluid>
        <h3>Messages</h3>
        <v-layout row wrap xs12>
            <v-flex xs12 align-self-center>
              <v-expansion-panel>
                <v-expansion-panel-content
                  v-for="(item,i) in statMessages"
                  :key="i"
                >
                  <template v-slot:header>
                    <div>{{item.from}}</div>
                  </template>
                  <v-card>
                    <div
                      xs12
                      align-self-center
                      v-for="(log,i) in item.exerciseLog"
                      :key="i"
                      class="text-xs-center"
                    >
                      <v-chip color="green">{{log.type}} - {{log.duration}}hrs</v-chip>
                    </div>
                    <div
                      xs12
                      align-self-center
                      v-for="(log,i) in item.dietLog"
                      :key="i"
                      class="text-xs-center"
                    >
                      <v-chip color="orange">{{log.name}} - {{log.quantity}}cal</v-chip>
                    </div>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>
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
