
<template>

    <div class="flex flex-col items-center w-[1000px] h-[650px] rounded shadow-sm shadow-black bg-white p-2">
        <div class="flex flex-row">
            <input type="text" class="w-[350px] text-lg border-black border-y border-l text-roboto text-center uppercase" placeholder="ID del usuario" id="iduseradmin">
            <button class="border-y border-r border-black text-roboto p-1
            hover:bg-gray-200
            active:bg-gray-300"
            @click="handleSubmit">
                Buscar
            </button>
        </div>

        
        <div class="flex flex-col w-full h-[580px] mt-4 border border-gray-300">
            <div class="flex-grow overflow-auto pl-6 pr-6 text-center">

                <h3 v-if="!this.$store.state.admin.search" class="text-roboto text-lg text-gray-600 mt-3">
                No hay registros aparentes
                </h3>
                
                <HistoryCardAdmin v-if="this.$store.state.admin.search" v-for="elem in this.$store.state.admin.search" :history='elem'/>


            </div>
        </div>
    
    </div>

    <div v-if="this.$store.state.admin.editCheck" 
    class="flex flex-col justify-center items-center absolute w-[1200px] h-[700px] bg-gray-0 rounded">
        <div class="flex flex-col justify-center items-center w-[600px] h-[300px] p-2 bg-white gap-y-2 rounded-t">

            <h2 class="text-roboto "><span class="underline">ID transaccion:</span> {{this.$store.state.admin.editableInfo._id.toUpperCase()}}</h2>
            <h3 class="text-roboto"><span class="underline">Fecha y Hora:</span> {{new Date(this.$store.state.admin.editableInfo.datetime).toLocaleString()}}</h3>
            <h3 class="text-roboto"><span class="underline">Moneda:</span> {{this.$store.state.admin.editableInfo.crypto_code.toUpperCase()}}</h3>
            <h3 :class="(this.$store.state.admin.editableInfo.action == 'purchase')? 'text-roboto text-lg mr-2'
            : 'text-roboto text-lg mr-2'">
            <span class="underline">Tipo:</span> {{(this.$store.state.admin.editableInfo.action == 'purchase')? 'Compra' : 'Venta'}}
            </h3>
            <label for="" class="text-roboto">
                <span class="underline mr-2">Cantidad:</span>
                <input type="text" id="money" :value="this.$store.state.admin.editableInfo.crypto_amount" class="text-center border border-gray-200">
            </label>
            <label for="" class="text-roboto">
                <span class="underline mr-1">Monto de transferencia:</span> $
                <input type="text" id="amount" :value="this.$store.state.admin.editableInfo.money" class="text-center border border-gray-200">
            </label>

        </div>
        <div class="flex flex-row justify-center items-center w-[600px] h-[50px] bg-white gap-3 rounded-b">
            <button class="p-2 bg-red-200 rounded
            hover:bg-red-300
            active:bg-red-400"
            @click="handleCancelEdit">
                Cancelar
            </button>
            <button class="p-2 bg-yellow-200 rounded
            hover-yellow-300
            active:bg-yellow-400" 
            @click="handleSubmitEdit">
                Editar
            </button>
        </div>
    </div>

</template>

<script setup>
import { patchApi } from '../../services/connectionApi.service';
import store from '../../store';
import HistoryCardAdmin from './HistoryCardAdmin.vue';

const handleSubmit = () => {
    const idUser = document.querySelector('#iduseradmin').value;
    store.dispatch('admin/handleSearchId', idUser);
}

const handleCancelEdit = () => {
    store.dispatch('admin/handleChangeEdit');
}

const handleSubmitEdit = () => {
    const amount = document.querySelector('#money').value;
    const money = document.querySelector('#amount').value;
    const id = store.state.admin.editableInfo.user_id;
    store.dispatch('helper/handleChangeLoad');
    patchApi(money, amount)
    .then( function(response) {
        if (response){
            alert('Editado exitosamente');
            store.state.admin.search = null;
            store.dispatch('admin/handleSearchId', id);
            store.dispatch('helper/handleChangeLoad');
            store.dispatch('admin/handleChangeEdit');
        }else {
            alert('Error al editar');
            store.dispatch('helper/handleChangeLoad');
        }
    })
}


</script>