
<template>
  <div class="w-screen h-screen grid grid-rows-header">

    <HeaderView />

    <div class="w-full h-full grid grid-cols-header">

      <NavView />

      <router-view />

    </div>

  </div>
</template>

<script setup>
import HeaderView from './views/HeaderView.vue';
import NavView from './views/NavView.vue';

</script>
