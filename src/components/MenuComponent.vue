<script setup>
import { reactive } from 'vue';
const menulist = [
    'camisetas',
    'acessórios',
    'quadros'
]

const state = reactive({ isactive: false })

function handleMenu() {
    state.isactive = !state.isactive
}


</script>

<template>
    <div class="container">

        <button @click="handleMenu" class="menu-button">
            <v-icon name="hi-menu" scale="2" />
        </button>
        <div class='menu' v-if="state.isactive">
            <div class="menu-wrapper">

                <img src="../assets/logo-chicorei.png" />
                <button @click="handleMenu">
                    <v-icon name="io-close" scale="2" />
                </button>

            </div>
            <RouterLink to="/">
                <h2>PRODUTOS</h2>
            </RouterLink>
            <h2>GALERIA DE FOTOS</h2>
            <nav>
                <ul @click="handleMenu">
                    <RouterLink :to="{ name: 'images', params: { id: menu } }" v-for="menu in menulist">
                        <li>{{ menu }}</li>
                    </RouterLink>
                    <RouterLink to="/">
                        <li>produtos</li>
                    </RouterLink>
                </ul>
            </nav>
        </div>
        <div v-else="state.isactive" class="close-menu"></div>
    </div>
</template>



<style  scoped>
.container {
    position: fixed;
}

.menu-button {
    margin: 1.5vh;
}

.menu {
    top: 0%;
    position: fixed;
    width: 20%;
    background-color: #fdfdfd;
    box-shadow: 1px 0px 4px rgba(0, 0, 0, 0.25);
    animation: go-back 0.8s ease-out;
    height: 100%;

}

.menu-wrapper {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    margin-bottom: 1rem;
}

img {
    width: 45%;
}

ul {
    list-style: none;
}

li {
    margin-right: 40px;
    text-transform: uppercase;
}

h2 {
    margin: 0 0 0 1.5rem;
}

@keyframes go-back {
    from {
        transform: translateX(-80%);
    }

    to {
        transform: translateX(0);
    }
}

@media (max-width: 767px) {
    .menu {
        width: 80%;
    }
}</style>