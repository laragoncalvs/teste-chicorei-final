<script setup>


</script>

<template>
    <div class="container">

        <div></div>
        <nav>
            <RouterLink to="/"><img src="./../assets/logo-chicorei.png" class="logo" /></RouterLink>
            <ul>
                <RouterLink :to="{ name: 'gallery' }">
                    <li>galeria de fotos</li>
                </RouterLink>
                <RouterLink to="/">
                    <li>produtos</li>
                </RouterLink>
            </ul>
        </nav>
        <RouterLink :to="{ name: 'checkout' }"><v-icon name="bi-handbag-fill" scale="2" /></RouterLink>

    </div>
</template>

<style  scoped>
.container {
    background-color: #f4f4f4;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 1;
}


nav {
    width: 1024px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

img {
    padding: 0.7rem 0;
    width: 85%
}

ul {
    display: flex;
    list-style: none;
}

li {
    margin-right: 40px;
    text-transform: uppercase;
}

@media (min-width: 767px) and (max-width: 1023px) {
    nav {
        justify-content: space-around;
    }
}

@media (max-width: 767px) {
    nav {
        justify-content: center;
    }

    li {
        display: none;
    }
}
</style>