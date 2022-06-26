
<template>

    <article class="bg-gradient-to-t from-gray-800 to-gray-600">
        <div class="flex flex-col justify-center items-center w-full h-full pt-5">
           <SelectCryto />

           <div class="w-[100rem] h-[2px] mt-4 bg-gray-800/75"></div>

           <div class="flex justify-start items-center w-3/5 h-8">
               <div class="flex flex-row justify-between items-center h-6 w-[500px] mt-2">
                   <h2 class="font-roboto text-lg">Exchange</h2>
                   <h2 class="font-roboto text-lg">Compra unit.</h2>
                   <h2 class="font-roboto text-lg">Venta unit.</h2>
               </div>
           </div>

           <div class="w-[100rem] h-[2px] mt-2 bg-gray-800/75"></div>

           <ListExchange />
        </div>

    </article>

    <MenuCompra v-if="this.$store.state.transaction.buyCheck"/>
    <MenuVenta v-if="this.$store.state.transaction.sellCheck"/>

</template>

<script setup>
import store from '../store';
import SelectCryto from '../components/ShopView/SelectCryto.vue';
import ListExchange from '../components/ShopView/ListExchange.vue';
import MenuCompra from '../components/ShopView/menuCompra.vue';
import MenuVenta from '../components/ShopView/menuVenta.vue';

store.dispatch('navbar/handleChangeShop');

</script>