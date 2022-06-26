<template>
    <h1>Este es el Profile</h1>
</template>

<script setup>
import store from '../store';
store.dispatch('navbar/handleChangeProfile');
</script>