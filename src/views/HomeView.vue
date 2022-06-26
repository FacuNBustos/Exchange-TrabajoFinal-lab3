<template>

    <section class="flex justify-center items-center w-full h-full
    bg-[url('./src/assets/fondoEstrellas2.jpg')] bg-cover">
        <div class="grid grid-cols-card grid-rows-card gap-y-6 gap-x-3">

            <Card v-if="this.$store.state.crypto.checked" v-for="elem in this.$store.state.crypto.crytoData" :crypto='elem' :key="elem.id"/>
            <SqueletonCard v-if="!this.$store.state.crypto.checked" v-for="elem in [0,1,2,3,4,5,6,7,8,9]" :key="elem" />

        </div>
    </section>

</template>

<script setup>
import Card from '../components/HomeView/Card.vue';
import SqueletonCard from '../components/HomeView/SqueletonCard.vue';
import store from '../store';

store.dispatch('navbar/handleChangeHome');
store.dispatch('crypto/handleSubmitCrypto')

</script>
