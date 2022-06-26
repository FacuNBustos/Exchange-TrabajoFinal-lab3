
<template>
    <div class="flex justify-center items-center fixed w-full h-full bg-white/50">
        <div class="flex flex-col items-center
        bg-[#fefefe] w-[700px] h-[400px] rounded-lg border-2 border-gray-700 shadow-sm shadow-gray-800 pt-2">
            <h2 class="font-roboto text-2xl">Menu de venta</h2>
            <div class="flex flex-col w-[600px] h-20 mt-2 pl-3 border-2 border-gray-300 rounded">

            <p class="font-roboto text-gray-800">Datos transaccion</p>

            <div class="flex flex-row justify-center items-center h-10 gap-[50px]">
                <p><span class="font-roboto text-gray-800/75 mr-2">ID:</span>{{this.$store.state.profile.id.toUpperCase()}}</p>
                <p><span class="font-roboto text-gray-800/75 mr-1">FECHA:</span> {{new Date(Date.now()).toLocaleDateString()}}</p>
            </div>
            </div>

            <div class="flex flex-col w-[600px] h-[300px] mt-2 pl-3 border-2 border-gray-300 rounded">

                <p class="font-roboto">Venta</p>

                <div class="flex justify-center items-center w-full h-8 gap-2 mt-3 mb-2">
                        <input type="text" id="quantity" class="h-8 w-[200px] border-2 text-center" placeholder="Cantidad de monedas">
                        <button class="h-8 w-20 rounded bg-blue-200 font-roboto" @click="handleSubmitCalculate">
                            Calcular
                        </button>
                    </div>
                <div class="flex flex-col justify-center items-center mt-2">
                    <div class="flex justify-between items-center w-[450px]">
                        <p><span class="font-roboto text-gray-800/75 mr-2">CANTIDAD DISPONIBLE:</span>{{cantidadCrypto()}}</p>
                        <p><span class="font-roboto text-gray-800/75 mr-1">MONEDA:</span> {{this.$store.state.transaction.type.toUpperCase()}}</p>
                    </div>
                    <div class="flex justify-between items-center w-[450px]">
                        <p><span class="font-roboto text-gray-800/75 mr-2">EXCHANGE:</span>{{this.$store.state.transaction.exchange.toUpperCase()}}</p>
                        <p><span class="font-roboto text-gray-800/75 mr-1">PRECIO:</span>$ {{this.$store.state.transaction.price}}</p>
                    </div>
                    <div class="flex justify-between items-center w-[450px]">
                        <p><span class="font-roboto text-gray-800/75 mr-1">TIPO:</span>VENTA</p>
                    </div>
                    
                    <div class="flex justify-between items-center w-[450px]" v-if="this.$store.state.transaction.cost">
                        <p><span class="font-roboto text-gray-800/75 mr-2">CANTIDAD:</span>{{this.$store.state.transaction.quantity}} {{this.$store.state.transaction.type}}</p>
                        <p><span class="font-roboto text-gray-800/75 mr-1">GANANCIA:</span>$ {{this.$store.state.transaction.cost}}</p>
                    </div>
                </div>

            </div>
            
            <div class="flex justify-center items-center h-[100px] gap-[30px]">
                <button class="bg-blue-800 h-8 w-24 rounded shadow shadow-black font-roboto text-gray-300
                hover:bg-blue-700
                active:bg-blue-700/75"
                @click="handleSubmitSell">
                    VENDER
                </button>
                <button class="bg-red-800 h-8 w-24 rounded shadow shadow-black font-roboto text-gray-300
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
import postSellApi from '../../services/postSellApi.service';
import store from '../../store';

const handleSubmitCalculate = () => {
    const value = document.querySelector('#quantity').value;
    store.dispatch('transaction/handleChangeQuantity', value);
};

const handleClickCancel = () => {
    store.dispatch('transaction/handleCancelTransaction');
};

const handleSubmitSell = async () => {
    if (cantidadCrypto() - store.state.transaction.quantity >= 0 && store.state.transaction.quantity > 0){
        store.dispatch('helper/handleChangeLoad');
        const response = await postSellApi();
        if (response){
            store.dispatch('helper/handleChangeAlertMessage', 'Venta realizada con exito.');
            store.dispatch('helper/handleChangeAlert');
            store.dispatch('profile/rechargeId');
            store.dispatch('helper/handleChangeLoad');
            store.dispatch('transaction/handleCancelTransaction');
        }else {
            store.dispatch('helper/handleChangeAlertMessage', 'Ocurrio un error en la venta.');
            store.dispatch('helper/handleChangeAlert');
            store.dispatch('helper/handleChangeLoad');
        }
    }else {
        store.dispatch('helper/handleChangeAlertMessage', 'No es posible realizar la venta.');
        store.dispatch('helper/handleChangeAlert');
    }
};

const cantidadCrypto = () => {
    let value = store.state.profile.distribution[store.state.transaction.type];
    if (value){
        return value.quantityPurchase - value.quantitySale;
    }
    return 0;
};

</script>