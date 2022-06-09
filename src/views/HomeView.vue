<template>
    <section class="grid grid-cols-5 grid-rows-2 gap-x-2 gap-y-5 pt-20 pb-20 p-2
        bg-[#fefefe]">
        <Card v-for="elem in this.$store.state.crypto.crytoData"/>
        <h1 v-if="this.$store.state.crypto.cryptoData">NO hay nada</h1>
    </section>
</template>

<script setup>
import Card from '../components/HomeView/Card.vue';
import store from '../store';

store.dispatch('navbar/handleChangeHome');
store.dispatch('crypto/handleSubmitCrypto')

</script>
