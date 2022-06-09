
<template>
    <div class="flex flex-col
    bg-gray-900/75 rounded-lg shadow-lg shadow-black
    hover:bg-gray-800/75 hover:scale-95 hover:cursor-pointer hover:shadow-slate-900 active:bg-gray-700/75">

    <div class="flex justify-center items-center h-12 gap-3 ">

        <img :src="this.crypto.image" alt="logo crypto" class="w-8 h-8">
        <h3 class="text-white font-roboto text-xl">{{this.crypto.name}}</h3>
        <p :class='(this.crypto.price_change_percentage_24h >= 0)? "text-green-500" : "text-red-500" '>
            {{this.crypto.price_change_percentage_24h.toFixed(2)}}
        </p>

    </div>
        
    </div>
</template>

<script>
export default {
    props: {
        crypto: {
            type: Object,
            default: () => {},
            required: true,
        }
    },
    methods: {
    }
}
</script>