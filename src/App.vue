
<template>
  <div class="grid grid-rows-header w-screen h-screen">

    <HeaderView />

    <div class="grid grid-cols-header w-full h-full">

      <NavView />

      <router-view />

    </div>

    <ChargePage v-if="this.$store.state.helper.load"/>

  </div>
</template>

<script setup>
import HeaderView from './views/HeaderView.vue';
import NavView from './views/NavView.vue';
import ChargePage from './components/ChargePage.vue';

</script>
