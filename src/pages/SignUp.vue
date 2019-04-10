<template>
    <v-container class="signup-form" text-xs-center fluid>
        <v-flex xs12 align-self-center>{{errorMessage}}</v-flex>
        <v-flex xs4 align-self-center>
                <v-text-field
                    placeholder="email"
                    v-model="email"
                ></v-text-field>
                <v-text-field
                    placeholder="username"
                    v-model="username"
                ></v-text-field>
                <v-text-field
                    placeholder="password"
                    type="password"
                    v-model="password"
                ></v-text-field>
                <v-btn color="info" @click="signup">SignUp</v-btn>
            </v-flex>
            <v-flex xs12 align-self-center>
                Already Have an account? <router-link :to="'login'">login</router-link>
            </v-flex>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'SignUp',
    data(){
        return {
            email: '',
            username: '',
            password: ''
        }
    },
    computed: {
        ...mapGetters('profile', {
            isLoggedIn: 'isLoggedIn',
            errorMessage: 'errorMessage'
        })
    },
    watch: {
        isLoggedIn: function (newValue, oldValue) {
            if(newValue === true){
                this.$router.push('/');
            }
        }
    },
    methods: {
        signup(){
            this.$store.dispatch('profile/signup', {
                email: this.email,
                username: this.username,
                password: this.password
            });
        }
    }
}
</script>
