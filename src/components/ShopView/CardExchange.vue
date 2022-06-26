<template>

    <div class="grid grid-cols-2 h-12 w-[80rem] p-2 
    bg-gray-500/75 rounded mb-2 ml-[200px] shadow-sm shadow-black">

        <div class="flex flex-row justify-between items-center">
            <h3 class="w-full text-left font-roboto uppercase">{{this.keyExchange}}</h3>
            <p class="w-full text-left font-roboto">$ {{this.$store.state.shop.exchanges[this.keyExchange].totalAsk}}</p>
            <p class="w-full text-left font-roboto">$ {{this.$store.state.shop.exchanges[this.keyExchange].totalBid}}</p>
        </div>

        <div class="flex flex-row gap-4 justify-end items-center">

            <button class="flex flex-row justify-center items-center w-28 
            bg-green-200 rounded shadow-sm shadow-gray-800 border border-black
            hover:bg-green-300
            active:bg-green-400"
            @click="this.handleClickBuy()">
                <img src="../../assets/shopping_logo.svg" alt="comprar" class="w-8 h-8">
                <p>Comprar</p>
            </button>

            <button class="flex flex-row justify-center items-center w-24 
            bg-red-200 rounded shadow-sm shadow-gray-800 border border-black
            hover:bg-red-300
            active:bg-red-400"
            @click="this.handleClickSell()">
                <img src="../../assets/sell_logo.svg" alt="vender" class="w-8 h-8">
                <p>Vender</p>
            </button>
            
        </div>

    </div>

</template>

<script>
import router from "../../router/router";
import store from "../../store";

export default {
    props: {
        keyExchange: {
            type: String,
            default: null,
            required: true,
        },
    },
    methods: {
        handleClickBuy() {
            if (store.state.profile.id){
                store.dispatch('transaction/handleChangeBuy', this.keyExchange);
            }else{
                router.push('/profile');
            }
        },
        handleClickSell() {
            if (store.state.profile.id){
                store.dispatch('transaction/handleChangeSell', this.keyExchange);
            }else {
                router.push('/profile');
            }
        },
    }
}

</script>

