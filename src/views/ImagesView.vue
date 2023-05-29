<script setup>

const props = defineProps([
    'id'
])
const imagesList = [
    {
        id: 'camisetas',
        src: 'https://chicorei.imgix.net/21844/1e7a6fc0-3536-11ed-bbc5-2bbc2abeed26.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top'
    },
    {
        id: 'camisetas',
        src: 'https://chicorei.imgix.net/8487/494240e1-28af-11ed-b984-17efb5f107ae.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top'
    },
    {
        id: 'camisetas',
        src: 'https://chicorei.imgix.net/49545/4fd602b4-ded1-11ed-89ac-73ec7dafb90e.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top'
    },
    {
        id: 'camisetas',
        src: 'https://chicorei.imgix.net/16079/81cf0f30-3924-11ed-a3cf-7b5fd5fd4a46.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top'
    },
    {
        id: 'camisetas',
        src: 'https://chicorei.imgix.net/14063/d0b8fa61-328b-11ed-90e9-bd81cc5fbf93.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top'
    },
    {
        id: 'camisetas',
        src: 'https://chicorei.imgix.net/21887/53f25143-fdff-11ec-b93b-ab25702b61ee.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top'
    },
    {
        id: 'acessórios',
        src: 'https://chicorei.imgix.net/18581/d2820a90-3664-11ec-b7ef-87b47395cb06.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top'
    },
    {
        id: 'acessórios',
        src: 'https://chicorei.imgix.net/11930/35949901-df2f-11eb-870e-e9d92b289c20.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top'
    },
    {
        id: 'acessórios',
        src: 'https://chicorei.imgix.net/15409/5be73ff0-3c55-11ea-a33a-17219a39e2e4.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top'
    },
    {
        id: 'acessórios',
        src: 'https://chicorei.imgix.net/57317/41fe6d20-ef62-11ed-8f28-4b891abd1747.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top'
    },
    {
        id: 'acessórios',
        src: 'https://chicorei.imgix.net/7309/a3b73e71-df38-11eb-870e-e9d92b289c20.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top'
    },
    {
        id: 'quadros',
        src: 'https://chicorei.imgix.net/51073/b5449500-c2a0-11ed-925c-bfd597bacd26.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top'
    },
    {
        id: 'quadros',
        src: 'https://chicorei.imgix.net/21392/1b38f820-6437-11ec-be3e-a7527c92ba75.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top'
    },
    {
        id: 'quadros',
        src: 'https://chicorei.imgix.net/51075/bded6100-c2a0-11ed-9d2a-adc65bbac71d.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top'
    },
    {
        id: 'quadros',
        src: 'https://chicorei.imgix.net/36034/54f9c6e0-816c-11ed-b291-4397a03ac568.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top'
    },
    {
        id: 'quadros',
        src: 'https://chicorei.imgix.net/4637/29469ee0-fb21-11ed-8fba-a912a702a5d6.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top'
    },
    {
        id: 'quadros',
        src: 'https://chicorei.imgix.net/20564/8f3f8690-09d2-11ec-a681-b37d56d9f952.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top'
    }

]




</script>

<template>
    <div>
        <img v-for="produto in imagesList.filter((p) => p.id == id)" :src="produto.src" />
    </div>
</template>



<style  scoped>
div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 1130px;
    column-gap: 1rem;
    row-gap: 2rem;
}

img {
    width: 100%;
}
</style>