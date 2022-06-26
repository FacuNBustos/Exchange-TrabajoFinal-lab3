
<template>
    <div class="flex justify-center items-center w-full h-full fixed bg-white/50">
        <div class="flex flex-col items-center w-[700px] h-[350px] pt-2
        bg-[#fefefe] rounded-lg border-2 border-gray-700 shadow-sm shadow-gray-800">
            <h2 class="font-roboto text-2xl">Menu de compra</h2>
            <div class="flex flex-col w-[600px] h-20 mt-2 pl-3 border-2 border-gray-300 rounded">

            <p class="font-roboto text-gray-800">Datos transaccion</p>

            <div class="flex flex-row justify-center items-center h-10 gap-[50px]">
                <p><span class="font-roboto text-gray-800/75 mr-2">ID:</span>{{this.$store.state.profile.id.toUpperCase()}}</p>
                <p><span class="font-roboto text-gray-800/75 mr-1">FECHA:</span> {{new Date(Date.now()).toLocaleDateString()}}</p>
            </div>
            </div>

            <div class="flex flex-col w-[600px] h-[10rem] mt-2 pl-3 border-2 border-gray-300 rounded">
                <p class="font-roboto">Compra</p>

                <div class="flex flex-col justify-center w-full h-[300px]">

                    <div class="flex justify-center items-center w-full h-8 gap-2">
                        <input type="text" id="quantity" class="h-8 w-[200px] border-2 text-center" placeholder="Cantidad de monedas">
                        <button class="h-8 w-20 rounded bg-blue-200 font-roboto" @click="handleSubmitCalculate">
                            Calcular
                        </button>
                    </div>

                    <div class="flex flex-col justify-center items-center mt-2">
                        <div class="flex justify-between items-center w-[450px]">
                            <p><span class="font-roboto text-gray-800/75 mr-2">EXCHANGE:</span>{{this.$store.state.transaction.exchange.toUpperCase()}}</p>
                            <p><span class="font-roboto text-gray-800/75 mr-1">MONEDA:</span> {{this.$store.state.transaction.type.toUpperCase()}}</p>
                        </div>
                        <div class="flex justify-between items-center w-[450px]">
                            <p><span class="font-roboto text-gray-800/75 mr-2">PRECIO:</span>$ {{this.$store.state.transaction.price}}</p>
                            <p><span class="font-roboto text-gray-800/75 mr-1">TIPO:</span>COMPRA</p>                
                        </div>
                        <div class="flex justify-between items-center w-[450px]" v-if="this.$store.state.transaction.cost">
                            <p><span class="font-roboto text-gray-800/75 mr-2">CANTIDAD:</span>{{this.$store.state.transaction.quantity}} {{this.$store.state.transaction.type}}</p>
                            <p><span class="font-roboto text-gray-800/75 mr-1">COSTO:</span>$ {{this.$store.state.transaction.cost}}</p>
                        </div>
                    </div>

                </div>

            </div>

            <div class="flex justify-center items-center h-full gap-[30px]">
                <button class="h-8 w-24 
                bg-blue-800 rounded shadow shadow-black font-roboto text-gray-300
                hover:bg-blue-700
                active:bg-blue-700/75"
                @click="handleSubmitBuy">
                    COMPRAR
                </button>

                <button class="h-8 w-24 
                bg-red-800 rounded shadow shadow-black font-roboto text-gray-300
                hover:bg-red-700
                active:bg-red-700/75"
                @click="handleClickCancel">
                    CANCELAR
                </button>
            </div>

        </div>

    </div>

</template>

<script setup>
import postBuyApi from '../../services/postBuyApi.service';
import store from '../../store';


const handleClickCancel = () => {
    store.dispatch('transaction/handleCancelTransaction');
}

const handleSubmitCalculate = () => {
    const value = document.querySelector('#quantity').value;
    store.dispatch('transaction/handleChangeQuantity', value);
}

const handleSubmitBuy = async () => {
    if (store.state.transaction.quantity > 0){
        store.dispatch('helper/handleChangeLoad');
        const response = await postBuyApi();
        if (response){
            store.dispatch('helper/handleChangeAlertMessage', 'Compra realizada con exito.');
            store.dispatch('helper/handleChangeAlert');
            store.dispatch('profile/rechargeId');
            store.dispatch('transaction/handleCancelTransaction');
            store.dispatch('helper/handleChangeLoad');
        }else {
            store.dispatch('helper/handleChangeAlertMessage', 'Ocurrio un error en la compra.');
            store.dispatch('helper/handleChangeAlert');
            store.dispatch('helper/handleChangeLoad');
        }
    }else {
        store.dispatch('helper/handleChangeAlertMessage', 'No se puede realizar esta compra.');
        store.dispatch('helper/handleChangeAlert');
    }
}
</script>