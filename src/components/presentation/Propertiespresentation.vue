<template>
  <Heder />
  <div class="min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200 py-10">

    <div
      ref="propertyCard"
      class="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl p-8 mt-16 relative overflow-hidden"
    >
      <img 
        :src="property.image" 
        alt="Property Image" 
        class="w-full h-80 object-cover rounded-2xl shadow-lg mb-8 transition-transform duration-500 hover:scale-105"
      />

      <div class="text-center">
        <h1 class="text-5xl font-extrabold text-gray-800 mb-4">{{ property.title }}</h1>
        <p class="text-lg text-gray-500 leading-relaxed mb-6">{{ property.description }}</p>
      </div>

      <div class="flex justify-between items-center bg-gray-100 p-6 rounded-lg shadow-md mb-8">
        <p class="text-xl text-gray-700">
          <strong>Prix :</strong> {{ property.price }} €
        </p>
        <p class="text-xl text-gray-700">
          <strong>Localisation :</strong> {{ property.location }}
        </p>
      </div>

      <ul class="grid grid-cols-2 gap-4 text-gray-600 mb-8">
        <li class="flex items-center gap-2">
          <span class="font-bold">Chambres :</span> {{ property.features.bedrooms }}
        </li>
        <li class="flex items-center gap-2">
          <span class="font-bold">Salles de bain :</span> {{ property.features.bathrooms }}
        </li>
        <li class="flex items-center gap-2">
          <span class="font-bold">Surface :</span> {{ property.features.size }} m²
        </li>
        <li class="flex items-center gap-2">
          <span class="font-bold">Parking :</span> {{ property.features.parking }} places
        </li>
      </ul>

      <div class="flex justify-between mt-8">
        <router-link to="/properties">
          <button
            class="hidden md:block bg-green-500 text-white font-semibold py-3 px-12 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
          >
            Retour aux Propriétés
          </button>
        </router-link>

        <router-link to="/contact">
          <button
            class="bg-green-500 text-white font-semibold py-3 px-12 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
          >
            Nous contacter
          </button>
        </router-link>
      </div>
    </div>
  </div>
  <Foter />
</template>

<script>
import { properties } from '@/assets/proprietes.js';
import Heder from '../Helper/Header.vue';
import Foter from '../Helper/Footer.vue';
import gsap from 'gsap';

export default {
  components: { Heder, Foter },
  data() {
    return {
      property: null,
    };
  },
  created() {
    const propertyId = parseInt(this.$route.params.id);
    this.property = properties.find((prop) => prop.id === propertyId);
  },
  mounted() {
    gsap.from(this.$refs.propertyCard, {
      duration: 1.5,
      opacity: 0,
      y: 50,
      ease: 'power3.out',
    });

    // Animation supplémentaire pour l'image
    gsap.from(this.$refs.propertyCard.querySelector('img'), {
      duration: 1.2,
      opacity: 0,
      scale: 0.9,
      ease: 'power2.out',
    });
  },
};
</script>
