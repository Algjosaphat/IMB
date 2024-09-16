<!-- Section hero --> 

<template>

    <div ref="heroSection" class="hero-section h-screen flex items-center bg-fixed bg-cover bg-center flex justify-center">
      <div class="bg-black bg-opacity-50 text-center p-10 rounded-xl mx-3">
        <h1 class="text-4xl font-bold text-white mb-4">Bienvenue à HPR COOP SARL</h1>
        <p class="text-lg text-white mb-6">Trouvez votre maison de rêve parmi nos offres exclusives</p>
        <div class="md:flex justify-center">
          <router-link to="/properties" class=" bg-green-600 text-white py-1 px-6 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500">
            Voir plus <font-awesome-icon :icon="['fas', 'arrow-right']" />
          </router-link>
        </div>
      </div>
    </div>

</template>

<script setup>
// Importation de FontAwesomeIcon n'est pas nécessaire ici car il est enregistré globalement dans main.js
</script>

<style scoped>
/* Ajoute des styles spécifiques si nécessaire */
</style>