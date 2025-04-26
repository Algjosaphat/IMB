<template>
  <section 
    ref="featuredSection" 
    class="featured-properties py-16 md:py-24 relative overflow-hidden"
  >
    <!-- Arrière-plan décoratif -->
    <div class="absolute inset-0 bg-gradient-to-b from-gray-50 to-white opacity-70 -z-10"></div>
    
    <!-- Titre de section avec effet décoratif -->
    <div class="container mx-auto px-5 md:px-8">
      <div class="text-center mb-12">
        <span class="text-sm uppercase tracking-wider text-emerald-600 font-bold">Découvrez</span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mt-2 relative inline-block">
          Propriétés en Vedette
          <span class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-emerald-500 rounded-full"></span>
        </h2>
        <p class="text-gray-600 mt-6 max-w-2xl mx-auto">Explorez notre sélection de biens immobiliers exceptionnels, choisis pour leur emplacement privilégié et leurs caractéristiques uniques.</p>
      </div>
      
      <!-- Conteneur des cartes avec effet de grille amélioré -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-7xl">
        <!-- Boucle sur les propriétés en vedette -->
        <div 
          v-for="(property, index) in featuredProperties" 
          :key="index" 
          :ref="`property${index}`" 
          class="property-card group relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 lg;:hover:shadow-2xl"
        >
          <!-- Image avec overlay au hover -->
          <div class="relative h-72 overflow-hidden">
            <img 
              :src="property.image" 
              :alt="property.title" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
            
            <!-- Badge prix -->
            <div class="absolute top-4 right-4 bg-emerald-600 text-white py-1 px-3 rounded-full font-semibold shadow-lg">
              {{ property.price }}
            </div>
          </div>
          
          <!-- Contenu de la carte -->
          <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300">
            <h3 class="text-xl font-bold mb-2 group-hover:text-emerald-300 transition-colors">{{ property.title }}</h3>
            
            <div class="flex items-center gap-4 mb-4 text-sm opacity-90">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                {{ property.features.bedrooms }} chambres
              </div>
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                {{ property.features.bathrooms }} SDB
              </div>
              <div v-if="property.storey" class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                {{ property.storey }} étages
              </div>
            </div>
            
            <!-- Bouton avec effet au hover -->
            <router-link 
              :to="{ name: 'PropertyDetail', params: { id: property.id } }" 
              class="inline-flex items-center justify-center w-full bg-white text-emerald-700 font-medium py-2 px-4 rounded-lg shadow-md hover:bg-emerald-600 hover:text-white transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 opacity-0 group-hover:opacity-100"
            >
              <span>Voir le détail</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { properties } from '@/assets/proprietes.js';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      properties,
    };
  },
  computed: {
    // Filtre les propriétés en vedette
    featuredProperties() {
      return this.properties.filter(property => property.featured);
    }
  },
  mounted() {
    // Animation de l'en-tête de la section
    gsap.from(this.$refs.featuredSection.querySelector('h2'), {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: this.$refs.featuredSection,
        start: "top 80%",
      },
    });
    
    gsap.from(this.$refs.featuredSection.querySelector('p'), {
      y: 20,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: this.$refs.featuredSection,
        start: "top 80%",
      },
    });

    // Animation pour chaque carte de propriété avec délai progressif
    this.featuredProperties.forEach((property, index) => {
      const propertyCard = this.$refs[`property${index}`][0];
      gsap.from(propertyCard, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.2 * index,
        ease: "power2.out",
        scrollTrigger: {
          trigger: propertyCard,
          start: "top 90%",
        },
      });
    });
  },
};
</script>

<style scoped>
.featured-properties {
  perspective: 1000px;
}

.property-card {
  transform-style: preserve-3d;
  backface-visibility: hidden;
}

/* Animation du bouton au hover */
.property-card:hover .router-link {
  transform: translateY(0);
  opacity: 1;
}

/* Effet de pulsation subtile sur le badge de prix */
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.property-card:hover .bg-emerald-600 {
  animation: pulse 2s infinite;
}
</style>