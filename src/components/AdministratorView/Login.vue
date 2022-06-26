<template>

    <div class="flex flex-col items-center justify-center w-[600px] h-[300px] border shadow-sm shadow-blue-900 rounded bg-blue-200 ">

        <h2 class="text-roboto text-2xl">Pantalla de login super segura</h2>
        <button class="mt-4 bg-blue-700 p-2 border border-black rounded shadow-sm shadow-black
        hover:bg-blue-600
        active:bg-blue-500"
        @click="handleClick">
            No soy un ladron de informacion
        </button>

    </div>

</template>

<script setup>
import store from '../../store';


const handleClick= () => {
    store.dispatch('admin/handleChangeCheck')
}
</script>