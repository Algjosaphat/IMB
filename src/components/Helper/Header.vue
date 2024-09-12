<template>
  <header 
    class="fixed w-full top-0 left-0 z-50 bg-white text-black shadow-lg transition-colors duration-500"> 

    <div class="container mx-auto flex items-center justify-between py-1 px-8">
      <!-- Logo -->
      <div class="text-2xl font-bold flex items-center">
        <router-link to="/" class="hover:text-gray-300 flex items-center">
          <img :src="currentLogo" alt="Logo" class="h-12 w-auto rounded-full mr-2"/>
        </router-link>
      </div>

      <!-- Menu de navigation -->
      <nav class="hidden md:flex">
        <ul class="flex space-x-6">
          <li v-for="(link, index) in links" :key="index">
            <router-link 
              :to="link.to" 
              class="block lg:inline-block m-5 nav-link" 
              :class="{ 'active-link': isActive(link.to) }">
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </nav>

      <!-- Menu utilisateur ou connexion -->
      <div class="hidden md:flex items-center relative">
        <div v-if="userLoggedIn">
          <button @click="toggleDropdown" class="flex items-center focus:outline-none">
            <span class="mr-2 text-black">
              {{ userName }}
            </span>
            <svg 
              class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>

          <!-- Menu déroulant pour l'utilisateur -->
          <div v-show="dropdownOpen" class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
            <router-link 
              to="/profile" 
              class="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Profil
            </router-link>
            <router-link 
              to="/settings" 
              class="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Paramètres
            </router-link>
            <button 
              @click="logout" 
              class="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
              Déconnexion
            </button>
          </div>
        </div>
        <router-link 
          v-if="!userLoggedIn"
          to="/login" 
          class="bg-[#96BB00] text-black py-2 px-4 rounded-lg shadow-md hover:bg-[#15763A] hover:text-white transition-transform transform hover:scale-105">
          Connexion
        </router-link>
      </div>

      <!-- Menu hamburger pour petits écrans -->
      <button @click="toggleMenu" class="md:hidden text-black focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" style="color: black;"/>
        </svg>
      </button>
    </div>

    <!-- Off-canvas menu -->
    <transition name="slide">
      <div v-if="isMenuOpen" class="fixed inset-0 z-50 bg-black bg-opacity-75 flex justify-end">
        <div @click="toggleMenu" class="absolute inset-0"></div>

        <div class="bg-white w-64 h-full shadow-lg relative z-50">
          <button @click="toggleMenu" class="absolute top-4 right-4 text-gray-500 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> 
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <h2 class="text-center font-bold text-lg my-4 text-black">Menu</h2>

          <nav class="mt-2 p-6">
            <ul class="space-y-4">
              <li>
                <router-link @click="toggleMenu" to="/" class="flex justify-center block text-lg text-gray-800 hover:text-gray-600">Accueil</router-link>
              </li>
              <li>
                <router-link @click="toggleMenu" to="/properties" class="flex justify-center block text-lg text-gray-800 hover:text-gray-600">Propriétés</router-link>
              </li>
              <li>
                <router-link @click="toggleMenu" to="/about" class="flex justify-center block text-lg text-gray-800 hover:text-gray-600">À propos</router-link>
              </li>
              <li>
                <router-link @click="toggleMenu" to="/contact" class="flex justify-center block text-lg text-gray-800 hover:text-gray-600">Contact</router-link>
              </li>
            </ul>

            <router-link 
              v-if="!userLoggedIn"
              to="/login" 
              class="flex justify-center block text-center bg-[#96BB00] text-black m-2 py-2 px-4 rounded-lg shadow-md hover:bg-[#15763A] hover:text-white transition-transform transform hover:scale-105">
              Connexion
            </router-link>
            <router-link 
              v-if="userLoggedIn"
              to="/profile" 
              class="flex justify-center block text-center bg-[#96BB00] text-black m-2 py-2 px-4 rounded-lg shadow-md hover:bg-[#15763A] hover:text-white transition-transform transform hover:scale-105">
              Profil
            </router-link>
            <button 
              v-if="userLoggedIn"
              @click="logout" 
              class="flex justify-center block w-full text-center bg-[#96BB00] text-black m-2 py-2 px-4 rounded-lg shadow-md hover:bg-[#15763A] hover:text-white transition-transform transform hover:scale-105">
              Déconnexion
            </button>
          </nav>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import logo1 from '../../assets/logo1.png'; // Logo par défaut
import logo2 from '../../assets/logo2.png'; // Logo après le scroll

const isMenuOpen = ref(false);
const userLoggedIn = ref(false);
const userName = ref('Jean Dupont');
const dropdownOpen = ref(false);
const currentLogo = ref(logo1);
const isScrolled = ref(false);
const isHome = ref(false);
const heroSection = ref(null);


// Liens de navigation
const links = [
  { name: 'Accueil', to: '/' },
  { name: 'Propriétés', to: '/properties' },
  { name: 'À propos', to: '/about' },
  { name: 'Contact', to: '/contact' },
];

// Fonction pour gérer le menu
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value;
}

function logout() {
  userLoggedIn.value = false;
}

// Changement du logo en fonction du scroll
const handleScroll = () => {
  if (window.scrollY > 700) {
    currentLogo.value = logo2;
  } else {
    currentLogo.value = logo1;
  }
};

// Ajouter et retirer l'écouteur d'événement pour le scroll
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const route = useRoute();

function isActive(route) {
  return route.path === route;
}
</script>

<style scoped>
body {
  margin-top: 70px;
}

.active-link::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -3px;
  height: 3px;
  background-color: #04ca15;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -3px;
  height: 3px;
  background-color: #1bca04;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease-out;
}

.nav-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.nav-link {
  transition: color 0.3s ease-out;
}

</style>
