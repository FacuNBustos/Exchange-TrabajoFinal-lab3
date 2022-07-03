
<template>
    <div class="flex justify-center items-center text-center absolute w-screen h-screen bg-gray-0"
    @click="handleClick">
        <div class="flex flex-col justify-center items-center w-[450px] h-[250px] bg-white border border-black shadow shadow-gray-700 rounded">
            <label class="text-roboto text-2xl text-blue-700">{{$store.state.helper.alertMessage}}</label>
            <label class="absolute pt-[220px] text-roboto text-sm">Haga click en este pop out para cerrarlo.</label>
        </div>
    </div>
</template>

<script setup>
import store from '../store';

const handleClick = () => {
    store.dispatch('helper/handleChangeAlert');
}
</script>