<template>
    <v-container class="login-form" text-xs-center fluid>
        <v-layout row wrap xs12>
            <v-flex xs4 align-self-center>
                <v-text-field placeholder="username"></v-text-field>
                <v-text-field placeholder="passworod" :type="'password'"></v-text-field>
                <v-btn color="info">Login</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: "Login"
}
</script>
