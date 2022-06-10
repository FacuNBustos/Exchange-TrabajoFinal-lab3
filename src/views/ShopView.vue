
<template>
    <article class="bg-gradient-to-t from-gray-800 to-gray-600">
        <div class="w-full h-full flex flex-col justify-center items-center pt-5">
           <SelectCryto />
           <div class="w-[100rem] h-[2px] bg-gray-800/75 mt-4"></div>
           <div class="flex justify-start items-center w-3/5 h-8">
               <div class="flex flex-row justify-between items-center h-6 w-[500px] mt-2">
                   <h2 class="font-roboto text-lg">Exchange</h2>
                   <h2 class="font-roboto text-lg">Compra unit.</h2>
                   <h2 class="font-roboto text-lg">Venta unit.</h2>
               </div>
           </div>
           <div class="w-[100rem] h-[2px] bg-gray-800/75 mt-2"></div>
           <ListExchange />
        </div>
    </article>
</template>

<script setup>
import store from '../store';
import SelectCryto from '../components/ShopView/SelectCryto.vue';
import ListExchange from '../components/ShopView/ListExchange.vue';
store.dispatch('navbar/handleChangeShop');


</script>