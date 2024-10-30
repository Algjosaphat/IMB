<!-- Propriétés -->
<template>
  <div>
    <Heder />
    <div class="p-2"></div>
    <div class="container mx-auto py-20 px-10">
      <h1 class="text-4xl font-bold text-center mb-12">Nos Propriétés</h1>

      <!-- Filtres -->
      <div class="bg-gray-50 p-6 rounded-lg shadow-lg mb-10">
        <h2 class="text-2xl font-semibold mb-6 text-center">Filtrer les Propriétés</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <!-- Ville -->
          <div>
            <label for="city" class="block text-sm font-medium mb-1">Ville :</label>
            <select v-model="filters.city" id="city" class=" border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600">
              <option value="">Toutes</option>
              <option value="Paris">Paris</option>
              <option value="Normandie">Normandie</option>
              <option value="Marseille">Marseille</option>
              <option value="Côte d'Azur">Côte d'Azur</option>
            </select>
          </div>

          <!-- Prix Min -->
          <div>
            <label for="minPrice" class="block text-sm font-medium mb-1">Prix Min :</label>
            <input type="number" v-model.number="filters.minPrice" id="minPrice" 
              class="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600" />
          </div>

          <!-- Prix Max -->
          <div>
            <label for="maxPrice" class="block text-sm font-medium mb-1">Prix Max :</label>
            <input type="number" v-model.number="filters.maxPrice" id="maxPrice" 
              class="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600" />
          </div>

          <!-- Chambres -->
          <div>
            <label for="bedrooms" class="block text-sm font-medium mb-1">Chambres :</label>
            <input type="number" v-model.number="filters.bedrooms" id="bedrooms" 
              class="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600" />
          </div>

          <!-- Salles de bain -->
          <div>
            <label for="bathrooms" class="block text-sm font-medium mb-1">Salles de bain :</label>
            <input type="number" v-model.number="filters.bathrooms" id="bathrooms" 
              class="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600" />
          </div>
        </div>

        <!-- Bouton Appliquer -->
        <!-- <div class="flex justify-center mt-6">
          <button @click="applyFilters"
            class="bg-green-600 text-white py-3 px-10 rounded-full shadow-md transition-transform transform hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-green-600">
            Appliquer les Filtres
          </button>
        </div> -->
      </div>

      <!-- Liste des propriétés -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(property, index) in filteredProperties" :key="index" class="bg-white shadow-lg rounded-lg overflow-hidden">
          <img :src="property.image" alt="Property Image" class="w-full h-64 object-cover" />
          <div class="p-6">
            <h2 class="text-2xl font-bold mb-2">{{ property.title }}</h2>
            <p class="text-gray-700 mb-4">{{ property.description }}</p>
            <div class="flex flex-col md:flex-row md:justify-between mb-4">
              <div>
                <h3 class="text-xl font-semibold">Prix</h3>
                <p class="text-lg text-green-600">{{ property.price }}</p>
              </div>
              <div>
                <h3 class="text-xl font-semibold">Localisation</h3>
                <p>{{ property.location }}</p>
              </div>
            </div>
            <div class="mb-4">
              <h3 class="text-xl font-semibold">Caractéristiques</h3>
              <ul class="list-disc pl-5">
                <li>{{ property.features.bedrooms }} Chambres</li>
                <li>{{ property.features.bathrooms }} Salles de bain</li>
                <li>{{ property.features.size }} m²</li>
                <li>{{ property.features.parking }} Place(s) de parking</li>
              </ul>
            </div>
            <div class="flex justify-center mt-4">
              <router-link :to="{ name: 'PropertyDetail', params: { id: property.id } }">
              <button class="bg-green-600 text-white py-2 px-10 rounded-full shadow-md transition-transform hover:scale-105">
                Voir Détails
              </button>
            </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Foter />
  </div>
</template>

<script>
import { properties } from '@/assets/proprietes.js';
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
        city: '',
        minPrice: 0,
        maxPrice: 0,
        bedrooms: 0,
        bathrooms: 0,
      },
      properties,
    };
  },
  computed: {
    filteredProperties() {
      return this.properties.filter(property => {
        const meetsCity = this.filters.city === '' || property.location === this.filters.city;
        const meetsPrice = 
          (this.filters.minPrice === 0 || property.price >= this.filters.minPrice) &&
          (this.filters.maxPrice === 0 || property.price <= this.filters.maxPrice);
        const meetsBedrooms = this.filters.bedrooms === 0 || property.features.bedrooms >= this.filters.bedrooms;
        const meetsBathrooms = this.filters.bathrooms === 0 || property.features.bathrooms >= this.filters.bathrooms;
        return meetsCity && meetsPrice && meetsBedrooms && meetsBathrooms;
      });
    },
  },
  methods: {
    applyFilters() {
      // Logique pour appliquer les filtres (si nécessaire)
      console.log('Filtres appliqués:', this.filters);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
