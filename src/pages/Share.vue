<template>
    <v-container class="share text-xs-center fluid">
      <h3>Share</h3>
      <v-layout class="row wrap xs12">
          <v-flex class="xs4 align-self-center">
              <v-text-field
                  placeholder="search users"
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
      searchQuery: '',
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
    shareInfo() {
      console.log('TODO:// Need to share info');
    },
  },
};
</script>

<style>
.share .user{
  cursor: pointer;
}
</style>
