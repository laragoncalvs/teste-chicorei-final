<script setup>

const menulist = [
    'camisetas',
    'acessórios',
    'quadros'

]


</script>


<template>
    <div class="container">
        <h1>Galeria de fotos</h1>
        <section>
            <span> Filtros:</span>
            <RouterLink v-for="menu in menulist" :to="{ name: 'images', params: { id: menu } }">
                <button> {{ menu }} </button>
            </RouterLink>
        </section>
        <RouterView />
    </div>
</template>



<style scoped>
.container {
    display: flex;
    flex-direction: column;
    margin-top: 7rem;
    align-items: center;
    margin-bottom: 50vh;
}

h1 {
    margin-bottom: 1rem;
}

section {
    display: flex;
    margin-bottom: 3rem;
}

span {
    margin-right: 1rem;
}

button {
    margin-right: 2rem;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    border: 2px solid #BECFDB;
    border-radius: 5px;
}

button:hover {
    background-color: #BECFDB;
    transition: 0.25s;
}
</style>