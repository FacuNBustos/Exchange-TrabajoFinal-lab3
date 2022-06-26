
<template>

    <div class="flex flex-row items-center w-full h-12 bg-blue-200 mt-1 p-2 border shadow-sm shadow-gray-300 rounded">

        <div class="flex flex-row items-center w-[70%]">
            <h2 class="text-roboto text-sm text-gray-700 mr-3">ID: <span class="text-black">{{this.history._id}}</span></h2>
            <h3 class="text-roboto text-sm text-gray-700 mr-2">Fecha: <span class="text-black">{{new Date(this.history.datetime).toLocaleDateString()}}</span></h3>
            <h4 class="text-roboto text-sm text-gray-700 mr-2">Moneda: <span class="text-black">{{this.history.crypto_code.toUpperCase()}}</span></h4>
            <h4 class="text-roboto text-sm text-gray-700 mr-4">Cantidad: <span class="text-black">{{this.history.crypto_amount}}</span></h4>
            <h4 :class="(this.history.action == 'purchase')? 'text-roboto text-lg mr-2 text-green-700'
            : 'text-roboto text-lg mr-2 text-red-700'">
            {{(this.history.action == 'purchase')? 'Compra' : 'Venta'}}
            </h4>
        </div>
        <div class="flex justify-end w-[30%] p-2 gap-2.5"> 
            <button class="bg-red-200 p-1.5 rounded text-roboto text-sm
            hover:bg-red-300
            active:bg-red-400"
            @click="this.handleSubmitDelete">
                Eliminar
            </button>
            <button class="bg-yellow-200 p-1.5 rounded text-roboto text-sm
            hover:bg-yellow-300
            active:bg-yellow-400"
            @click="this.handleSubmitEdit">
                Editar
            </button>
        </div>
        
    </div>
</template>

<script>
import { deletedApi } from '../../services/connectionApi.service';
import store from '../../store';

export default {

    props: {
        history: {
            type: Object,
            default: () => {},
            required: true
        }
    },
    methods: {
        handleSubmitDelete() {
            const id = this.history.user_id;
            store.dispatch('helper/handleChangeLoad');
            deletedApi(this.history._id)
            .then(function(response) {
                if (response != false){
                alert('Eliminado correctamente');
                store.state.admin.search = null;
                store.dispatch('admin/handleSearchId', id);
                store.dispatch('helper/handleChangeLoad');
                }else{
                    store.dispatch('helper/handleChangeLoad');
                    alert('Error al eliminar');
                }
            });
        },
        handleSubmitEdit() {
            const id = this.history.user_id;
            store.dispatch('admin/handleChangeEdit');
            store.dispatch('admin/handleEditableInfo', this.history);
        }
    }
}
</script>