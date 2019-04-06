<template>
    <div class="home">
        <p>you are logged in & this is your dashboard.</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: "Home",
    beforeMount() {
        this.checkLogin()
    },
    methods: {
        checkLogin(){
            if(!this.isLoggedIn){
                this.$router.push('/login')
            }
        }
    },
    computed: {
        ...mapGetters('profile', {
            isLoggedIn: 'isLoggedIn'
        })
    }
}
</script>
