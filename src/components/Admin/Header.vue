<!-- src/components/Admin/Header.vue -->
<template>
    <header class="shadow-2xl w-full left-0 z-50 bg-white py-3">
      <div class="container mx-auto flex items-center justify-between m-2">
        <!-- Logo pour l'interface admin -->
        <div class="text-2xl font-bold flex items-center gap-2">
          <router-link to="/admin" class="">
            <img :src="currentLogo" alt="Admin Logo" class="rounded-full" width="50" height="40" />
          </router-link>
          <span class="text-xl font-semibold">Admin Dashboard</span>
        </div>
  
        <!-- Navigation admin -->
        <nav class="hidden md:flex flex justify-center items-center">
          <ul class="flex justify-center items-center space-x-6">
            <li v-for="(link, index) in adminLinks" :key="index">
              <router-link 
                :to="link.to" 
                class="block lg:inline-block nav-link" 
                :class="{ 'active-link': isActive(link.to) }"
                @click="link.clickHandler">
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </nav>
  
        <!-- Menu utilisateur -->
        <div class="hidden md:flex items-center relative" v-if="userLoggedIn">
          <div>
            <button @click="toggleDropdown" class="flex items-center focus:outline-none">
              <span class="mr-2 text-black">
                {{ userName }}
              </span>
              <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
  
            <!-- Menu déroulant pour l'utilisateur -->
            <div v-show="dropdownOpen" class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
              <router-link to="/admin/profile" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profil</router-link>
              <router-link to="/admin/settings" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Paramètres</router-link>
              <button @click="logout" class="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                Déconnexion
                <router-link to="/"></router-link>
              </button>
            </div>
          </div>
        </div>
  
        <!-- Bouton menu hamburger pour mobile -->
        <button @click="toggleMenu" class="md:hidden flex items-center text-gray-600 hover:text-gray-800">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" style="color: black;"></path>
          </svg>
        </button>
      </div>
  
      <!-- Menu mobile pour admin -->
      <div v-show="isMenuOpen" class="md:hidden bg-white shadow-md mt-2 transition-all duration-300 ease-in-out">
        <nav class="mt-2 p-6">
          <router-link v-for="(link, index) in adminLinks" :key="index" :to="link.to" class="block text-center py-2 text-gray-700 hover:bg-gray-100 rounded-md">
            {{ link.name }}
          </router-link>
          <button v-if="userLoggedIn" @click="logout" class="w-full bg-green-600 text-white py-2 mt-4 rounded-full shadow-md transition-transform transform hover:scale-105">
            Déconnexion
          </button>
        </nav>
      </div>
    </header>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import logo1 from '../../assets/logo1.png';
  
  // États réactifs
  const isMenuOpen = ref(false);
  const dropdownOpen = ref(false);
  const currentLogo = ref(logo1);
  
  // Utilisateur connecté
  const userName = ref('');
  
  // Liens de navigation pour l'interface admin
  const adminLinks = [
    { name: 'Tableau de Bord', to: '/admin', clickHandler: closeMenu },
    { name: 'Utilisateurs', to: '/admin/users', clickHandler: closeMenu },
    { name: 'Ajout de Propriétés', to: '/AddProperty', clickHandler: closeMenu },
    { name: 'Statistiques', to: '/Statistics', clickHandler: closeMenu },
  ];
  
  // Gérer le menu mobile
  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
  }
  
  function toggleDropdown() {
    dropdownOpen.value = !dropdownOpen.value;
  }
  
  // Vérifier si l'utilisateur est connecté
  const userLoggedIn = computed(() => {
    return localStorage.getItem('authToken') !== null;
  });
  
  // Déconnexion
  function logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userName');
    dropdownOpen.value = false;
    window.location.reload();
  }
  
  // Route active
  const route = useRoute();
  function isActive(linkRoute) {
    return route.path === linkRoute;
  }
  
  // Charger les informations utilisateur si connecté
  onMounted(() => {
    if (userLoggedIn.value) {
      userName.value = localStorage.getItem('userName') || 'Admin';
    }
  });
  
  function closeMenu() {
    isMenuOpen.value = false;
  }
  </script>
  
  <style scoped>
  /* Style similaire pour la version admin */
  </style>
  