<script setup>
import { RouterView, RouterLink } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue';
import MenuComponent from './components/MenuComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

</script>

<template>
  <header>
    <MenuComponent />
    <div class="menu">
      <HeaderComponent />
    </div>
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <FooterComponent />
  </footer>
</template>

<style scoped>
header {
  position: fixed;
  width: 100%;
}

main {
  display: flex;
  justify-content: center;

}
</style>
