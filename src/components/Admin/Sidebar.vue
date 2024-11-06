<template>
  <div>
    <!-- Bouton pour ouvrir la barre latérale -->
    <button @click="toggleSidebar" class="fixed top-4 left-4 z-30 bg-green-600 text-white px-4 py-2 rounded-lg shadow-md focus:outline-none mt-20">
      Menu
    </button>

    <!-- Fond semi-transparent pour obscurcir l'arrière-plan lorsque le menu est ouvert -->
    <div v-if="isSidebarOpen" @click="toggleSidebar" class="fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300"></div>

    <!-- Barre latérale off-canvas -->
    <aside :class="{ '-translate-x-full': !isSidebarOpen, 'translate-x-0': isSidebarOpen }"
           class="sidebar fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-30">
      <!-- Bouton de fermeture -->
      <button @click="toggleSidebar" class="absolute top-4 right-4 text-gray-600 hover:text-gray-900 focus:outline-none">X</button>
      
      <nav class="mt-20">
        <ul>
          <li><router-link to="/admin/users" @click.native="toggleSidebar" class="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded">Gestion des Utilisateurs</router-link></li>
          <li><router-link to="/admin/properties" @click.native="toggleSidebar" class="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded">Gestion des Propriétés</router-link></li>
        </ul>
      </nav>
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSidebarOpen: false, // Propriété pour contrôler l'affichage de la barre latérale
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
};
</script>

<style scoped>
.sidebar {
  /* Largeur et style de la barre latérale */
  width: 250px;
  background-color: #ffffff;
  padding: 1rem;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar ul li {
  margin-bottom: 1rem;
}

/* Masque la barre latérale hors de l'écran par défaut */
.sidebar.-translate-x-full {
  transform: translateX(-100%);
}

/* Classe appliquée pour afficher la barre latérale */
.sidebar.translate-x-0 {
  transform: translateX(0);
}
</style>
