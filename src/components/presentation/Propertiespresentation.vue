<template>
  <Header />
  <div class="h-20"></div>
  <main class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
    <!-- Hero Section avec grande image principale et overlay -->
    <section class="relative h-96 md:h-screen md:max-h-[70vh] overflow-hidden">
      <div class="absolute inset-0 z-10 bg-black bg-opacity-20"></div>
      
      <transition-group name="fade" tag="div" class="h-full">
        <div 
          v-for="(image, index) in propertyImages" 
          :key="index"
          v-show="currentImageIndex === index" 
          class="absolute inset-0 h-full w-full"
        >
          <img 
            :src="image" 
            alt="Vue de la propriété" 
            class="h-full w-full object-cover"
          />
        </div>
      </transition-group>
      
      <!-- Navigation du carousel -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        <button 
          v-for="(_, index) in propertyImages" 
          :key="index" 
          @click="setCurrentImage(index)"
          class="w-3 h-3 rounded-full transition-all duration-300 focus:outline-none"
          :class="currentImageIndex === index ? 'bg-white scale-125' : 'bg-white bg-opacity-50 hover:bg-opacity-75'"
        ></button>
      </div>
      
      <!-- Flèches de navigation -->
      <button 
        @click="prevImage" 
        class="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full focus:outline-none transition-all"
        aria-label="Image précédente"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        @click="nextImage" 
        class="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full focus:outline-none transition-all"
        aria-label="Image suivante"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      <!-- Badge prix flottant -->
      <div class="absolute top-8 right-8 z-20 bg-white py-2 px-6 rounded-full shadow-lg">
        <p class="text-xl md:text-2xl font-bold text-emerald-600">{{ formatPrice(property?.price) }} €</p>
      </div>
    </section>
    
    <div class="container mx-auto px-4 -mt-16 relative z-20">
      <!-- Carte d'information principale -->
      <div ref="propertyCard" class="bg-white rounded-xl shadow-xl p-6 md:p-10">
        <div class="flex flex-col md:flex-row justify-between md:items-center mb-8">
          <div>
            <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-3">{{ property?.title }}</h1>
            <div class="flex items-center text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{{ property?.location }}</span>
            </div>
          </div>
          
          <div class="mt-4 md:mt-0 flex gap-3">
            <button class="bg-emerald-100 hover:bg-emerald-200 text-emerald-700 p-3 rounded-full transition-colors" aria-label="Partager">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
            <button class="bg-emerald-100 hover:bg-emerald-200 text-emerald-700 p-3 rounded-full transition-colors" aria-label="Ajouter aux favoris">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Caractéristiques principales -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 border-y border-gray-200 py-6 mb-8">
          <div class="flex flex-col items-center text-center">
            <div class="bg-emerald-100 p-3 rounded-full mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <span class="text-gray-500 text-sm">Surface</span>
            <span class="font-bold text-lg">{{ property?.features.size }} m²</span>
          </div>
          
          <div class="flex flex-col items-center text-center">
            <div class="bg-emerald-100 p-3 rounded-full mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
              </svg>
            </div>
            <span class="text-gray-500 text-sm">Chambres</span>
            <span class="font-bold text-lg">{{ property?.features.bedrooms }}</span>
          </div>
          
          <div class="flex flex-col items-center text-center">
            <div class="bg-emerald-100 p-3 rounded-full mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3v18h18v-18h-18zm10 16h-10v-6h10v6zm0-8h-10v-6h10v6zm6 8h-4v-14h4v14z" />
              </svg>
            </div>
            <span class="text-gray-500 text-sm">Salles de bain</span>
            <span class="font-bold text-lg">{{ property?.features.bathrooms }}</span>
          </div>
          
          <div class="flex flex-col items-center text-center">
            <div class="bg-emerald-100 p-3 rounded-full mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <span class="text-gray-500 text-sm">Parking</span>
            <span class="font-bold text-lg">{{ property?.features.parking }} places</span>
          </div>
        </div>
        
        <!-- Description -->
        <div class="mb-10">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">À propos de cette propriété</h2>
          <p class="text-gray-600 leading-relaxed">{{ property?.description }}</p>
        </div>
        
        <!-- Miniatures des images -->
        <div class="mb-10">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">Galerie</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div 
              v-for="(image, index) in propertyImages" 
              :key="index"
              class="aspect-square overflow-hidden rounded-lg cursor-pointer relative hover:opacity-90 transition-opacity"
              @click="setCurrentImage(index)"
            >
              <div v-if="currentImageIndex === index" class="absolute inset-0 border-4 border-emerald-500 rounded-lg pointer-events-none"></div>
              <img :src="image" :alt="`Vue ${index + 1} de la propriété`" class="h-full w-full object-cover" />
            </div>
          </div>
        </div>
        
        <!-- CTA -->
        <div class="flex flex-col md:flex-row gap-4 justify-center md:justify-between items-center pt-6 border-t border-gray-200">
          <router-link to="/properties" class="text-emerald-600 font-medium hover:text-emerald-800 transition-colors flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour aux propriétés
          </router-link>
          
          <div class="flex gap-4">
            <button class="bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-semibold py-3 px-6 rounded-full transition-colors">
              Demander plus d'informations
            </button>
            <router-link to="/contact">
              <button class="bg-emerald-600 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-emerald-700 hover:shadow-lg transition-all">
                Planifier une visite
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Propriétés similaires -->
    <section class="container mx-auto px-4 py-16">

    </section>
  </main>
  <Footer />
</template>

<script>
import { properties } from '@/assets/proprietes.js';
import Header from '../Helper/Header.vue';
import Footer from '../Helper/Footer.vue';
import gsap from 'gsap';

export default {
  components: { 
    Header, 
    Footer 
  },
  data() {
    return {
      property: null,
      currentImageIndex: 0,
      autoplayInterval: null,
      isScrolled: false
    };
  },
  computed: {
    propertyImages() {
      if (!this.property) return [];
      
      // Collecte toutes les images disponibles dans la propriété
      return [
        this.property.image1,
        this.property.image2,
        this.property.image3,
        this.property.image4
      ].filter(img => img); // Filtre les images non définies
    }
  },
  methods: {
    formatPrice(price) {
      if (!price) return "";
      return new Intl.NumberFormat('fr-FR').format(price);
    },
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.propertyImages.length;
      this.resetAutoplayTimer();
    },
    prevImage() {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.propertyImages.length) % this.propertyImages.length;
      this.resetAutoplayTimer();
    },
    setCurrentImage(index) {
      this.currentImageIndex = index;
      this.resetAutoplayTimer();
    },
    startAutoplay() {
      this.autoplayInterval = setInterval(() => {
        this.nextImage();
      }, 6000); // Change d'image toutes les 6 secondes
    },
    stopAutoplay() {
      clearInterval(this.autoplayInterval);
    },
    resetAutoplayTimer() {
      this.stopAutoplay();
      this.startAutoplay();
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    }
  },
  created() {
    const propertyId = parseInt(this.$route.params.id);
    this.property = properties.find((prop) => prop.id === propertyId);
  },
  mounted() {
    // Animations d'entrée avec GSAP
    const tl = gsap.timeline();
    
    tl.from(this.$refs.propertyCard, {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out"
    });
    
    // Démarrer l'autoplay des images
    this.startAutoplay();
    
    // Ajouter un écouteur d'événement pour le défilement
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    // Arrêter l'autoplay et retirer l'écouteur d'événement de défilement
    this.stopAutoplay();
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>