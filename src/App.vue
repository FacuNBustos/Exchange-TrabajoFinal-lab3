
<template>
  <div class="grid grid-rows-header w-screen h-screen">

    <HeaderView />

    <div class="grid grid-cols-header w-full h-full">

      <NavView />

      <router-view />

    </div>

    <ChargePage v-if="$store.state.helper.load"/>
    <CardAlert v-if="$store.state.helper.alert"/>

  </div>
</template>

<script setup>
import HeaderView from './views/HeaderView.vue';
import NavView from './views/NavView.vue';
import ChargePage from './components/ChargePage.vue';
import CardAlert from './components/cardAlert.vue';

</script>
