<template>

    <article class="bg-gradient-to-t from-gray-800 to-gray-600">
        <CardLogin v-if="!this.$store.state.profile.check"/>
        <CardProfile v-if="this.$store.state.profile.check" />
    </article>
    
</template>

<script setup>
import store from '../store';
import CardLogin from '../components/ProfileView/cardLogin.vue';
import CardProfile from '../components/ProfileView/panelProfile.vue';
store.dispatch('navbar/handleChangeProfile');

</script>