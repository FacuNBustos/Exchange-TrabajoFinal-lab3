
<template>
    <div class="flex w-full h-full justify-center items-center">
        <div class="w-[500px] h-[250px] border-2 border-gray-400 rounded flex flex-row justify-center items-center shadow-lg shadow-gray-900">
            <input type="text" id='idProfile' placeholder="Ingrese su ID" class="text-center font-roboto text-lg uppercase h-10 w-[300px] rounded-l
            focus:outline-none">
            <button class="rounded-r bg-white
            hover:bg-gray-200
            active:bg-gray-300"
            @click="handleClick">
                <img src="../../assets/login_logo.svg" alt="" class="w-10 h-10">
            </button>
        </div>
    </div>
</template>

<script setup>import store from '../../store';


const handleClick = () => {
    const id = document.querySelector('#idProfile').value.toUpperCase();
    store.dispatch('profile/handleChangeId', id);
}

</script>