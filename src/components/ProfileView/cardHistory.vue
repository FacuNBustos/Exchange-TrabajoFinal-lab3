
<template>
    <div class="flex flex-row items-center w-full h-12 bg-gray-200 rounded mt-1 pl-6 p-2 gap-x-4">
        <h3 class="text-roboto text-black"><span class="text-gray-800 mr-1">Tipo:</span> {{(this.history.action == 'purchase')? 'Compra' : 'Venta'}}</h3>
        <h3 class="text-roboto text-black"><span class="text-gray-800 mr-1">Moneda:</span> {{this.history.crypto_code.toUpperCase()}}</h3>
        <h3 class="text-roboto text-black"><span class="text-gray-800 mr-1">Cantidad:</span> {{this.history.crypto_amount}} unid.</h3>
        <h3 class="text-roboto text-black"><span class="text-gray-800 mr-1">Monto de transaccion:</span> ${{this.history.money}}</h3>
        <h3 class="text-roboto text-black"><span class="text-gray-800 mr-1">Fecha:</span> {{new Date(this.history.datetime).toLocaleString()}}</h3>
    </div>
</template>

<script>
export default {
    props: {
        history: {
            type: Object,
            default: () => {},
            required: true
        }
    }
}
</script>