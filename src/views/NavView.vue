<template>
    <nav class="bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r border-r border-gray-400
    flex flex-col gap-1 pl-1 pt-4 shadow-lg">
        
        <div :class=' (this.$store.state.navbar.home)? active : notActive'
        @click="handleChangePage('home')">
            <img src="../assets/home_logo.svg" alt="home" class="h-8 w-8">
        </div>

        <div :class='(this.$store.state.navbar.shop) ? active : notActive'
        @click="handleChangePage('shop')">
            <img src="../assets/buy_logo.svg" alt="home" class="h-8 w-8">
        </div>

        <div :class='(this.$store.state.navbar.profile) ? active : notActive'
        @click="handleChangePage('profile')">
            <img src="../assets/profile_logo.svg" alt="home" class="h-8 w-8">
        </div>
        
    </nav>
</template>

<script setup>
import router from '../router/router';
import store from '../store';

const handleChangePage = (value) => {
    switch (value) {
        case 'home':
            router.push('/home');
            break;
        case 'shop':
            router.push('/shop');
            break;
        case 'profile':
            router.push('/profile');
            break;
    };
};

const notActive = `h-14 rounded-l-lg bg-gray-700/25 border-black border-b-2 border-l-2 shadow-sm shadow-black
        flex justify-center items-center
        hover:bg-gray-400/25 hover:cursor-pointer 
        active:bg-gray-200/25`;

const active = `h-14 rounded-l-lg bg-gray-200/25 border-black border-b-2 border-l-2 shadow-lg
        flex justify-center items-center`;

</script>