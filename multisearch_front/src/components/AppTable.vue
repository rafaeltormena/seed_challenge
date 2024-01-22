<script setup>
    import { onMounted, ref, reactive } from 'vue'
    import axios from 'axios'

    defineProps({
        dataTable: {
            type: Object,
            required: true
        }
    })
</script>

<template>


        <div class="mt-8 flow-root">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-300">
                            <caption>
                                <div class="flex justify-between">
                                    <div class="text-lg whitespace-nowrap px-3 py-4 font-medium">{{ dataTable.name }}</div>
                                    <div class="text-xs italic flex px-3 pt-9">({{ dataTable.data.length }} resultados encontrados)</div>
                                </div>
                            </caption>
                            <thead class="bg-gray-50">
                                <tr>

                                    <th v-for="keys in dataTable.keys" scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">{{ keys}}</th>


                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 bg-white">
                                <tr v-for="row in dataTable.data">
                                    <td v-for="col in row" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ col }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    <!--MATERIAIS-->
    <!--<div class="mt-8 flow-root">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-300">
                        <caption>
                            <div class="flex justify-between">
                                <div class="text-lg whitespace-nowrap px-3 py-4 font-medium">MATERIAIS</div>
                                <div class="text-xs italic flex px-3 pt-9">({{ materials.length  }} resultados encontrados)</div>
                            </div>
                        </caption>
                        <thead class="bg-gray-50">
                            <tr>
                                <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">ID</th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">NOME</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 bg-white">
                            <tr v-for="material in materials" :key="material.MaterialID">
                                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ material.MaterialID }}</td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ material.MaterialName }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>-->
    <!--COMPRAS-->
    <!--<div class="mt-8 flow-root">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-300">
                        <caption>
                            <div class="flex justify-between">
                                <div class="text-lg whitespace-nowrap px-3 py-4 font-medium">COMPRAS</div>
                                <div class="text-xs italic flex px-3 pt-9">({{ purchases.length  }} resultados encontrados)</div>
                            </div>
                        </caption>
                        <thead class="bg-gray-50">
                            <tr>
                                <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">ID</th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">DATA ENTREGA</th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">FORNECEDOR</th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">ID MATERIAL</th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">NOME MATERIAL</th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">QUANTIDADE</th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">CUSTO TOTAL</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 bg-white">
                            <tr v-for="purchase in purchases" :key="purchase.MaterialID">
                                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ purchase.PurchaseOrderID }}</td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ purchase.DeliveryDate }}</td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ purchase.Supplier }}</td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ purchase.MaterialID }}</td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ purchase.MaterialName }}</td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ purchase.Quantity }}</td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ purchase.TotalCost }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>-->
    <!--</div>-->
</template>

<style scoped>
</style>
