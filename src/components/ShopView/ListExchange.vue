
<template>
    <div class="flex flex-col w-[100rem] h-[40rem] mt-3">
        <div class="flex-grow overflow-auto pl-6 pr-6" v-if="this.$store.state.shop.exchanges">

        <CardExchange v-for="elem in Object.keys(this.$store.state.shop.exchanges)" :keyExchange="elem"/>
            
        </div>
    </div>
</template>

<script setup>
import CardExchange from './CardExchange.vue';
</script>

