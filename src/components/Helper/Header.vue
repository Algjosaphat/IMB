<template>
  <header class="shadow-2xl fixed w-full sm:top-5 sm:rounded-full left-0 z-50 bg-white">
    <div class="container mx-auto flex items-center justify-between m-2">
      <!-- Affichage du logo sur tous les écrans avec ajustements -->
      <div class="text-2xl font-bold flex items-center gap-2">
        <!-- Logo pour desktop -->
        <router-link to="/" class="">
          <img :src="currentLogo" alt="Logo" class="rounded-full" width="50" height="40" />
        </router-link>
      </div>

       <!-- Menu de navigation (centré horizontalement et verticalement) -->
       <nav class="hidden md:flex flex justify-center items-center">
        <ul class="flex justify-center items-center space-x-6">
          <li v-for="(link, index) in links" :key="index">
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


      <!-- Menu utilisateur ou connexion -->
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
            <router-link to="/profile" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profil</router-link>
            <router-link to="/settings" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Notifications</router-link>
            <button @click="logout" to="/" class="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Déconnexion</button>
          </div>
        </div>
      </div>

      <!-- Bouton de connexion pour grand écran -->
      <div class="hidden lg:flex" v-if="!userLoggedIn">
        <router-link to="/login" class="bg-green-600 text-white py-2 px-10 rounded-full shadow-md transition-transform transform hover:scale-105">
          Se Connecter <font-awesome-icon :icon="['fas', 'user']" />
        </router-link>
      </div>


      <!-- Bouton menu hamburger pour mobile -->
      <button @click="toggleMenu" class="md:hidden flex items-center text-gray-600 hover:text-gray-800">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" style="color: black;"></path>
        </svg>
      </button>
    </div>

    <!-- Menu mobile -->
    <div v-show="isMenuOpen" class="md:hidden bg-white shadow-md mt-2 transition-all duration-300 ease-in-out">
      <nav class="mt-2 p-6">
        <router-link to="/" class="block text-center py-2 text-gray-700 hover:bg-gray-100 rounded-md">Accueil</router-link>
        <router-link to="/properties" class="block text-center py-2 text-gray-700 hover:bg-gray-100 rounded-md">Propriétés</router-link>
        <router-link to="/Services" class="block text-center py-2 text-gray-700 hover:bg-gray-100 rounded-md">Services</router-link>
        <router-link to="/about" class="block text-center py-2 text-gray-700 hover:bg-gray-100 rounded-md">À propos</router-link>
        <router-link to="/contact" class="block text-center py-2 text-gray-700 hover:bg-gray-100 rounded-md">Contact</router-link>

        <!-- Boutons de connexion/déconnexion pour mobile -->
         <div class="flex justify-center">
           <router-link 
             v-if="!userLoggedIn"
             to="/login" 
             class="bg-green-600 text-white py-2 px-10 rounded-full shadow-md transition-transform transform hover:scale-105 hover:bg-green-600">
             Connexion
           </router-link>
           <router-link v-if="userLoggedIn" to="/" class="block text-center py-2 text-gray-700 hover:bg-gray-100 rounded-md">Notifications</router-link>
           <router-link v-if="userLoggedIn" to="/" class="block text-center py-2 text-gray-700 hover:bg-gray-100 rounded-md">Profil</router-link>
           <button 
             v-if="userLoggedIn"
             @click="logout" 
             class="bg-green-600 flex justify-center text-white py-2 px-10 rounded-full shadow-md transition-transform transform hover:scale-105">
             Déconnexion
           </button>
         </div>
      </nav>
    </div>

  </header>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
// import { useRoute, useRouter } from 'vue-router'; // Importer useRouter pour redirection
import logo1 from '../../assets/logo1.png'; // Logo par défaut

// États réactifs
const isMenuOpen = ref(false);
const dropdownOpen = ref(false);
const currentLogo = ref(logo1);

// Utilisateur connecté
const userName = ref('');

// Liens de navigation
const links = [
  { name: 'Accueil', to: '/', clickHandler: closeMenu },
  { name: 'Propriétés', to: '/properties', clickHandler: closeMenu },
  { name: 'Services', to: '/Services', clickHandler: closeMenu },
  { name: 'À propos', to: '/about', clickHandler: closeMenu },
  { name: 'Contact', to: '/contact', clickHandler: closeMenu },
];

// Gérer le menu mobile
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value;
}

// Fonction pour vérifier si l'utilisateur est connecté (ex: présence d'un token dans le local storage)
const userLoggedIn = computed(() => {
  return localStorage.getItem('authToken') !== null;
});
function checkUserLoggedIn() {
  userLoggedIn.value = localStorage.getItem('authToken') !== null;
}

// Déconnexion
function logout() {
  localStorage.removeItem('authToken');  // Supprimer le token ou autre identifiant de connexion
  // Optionnel : Redirection vers la page de connexion après déconnexion
  localStorage.removeItem('userName');   // Supprimer le nom d'utilisateur
  dropdownOpen.value = false; // Fermer le menu déroulant
  checkUserLoggedIn();        // Mettre à jour l'état de connexion
  router.push('/');           // Optionnel : Rediriger vers la page d'accueil
  window.location.reload();  // Actualiser la page
}

// Route active
const route = useRoute();
function isActive(linkRoute) {
  return route.path === linkRoute;
}

function closeMenu() {
  isMenuOpen.value = false;  // Fermer le menu
  // window.location.reload();  // Actualiser la page
}
// Chargement des informations utilisateur si connecté
onMounted(() => {
  if (userLoggedIn.value) {
    // Exemple : Charger le nom de l'utilisateur à partir d'une API ou du local storage
    userName.value = localStorage.getItem('userName') || 'Jean Dupont';
  }
});
</script>


<style scoped>

@media (max-width: 768px) {
  header {
    padding: 10px;
  }

  nav ul {
    display: block;
  }

  .nav-link {
    text-align: center;
    font-size: 1.2rem;
  }

  .nav-link::after {
    display: none;
  }
}


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

button {
  transition: color 0.3s ease-out;
}

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