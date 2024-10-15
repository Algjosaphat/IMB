<template>
  <heder />
  <div class="p-4"></div>
  <div class="container mx-auto py-16 px-4">
    <h1 class="text-4xl font-bold text-center text-gray-800 mb-12">
      {{ service?.title }}
    </h1>
    <p class="text-gray-600 mb-8">{{ service?.detail }}</p>

    <!-- Bouton retour avec ID affiché -->
    <router-link
      to="/services"
      class="bg-green-600 text-white py-2 px-4 rounded-full shadow-md"
    >
      <font-awesome-icon :icon="['fas', 'arrow-left']" /> Retour <!-- (ID : {{ id }}) -->
    </router-link>
  </div>
  <foter />
</template>

<script>
import servicesData from '@/assets/services.json';
import Heder from '../Helper/Header.vue';
import Foter from '../Helper/Footer.vue';

export default {
  components: {
    Heder,
    Foter,
  },
  data() {
    return {
      service: null,
      id: null,
    };
  },
  mounted() {
    // Récupérer l'ID à partir de la query de l'URL
    this.id = this.$route.query.id;

    // Trouver le service correspondant à l'ID
    this.service = servicesData.find((service) => service.id === parseInt(this.id));
  },
};
</script>

<style scoped>
/* Ajoutez des styles spécifiques ici si nécessaire */
</style>
