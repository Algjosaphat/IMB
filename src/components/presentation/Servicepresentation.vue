<template>
  <Heder />
  <div class="bg-gradient-to-b from-green-50 to-white">
    <!-- Hero section avec image de fond et overlay -->
    <div class="relative py-20 bg-cover -mb-20 bg-center" :style="{ backgroundImage: `url(${service?.imageUrl || '/api/placeholder/1200/400'})` }">
      <div class="container mx-auto px-4 relative z-10">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-700 mt-10 text-center mb-6 drop-shadow-lg">
          {{ service?.title }}
        </h1>
        <div class="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
      </div>
    </div>

    <!-- Contenu principal -->
    <div class="container mx-auto py-12 px-4 md:px-8">
      <!-- Carte principale -->
      <div class="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-12">
        <div class="prose prose-lg max-w-none">
          <p class="text-gray-700 leading-relaxed mb-8 text-lg">{{ service?.detail }}</p>
          
          <!-- Caractéristiques si disponibles -->
          <div v-if="service?.features" class="my-10">
            <h2 class="text-2xl font-semibold text-gray-800 mb-6">Caractéristiques clés</h2>
            <div class="grid md:grid-cols-2 gap-6">
              <div v-for="(feature, index) in service?.features" :key="index" class="flex items-start">
                <div class="bg-green-100 p-3 rounded-full mr-4">
                  <font-awesome-icon :icon="['fas', 'check']" class="text-green-600" />
                </div>
                <div>
                  <h3 class="font-medium text-gray-800">{{ feature.title }}</h3>
                  <p class="text-gray-600">{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Témoignage si disponible -->
          <div v-if="service?.testimonial" class="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg my-10">
            <p class="italic text-gray-700 mb-2">"{{ service?.testimonial.quote }}"</p>
            <p class="font-semibold text-gray-800">— {{ service?.testimonial.author }}</p>
          </div>
        </div>
      </div>

      <!-- Actions -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <router-link
          to="/services"
          class="bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-6 rounded-full shadow-md flex items-center transition-colors duration-300"
        >
          <font-awesome-icon :icon="['fas', 'arrow-left']" class="mr-2" /> Retour aux services
        </router-link>
        
        <div class="flex gap-4">
          <a
            :href="service?.link2"
            class="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-full shadow-md flex items-center transition-colors duration-300"
          >
            <font-awesome-icon :icon="['fas', 'phone']" class="mr-2" /> Nous contacter
          </a>
          <a
            v-if="service?.link1"
            :href="service?.link1"
            class="bg-white border-2 border-green-600 hover:bg-green-50 text-green-600 py-3 px-8 rounded-full shadow-md flex items-center transition-colors duration-300"
          >
            <font-awesome-icon :icon="['fas', 'info-circle']" class="mr-2" /> Plus d'infos
          </a>
        </div>
      </div>
    </div>

    <!-- Autres services -->
    <div class="bg-gray-50 py-12">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold text-center text-gray-800 mb-10">Autres services qui pourraient vous intéresser</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="relatedService in relatedServices" :key="relatedService.id" class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="h-48 bg-cover bg-center" :style="{ backgroundImage: `url(${relatedService.imageUrl || '/api/placeholder/400/200'})` }"></div>
            <div class="p-6">
              <h3 class="font-bold text-lg mb-2">{{ relatedService.title }}</h3>
              <p class="text-gray-600 line-clamp-2 mb-4">{{ relatedService.shortDescription }}</p>
              <router-link
                :to="`/service?id=${relatedService.id}`"
                class="text-green-600 hover:text-green-700 font-medium flex items-center"
              >
                Découvrir <font-awesome-icon :icon="['fas', 'arrow-right']" class="ml-2" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Foter />
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
      relatedServices: [],
    };
  },
  mounted() {
    // Récupérer l'ID à partir de la query de l'URL
    this.id = this.$route.query.id;

    // Trouver le service correspondant à l'ID
    this.service = servicesData.find((service) => service.id === parseInt(this.id));
    
    // Trouver des services similaires (à l'exclusion du service actuel)
    this.relatedServices = servicesData
      .filter((service) => service.id !== parseInt(this.id))
      .slice(0, 3); // Limiter à 3 services similaires
  },
};
</script>

<style scoped>

</style>