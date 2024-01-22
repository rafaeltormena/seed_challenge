<script setup>


import { onMounted, ref, reactive, computed } from 'vue'
import axios from 'axios'
import AppTable from './AppTable.vue'


const dataTables = reactive({
    equipments: {
        name: 'EQUIPAMENTOS',
        keys: ['ID', 'Nome'],
        data: [],
    },
    materials: {
        name: 'MATERIAIS',
        keys: ['ID', 'Nome'],
        data: [],
    },
    purchases: {
        name: 'COMPRAS',
        keys: ['ID', 'DataEntrega', 'Fornecedor', 'IDMaterial', 'NomeMaterial', 'Quantidade', 'CustoTotal'],
        data: [],
    },
    sales: {
        name: 'VENDAS',
        keys: ['ID', 'DataEntrega', 'Cliente', 'IDMaterial', 'NomeMaterial', 'Quantidade', 'CustoTotal'],
        data: [],
    },
    workers: {
        name: 'TRABALHADORES',
        keys: ['ID', 'Nome', 'Turno'],
        data: [],
    }
})

const rowCount = computed(() => {
    let resultRow = 0;
    for (let key in dataTables) {
        resultRow += dataTables[key].data.length;
    }
    return resultRow;
} )


let inputValue = ref()

    function search() {
        if (inputValue.value == null) inputValue.value = '';

        axios.get('http://localhost:3000/search', {
            params: {
                key: inputValue.value
            },
            headers: {
                'Content-Type': 'application/json'
            }})
            .then(function (response) {
                dataTables.equipments.data = response.data["equipments"];
                dataTables.materials.data = response.data["materials"];
                dataTables.purchases.data = response.data["purchase_orders"];
                dataTables.sales.data = response.data["sales_orders"];
                dataTables.workers.data = response.data["workforce"];
                console.log(response);
            })
            .catch(function (error) {
                alert("erro banco");
                console.error(error);
            })
            .finally(function () {
                // sempre será executado
            });
    }

    onMounted(() => {
        search()
    })
</script>

<template>
    <div>

        <div class="place-content-center input-group flex align-middle ">
            <input v-model="inputValue" type="text" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" placeholder="Realize sua busca" />
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-5" @click="search()">Pesquisar</button>
        </div>

        <div class="flex text-xs italic flex px-3 pt-9 justify-end">Total de resultados encontrados: {{rowCount }}</div>

        <AppTable v-for="dataTable in dataTables" :dataTable="dataTable" />

    </div>
</template>

<style scoped>

   

</style>
