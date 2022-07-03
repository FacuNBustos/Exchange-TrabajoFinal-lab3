
<template>
    <div class="flex w-full h-full bg-gray-300 justify-center items-center">
        <Login v-if="!$store.state.admin.check"/>
        <PanelAdministrator v-if="$store.state.admin.check"/>
    </div>
</template>

<script setup>
import store from '../store';
import Login from '../components/AdministratorView/Login.vue';
import PanelAdministrator from '../components/AdministratorView/PanelAdministrator.vue';

store.dispatch('navbar/handleChangeAdmin');
</script>