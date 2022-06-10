
<template>

    <div class="flex flex-row justify-center items-center rounded">
        <div class="w-96 h-full">
            <select class="form-select appearance-none
            text-center
            block
            w-full
            px-3
            py-1.5
            text-base
            font-roboto
            text-gray-700
            bg-white bg-clip-padding bg-no-repeat
            rounded-l
            transition
            ease-in-out
            m-0
            hover:cursor-pointer" id="typeCrypto"
            @change="handleChange">
                <option :selected='this.$store.state.shop.type == "none"' value="none">Selecciona una crypto moneda</option>
                <option :selected='this.$store.state.shop.type == "btc"' value="btc">Bitcoin</option>
                <option :selected='this.$store.state.shop.type == "eth"' value="eth">Etherium</option>
                <option :selected='this.$store.state.shop.type == "usdt"' value="usdt">Tether</option>
                <option :selected='this.$store.state.shop.type == "usdc"' value="usdc">USD Coin</option>
                <option :selected='this.$store.state.shop.type == "bnb"' value="bnb">BNB</option>
                <option :selected='this.$store.state.shop.type == "ada"' value="ada">Cardano</option>
                <option :selected='this.$store.state.shop.type == "xrp"' value="xrp">XRP</option>
                <option :selected='this.$store.state.shop.type == "busd"' value="busd">Binance USD</option>
                <option :selected='this.$store.state.shop.type == "sol"' value="sol">Solana</option>
                <option :selected='this.$store.state.shop.type == "doge"' value="doge">Dogecoin</option>
            </select>
        </div>
        <button class="flex justify-center items-center bg-white w-8 h-full rounded-r
        hover:bg-gray-200
        active:bg-violet-300/75" @click="handleSubmit">
            <img src="../../assets/search_logo.svg" alt="search" class="w-6 h-6">
        </button>
    </div>

</template>

<script setup>import store from '../../store';


const handleChange = () => {
    const type = document.querySelector('#typeCrypto').value;
    store.dispatch('shop/handleChangeType', type);
}

const handleSubmit = () => {
    store.dispatch('shop/handleCheckedExchange')
}
</script>