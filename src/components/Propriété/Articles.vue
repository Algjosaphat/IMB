<!-- Propriétés -->
<template>
  <div>
    <!-- Header -->
    <Heder />
    <div class="p-2"></div>

    <!-- Contenu principal -->
    <div class="container mx-auto py-20 px-10">
      <h1 class="text-4xl font-bold text-center mb-12">Nos Propriétés</h1>

      <!-- Section des filtres -->
      <div class="bg-gray-50 p-6 rounded-lg shadow-lg mb-10">
        <h2 class="text-2xl font-semibold mb-6 text-center">Filtrer les Propriétés</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <!-- Filtrer par ville -->
          <div>
            <label for="city" class="block text-sm font-medium mb-1">Ville :</label>
            <select 
              v-model="filters.city" 
              id="city" 
              class="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              <option value="">Toutes</option>
              <!-- Affichage dynamique des villes uniques -->
              <option v-for="(city, index) in uniqueCities" :key="index" :value="city">
                {{ city }}
              </option>
            </select>
          </div>

          <!-- Filtrer par prix minimum -->
          <div>
            <label for="minPrice" class="block text-sm font-medium mb-1">Prix Min :</label>
            <input 
              type="number" 
              v-model.number="filters.minPrice" 
              id="minPrice" 
              class="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600" 
            />
          </div>

          <!-- Filtrer par prix maximum -->
          <div>
            <label for="maxPrice" class="block text-sm font-medium mb-1">Prix Max :</label>
            <input 
              type="number" 
              v-model.number="filters.maxPrice" 
              id="maxPrice" 
              class="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600" 
            />
          </div>

          <!-- Filtrer par nombre de chambres -->
          <div>
            <label for="bedrooms" class="block text-sm font-medium mb-1">Chambres :</label>
            <input 
              type="number" 
              v-model.number="filters.bedrooms" 
              id="bedrooms" 
              class="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600" 
            />
          </div>

          <!-- Filtrer par salles de bain -->
          <div>
            <label for="bathrooms" class="block text-sm font-medium mb-1">Salles de bain :</label>
            <input 
              type="number" 
              v-model.number="filters.bathrooms" 
              id="bathrooms" 
              class="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600" 
            />
          </div>
        </div>
      </div>

      <!-- Liste des propriétés filtrées -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(property, index) in filteredProperties" 
          :key="index" 
          class="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <img :src="property.image" alt="Property Image" class="w-full h-64 object-cover" />
          <div class="p-6">
            <h2 class="text-2xl font-bold mb-2">{{ property.title }}</h2>
            <p class="text-gray-700 mb-4">{{ property.description }}</p>
            <div class="flex justify-between mb-4">
              <p class="text-lg text-green-600">{{ property.price }} €</p>
              <p>{{ property.location }}</p>
            </div>
            <router-link 
              :to="{ name: 'PropertyDetail', params: { id: property.id } }"
              class="bg-green-600 text-white py-2 px-10 rounded-full shadow-md transition-transform hover:scale-105 block text-center"
            >
              Voir Détails
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <Foter />
  </div>
</template>

<script>
import { properties } from '@/assets/proprietes.js'; // Importation des propriétés
import Heder from '../Helper/Header.vue';
import Foter from '../Helper/Footer.vue';

export default {
  components: {
    Heder,
    Foter,
  },
  data() {
    return {
      filters: {
        city: '', // Filtre par ville
        minPrice: 0, // Filtre par prix minimum
        maxPrice: 0, // Filtre par prix maximum
        bedrooms: 0, // Filtre par nombre de chambres
        bathrooms: 0, // Filtre par salles de bain
      },
      properties, // Données des propriétés
    };
  },
  computed: {
    // Liste des villes uniques pour le filtre
    uniqueCities() {
      return [...new Set(this.properties.map(property => property.location))];
    },
    // Propriétés filtrées
    filteredProperties() {
      return this.properties.filter(property => {
        const matchesCity = this.filters.city === '' || property.location === this.filters.city;
        const matchesPrice =
          (this.filters.minPrice === 0 || property.price >= this.filters.minPrice) &&
          (this.filters.maxPrice === 0 || property.price <= this.filters.maxPrice);
        const matchesBedrooms = this.filters.bedrooms === 0 || property.features.bedrooms >= this.filters.bedrooms;
        const matchesBathrooms = this.filters.bathrooms === 0 || property.features.bathrooms >= this.filters.bathrooms;
        return matchesCity && matchesPrice && matchesBedrooms && matchesBathrooms;
      });
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
