<template>
    <v-container class="home" text-xs-center fluid>
        <p>you are logged in & this is your dashboard.</p>
        <ul>
            <li><router-link :to="'exercise'">exercise</router-link></li>
            <li><router-link :to="'diet'">diet</router-link></li>
            <li><router-link :to="'share'">share</router-link></li>
            <li><router-link :to="'logout'">logout</router-link></li>
        </ul>
    </v-container>
</template>

<script>
export default {
    name: "Home"
}
</script>
