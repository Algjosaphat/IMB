<!-- Header.vue -->

<template>
  <header class="shadow-2xl fixed w-full top-5 rounded-full left-0 z-50  bg-white">
    <div class="container mx-auto flex items-center justify-between py-4 px-6">
      <!-- Logo -->
      <div class="text-2xl font-bold flex items-center gap-2">
        <img :src="LOGO" alt="Logo" class="rounded-full" width="40" height="40" />
        <router-link to="/" class=" mt- hidden md:block">MonImmobilier</router-link>
      </div>

      <!-- Menu de navigation -->
      <nav class="hidden lg:flex">
        <ul class="flex space-x-6">
          <li>
            <router-link to="/" class="transition-colors duration-300 font-bold hover:border-b-green-600 hover:border-b-2 ">Accueil</router-link>
          </li>
          <li>
            <router-link to="/properties" class="transition-colors duration-300 font-bold hover:border-b-green-600 hover:border-b-2 ">Propriétés</router-link>
          </li>
          <li>
            <router-link to="/about" class="transition-colors duration-300 font-bold hover:border-b-green-600 hover:border-b-2 ">À propos</router-link>
          </li>
          <li>
            <router-link to="/contact" class="transition-colors duration-300 font-bold hover:border-b-green-600 hover:border-b-2 ">Contact</router-link>
          </li>
        </ul>
      </nav>

      <!-- Bouton de connexion -->
      <div class="hidden lg:flex">
        <router-link to="/login" class="bg-green-600 text-white py-2 px-10 rounded-full shadow-md transition-transform transform hover:scale-105">
          Se Connecter <font-awesome-icon :icon="['fas', 'user']" /> 
        </router-link>
      </div>

      <!-- Menu hamburger pour petits écrans -->
      <button @click="toggleMenu" class="lg:hidden flex items-center text-gray-600 hover:text-gray-800">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>

    <!-- Menu mobile -->
    <div v-if="isMenuOpen" class="lg:hidden bg-white shadow-md mt-2 flex justify-center">
  <nav class="flex flex-col space-y-2 py-4 px-6 w-full">
    <router-link to="/" class="block text-center py-2 text-gray-700 hover:bg-gray-100 rounded-md">Accueil</router-link>
    <router-link to="/properties" class="block text-center py-2 text-gray-700 hover:bg-gray-100 rounded-md">Propriétés</router-link>
    <router-link to="/about" class="block text-center py-2 text-gray-700 hover:bg-gray-100 rounded-md">À propos</router-link>
    <router-link to="/contact" class="block text-center py-2 text-gray-700 hover:bg-gray-100 rounded-md">Contact</router-link>
    <router-link to="/login" class="block text-center bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700">Connexion</router-link>
  </nav>
</div>

  </header>
</template>

<script setup>
import { ref } from 'vue';
import LOGO from '../../assets/btp_immobilier.jpeg';

// Déclaration de la variable et de la fonction
const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
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
