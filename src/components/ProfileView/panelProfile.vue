<template>

   <div class="flex justify-center items-center w-full h-full p-3">
       <div class="flex flex-col items-center w-[95%] h-[95%]">
           
           <div class="flex justify-between w-full h-16">
               <div class="flex flex-row items-center h-full">
                   <img src="../../assets/profile-svgrepo-com.svg" class="h-14 mr-3 ml-2">
                   <h2 class="text-roboto text-xl text-gray-200">
                       {{convertir($store.state.profile.id.toUpperCase())}}
                   </h2>
               </div>
                
               <div class="flex h-full items-center mr-2">
                   <label class="text-roboto text-lg text-gray-200">
                       {{new Date().toString()}}
                   </label>
               </div>
           </div>

           <div class="w-full border border-gray-400 rounded m-2"></div>

           <div class="flex flex-row w-full h-80 p-2 gap-2">
               <div class="flex flex-row w-[50%]">

                   <div class="flex flex-col justify-center items-center w-[5%] text-roboto text-2xl text-gray-200">
                       <h2>C</h2>
                       <h2>A</h2>
                       <h2>R</h2>
                       <h2>T</h2>
                       <h2>E</h2>
                       <h2>R</h2>
                       <h2>A</h2>
                   </div>

                   <div class="flex-grow overflow-auto pl-2 pr-3 w-[95%] h-[99%] p-1 border-r">
                       
                       <div class="flex justify-center items-center w-full h-[90%]">
                           <table class="table-auto text-center w-[80%] text-roboto text-lg text-gray-300">
                                <thead class="border-b">
                                    <tr>
                                        <th>Moneda</th>
                                        <th>Cantidad</th>
                                        <th>Precio total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="elem in $store.state.profile.distribution">
                                        <td v-if="elem.quantityPurchase - elem.quantitySale > 0">{{elem.code.toUpperCase()}}</td>
                                        <td v-if="elem.quantityPurchase - elem.quantitySale > 0">{{elem.quantityPurchase - elem.quantitySale}}</td>
                                        <td v-if="elem.quantityPurchase - elem.quantitySale > 0">${{elem.valued.toFixed(2)}}</td>
                                    </tr>
                                </tbody>
                            </table>
                       </div>

                   </div>

               </div>
               <div class="flex flex-row w-[50%]">
                   
                   <div class="flex-grow overflow-auto pl-2 pr-3 text-center w-[95%] h-[99%] p-1">
                       
                       <div class="flex justify-center items-center w-full h-[90%]">
                           <table class="table-auto text-center w-[80%] text-roboto text-lg text-gray-300">
                                <thead class="border-b">
                                    <tr>
                                        <th>Moneda</th>
                                        <th>Ganancia / Perdida</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="elem in $store.state.profile.distribution">
                                        <td>{{elem.code.toUpperCase()}}</td>
                                        <td>$ {{elem.profit.toFixed(2)}}</td>
                                    </tr>
                                </tbody>
                            </table>
                       </div>

                   </div>

                   <div class="flex flex-col justify-center items-center w-[5%] text-roboto text-2xl text-gray-200">
                       <h2>E</h2>
                       <h2>S</h2>
                       <h2>T</h2>
                       <h2>A</h2>
                       <h2>D</h2>
                       <h2>O</h2>
                   </div>

               </div>
           </div>

           <div class="w-full border border-gray-400 rounded m-2"></div>

           <div class="w-full h-[420px] pl-2 pr-2 pb-2 border rounded">
               <div class="H-[10%] items-center justify-center text-center p-1">
                   <h2 class="text-roboto text-2xl text-gray-200">HISTORIAL</h2>
               </div>
               <div class="flex-grow overflow-auto pl-2 pr-3 text-center w-full h-[90%] p-1">
                   
                <CardHistory v-for="elem in $store.state.profile.history" :history='elem'/>
                   

               </div>

           </div>

       </div>
   </div>

</template>

<script setup>
import CardHistory from './cardHistory.vue';

const convertir = (id) => {
    return '*'.repeat(id.slice(0,-4).length) + id.slice(-4).toUpperCase();
}

</script>
