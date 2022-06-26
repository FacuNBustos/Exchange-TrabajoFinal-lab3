<template>

    <header class="flex flex-row justify-center items-center 
    bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-gray-600 shadow-lg">

        <img src="../assets/LogoExchange.png" alt="exchange logo" class="w-8 h-8 mr-2">
        <h1 class="text-2xl font-roboto">Exchange simulator</h1>

        <div class="absolute h-10 right-1 flex justify-center items-center pr-3" v-if="this.$store.state.profile.id">
            <div class="flex flex-row hover:cursor-pointer mr-4"
            @click="handleProfile">
                <img src="../assets/profile-svgrepo-com.svg" alt="" class="mr-2 w-8 h-8">
                <h3 class="text-roboto text-white">{{convertir(this.$store.state.profile.id)}}</h3>
            </div>
            <button class="p-1.5 rounded text-roboto text-white bg-gray-700
            hover:bg-gray-800
            active:bg-red-900/75"
            @click="handleClick">
                Log Out
            </button>
        </div>
    </header>
    
</template>

<script setup>
import router from '../router/router';
import store from '../store';

const handleClick = () => {
    store.state.profile.id = null;
    store.state.profile.check = false;
}
const handleProfile = () => {
    router.push('/profile');
}

const convertir = (id) => {
    return '*'.repeat(id.slice(0,-4).length) + id.slice(-4).toUpperCase();
}
</script>
