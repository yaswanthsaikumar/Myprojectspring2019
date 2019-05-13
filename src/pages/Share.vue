<template>
    <v-container class="share text-xs-center fluid">
      <h3>Share</h3>
      <v-layout class="row wrap xs12">
          <v-flex class="xs4 align-self-center">
              <v-text-field
                  label="search users"
                  v-model="searchQuery"
              ></v-text-field>
          </v-flex>
          <v-flex class="xs12 align-self-center">
              <v-list one-line v-if="searchUserResults">
                  <template v-for="(user) in searchUserResults">
                      <v-list-tile :key="user._id">
                          <v-list-tile-content>
                              <v-list-tile-title
                                class="user"
                                :data-id="user._id"
                                v-html="user.username"
                                @click="shareInfo"
                              ></v-list-tile-title>
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
  name: 'Share',
  data() {
    return {
      searchQuery: '', // Alraedy had the search before
    };
  },
  computed: {
    ...mapGetters('user', {
      searchUserResults: 'searchUserResults',
    }),
  },
  watch: {
    searchQuery(searchQuery) {
      this.$store.dispatch('user/searchUsers', searchQuery);
    },
  },
  methods: {
    shareInfo(e) {
      this.$store.dispatch('shareStat', {
        to: e.target.dataset.id,
      });
      // eslint-disable-next-line no-alert
      window.alert('message shared');
    },
  },
};
</script>

<style>
.share .user{
  cursor: pointer;
}
</style>
