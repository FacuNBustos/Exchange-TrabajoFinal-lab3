
<template>

    <div class="flex w-full h-full justify-center items-center">
        <div class="flex flex-col justify-center items-center w-[500px] h-[250px] border-2 border-gray-400 rounded shadow-lg shadow-gray-900">

            <div class="flex flex-row justify-center items-center h-[80%] mt-10">
                <input type="text" id='idProfile' placeholder="Ingrese su ID" 
                class="h-10 w-[300px] text-center font-roboto text-lg uppercase rounded-l
                focus:outline-none">

                <button type='submit' class="rounded-r bg-white
                hover:bg-gray-200
                active:bg-gray-300"
                @click="handleClick">
                    <img src="../../assets/login_logo.svg" alt="" class="w-10 h-10">
                </button>
            </div>
            <label class="text-roboto text-sm text-gray-200/75 text-center h-[20%]">
                Recuerde ser cuidadoso con su codigo personal el cual debe contar con 20 caracteres alfanumericos. Jamas nadie del staff le solicitara su codigo personal.
            </label>
        </div>
        
    </div>

</template>

<script setup>
import checkID from '../../services/checkLoginID.service';
import store from '../../store';

const handleClick = () => {
    const id = document.querySelector('#idProfile').value.toUpperCase();
    if (checkID(id)){
        store.dispatch('profile/handleChangeId', id);
    }else {
        alert('Error');
    }
    
}

</script>