<!-- Header.vue -->

<template>
  <header class="bg-white shadow-md fixed w-full top-0 left-0 z-50">
    <div class="container mx-auto flex items-center justify-between py-2 px-6">
      <!-- Logo -->
      <div class="text-2xl font-bold flex items-center">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAghJREFUaEPtmLsuRUEUhr8TOlEpdBoSgkbhEqER4gVcGh0dtUovolHQaFXCC7iEQiKh0SAhFCQKhVIn4czJTsjJnj23NY4TM/Watf5v1sz8s3eJOh+lOtdPAqh1B2N2YBTYBj6BBeA8BmwsgD7gDGjKRL8DCuhKGiIGQDtwAbRUiX0DBoFHSQhpgFbgEmjTiHwGBoBXKQhJgOZsn/caxF0DQ4DaVsFDCqAROAVGLBWdAJPAh2W8NkwCQOXYBaYdxewBs9kt5Tj1O1wCYBNY9FSwBSx5zq1MCwVYBtZCBAAqx7pvjhCAOWDHt3DVvBlAbSnn4QswBhwCDc4V8yeow6wOtTrcTsMHoNplnQoWBHu5tSuAzmWlIJzd2gXA5LJSEE5ubQtg67JSENZubQPg6rJSEFZubQLwdVkpCKNbmwBCXFYKotCtiwAkXFYKQuvWOgBJl5WCyHXrPIBx4EiqqnCeifKT/fhnzjyAp4IvKmE9zunugC4TwEP5kaYc9y+Oe6DTBDAMbAD9f4zgBZgHDkwAOt3q/85vDtMVX9FiFZSpTgCO7bNaXKug1AHHpc/CrRbXKui/dcC0KLaXgSlPtFvIVDgBxDay1IFa30KpA6kDGuO8AboNpnpb/knbY4iRyuPsA1PAKtChEai+llaAfQOAVB5nAL8XTeRZphsjcvnw9AkgfA3DMnwBks9fMcK8lLcAAAAASUVORK5CYII="/>
        <router-link to="/" class="hover:text-gray-300 mt-3 hidden md:block">MonImmobilier</router-link>
      </div>

      <!-- Menu de navigation -->
      <nav class="hidden md:flex">
        <ul class="flex space-x-6">
          <li>
            <router-link to="/" class="text-gray-600 hover:text-yellow-600 transition-colors duration-100">Accueil</router-link>
          </li>
          <li>
            <router-link to="/properties" class="text-gray-600 hover:text-yellow-600 transition-colors duration-100">Propriétés</router-link>
          </li>
          <li>
            <router-link to="/about" class="text-gray-600 hover:text-yellow-600 transition-colors duration-100">À propos</router-link>
          </li>
          <li>
            <router-link to="/contact" class="text-gray-600 hover:text-yellow-600 transition-colors duration-100">Contact</router-link>
          </li>
        </ul>
      </nav>

      <!-- Bouton de connexion -->
      <div class="hidden md:flex">
        <router-link to="/login" class="bg-yellow-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-yellow-700 transition-transform transform hover:scale-105">
          Connexion
        </router-link>
      </div>

      <!-- Menu hamburger pour petits écrans -->
      <button @click="toggleMenu" class="md:hidden flex items-center text-gray-600 hover:text-gray-800">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>

    <!-- Menu mobile -->
    <div v-if="isMenuOpen" class="md:hidden bg-white shadow-md mt-2 flex justify-center">
      <nav class="flex flex-col space-y-2 py-4 px-6 flex">
        <router-link to="/" class="text-gray-600 hover:text-gray-800 flex justify-center">Accueil</router-link>
        <router-link to="/properties" class="text-gray-600 hover:text-gray-800 flex justify-center">Propriétés</router-link>
        <router-link to="/about" class="text-gray-600 hover:text-gray-800 flex justify-center">À propos</router-link>
        <router-link to="/contact" class="text-gray-600 hover:text-gray-800 flex justify-center">Contact</router-link>
        <router-link to="/login" class="block text-center bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg font-semibold flex justify-center">
          Connexion
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style scoped>
/* Ajoute une marge en haut pour éviter que le contenu ne soit masqué par le header */
body {
  padding-top: 4rem; /* Ajuste la valeur selon la hauteur du header */
}
</style>

<script>
export default {
  name: 'Header'
};
</script>

<style scoped>
header {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

nav ul {
  display: flex;
  gap: 1.5rem;
}

nav ul li a {
  font-size: 1rem;
  font-weight: 500;
}
</style>
