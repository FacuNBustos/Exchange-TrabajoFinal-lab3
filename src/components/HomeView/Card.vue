<template>
    <div class="bg-gray-900/75 rounded-lg shadow-lg shadow-slate-900">
        <h1>{{}}</h1>
    </div>
</template>

<script setup>
import store from '../../store';

console.log(store.state.crypto.cryptoData)
</script>