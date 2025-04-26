<template>
  <section class="services-section relative py-20 overflow-hidden">
    <!-- Background elements -->
    <div class="absolute top-0 left-0 w-64 h-64 bg-emerald-500 opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500 opacity-5 rounded-full translate-x-1/3 translate-y-1/3"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <!-- Section header -->
      <div class="text-center mb-16" data-scroll>
        <span class="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-600 text-sm font-semibold tracking-wide mb-3">
          NOS EXPERTISES
        </span>
        <h2 class="text-4xl font-bold mb-3 text-gray-800">À propos de nos services</h2>
        <div class="w-24 h-1 bg-emerald-500 mx-auto mb-4 rounded-full"></div>
        <p class="max-w-2xl mx-auto text-gray-600">
          Découvrez notre gamme complète de services immobiliers, conçus pour vous offrir une expérience sur mesure et sans stress.
        </p>
      </div>

      <div class="mt-16 space-y-24">
        <!-- Service 1 -->
        <div class="service-item group" data-scroll>
          <div class="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            <!-- Image container with overlay -->
            <div class="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
              <div class="absolute inset-0 bg-emerald-500 opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              <img src="https://xpertsource.com/_next/image?url=https%3A%2F%2Fimages.xpertsource.com%2Fpublic%2Fblogs%2F21ff6597-0759-44ca-80ca-0156e3fde08b%2FXpertSource_acheter-en-10-etapes_cle-maison.png&w=1920&q=75" 
                   alt="Achat de Propriétés" 
                   class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110">
              <!-- Decorative element -->
              <div class="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-emerald-600 to-transparent opacity-60"></div>
              <div class="absolute top-4 left-4 bg-emerald-500 text-white rounded-full py-1 px-4 text-sm font-bold shadow-lg">
                ACHAT
              </div>
            </div>
            
            <!-- Content -->
            <div class="w-full md:w-3/5 p-6 md:p-10">
              <h3 class="text-2xl font-bold mb-3 flex items-center text-gray-800">
                <span class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </span>
                Achat de Propriétés
              </h3>
              
              <p class="mb-6 text-gray-600 leading-relaxed">
                Nous vous accompagnons dans l'achat de propriétés de rêve adaptées à vos besoins et à votre budget. Que vous cherchiez une maison, un appartement, ou une villa, notre équipe d'experts est là pour vous guider tout au long du processus, de la recherche à l'acquisition finale.
              </p>
              
              <!-- Features -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-gray-700">Recherche personnalisée</span>
                </div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-gray-700">Négociation optimale</span>
                </div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-gray-700">Accompagnement légal</span>
                </div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-gray-700">Conseils financiers</span>
                </div>
              </div>
              
              <!-- Button -->
              <div class="mt-6">
                <router-link to="/formachat" class="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  En savoir plus
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Service 2 -->
        <div class="service-item group" data-scroll>
          <div class="flex flex-col md:flex-row-reverse items-center bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            <!-- Image container with overlay -->
            <div class="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
              <div class="absolute inset-0 bg-emerald-500 opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              <img src="https://www.accrochecoeur-nantes.fr/wp-content/uploads/2023/02/real-estate-broker-and-customer-shaking-hands-afte-2022-10-03-23-26-44-utc.jpg" 
                   alt="Vente de Propriétés" 
                   class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110">
              <!-- Decorative element -->
              <div class="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-emerald-600 to-transparent opacity-60"></div>
              <div class="absolute top-4 right-4 bg-emerald-500 text-white rounded-full py-1 px-4 text-sm font-bold shadow-lg">
                VENTE
              </div>
            </div>
            
            <!-- Content -->
            <div class="w-full md:w-3/5 p-6 md:p-10">
              <h3 class="text-2xl font-bold mb-3 flex items-center text-gray-800">
                <span class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Vente de Propriétés
              </h3>
              
              <p class="mb-6 text-gray-600 leading-relaxed">
                Vous souhaitez vendre votre propriété ? Notre équipe d'experts en immobilier met à votre disposition son savoir-faire pour estimer, promouvoir et vendre votre bien dans les meilleures conditions. Nous utilisons des stratégies de marketing efficaces pour attirer des acheteurs potentiels et garantir une vente rapide et au meilleur prix.
              </p>
              
              <!-- Features -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-gray-700">Estimation précise</span>
                </div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-gray-700">Photos professionnelles</span>
                </div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-gray-700">Marketing digital</span>
                </div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-gray-700">Négociation optimale</span>
                </div>
              </div>
              
              <!-- Button -->
              <div class="mt-6">
                <router-link to="/formvente" class="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  En savoir plus
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Service 3 -->
        <div class="service-item group" data-scroll>
          <div class="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            <!-- Image container with overlay -->
            <div class="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
              <div class="absolute inset-0 bg-emerald-500 opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              <img src="https://www.selexium.com/app/uploads/2023/07/media-gestion-locative-SLX-PF-1536x1020.jpg" 
                   alt="Gestion Locative" 
                   class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110">
              <!-- Decorative element -->
              <div class="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-emerald-600 to-transparent opacity-60"></div>
              <div class="absolute top-4 left-4 bg-emerald-500 text-white rounded-full py-1 px-4 text-sm font-bold shadow-lg">
                LOCATION
              </div>
            </div>
            
            <!-- Content -->
            <div class="w-full md:w-3/5 p-6 md:p-10">
              <h3 class="text-2xl font-bold mb-3 flex items-center text-gray-800">
                <span class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </span>
                Gestion Locative
              </h3>
              
              <p class="mb-6 text-gray-600 leading-relaxed">
                Notre service de gestion locative prend en charge tous les aspects de la location de votre bien, de la recherche de locataires à la gestion des contrats et des paiements. Nous nous assurons que votre propriété est bien entretenue et que vous recevez des revenus locatifs réguliers et sans tracas.
              </p>
              
              <!-- Features -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-gray-700">Sélection des locataires</span>
                </div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-gray-700">Gestion des contrats</span>
                </div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-gray-700">Suivi des paiements</span>
                </div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-gray-700">Maintenance du bien</span>
                </div>
              </div>
              
              <!-- Button -->
              <div class="mt-6">
                <router-link to="/formlocation" class="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  En savoir plus
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Bottom CTA -->
      <!-- <div class="mt-24 text-center" data-scroll>
        <div class="bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-2xl p-8 md:p-12 shadow-2xl">
          <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">Prêt à concrétiser votre projet immobilier ?</h3>
          <p class="text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
            Contactez notre équipe dès aujourd'hui pour bénéficier d'un accompagnement personnalisé et professionnel dans toutes vos démarches immobilières.
          </p>
          <router-link to="/contact" class="inline-flex items-center px-8 py-4 bg-white text-emerald-600 font-bold rounded-full shadow-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
            Nous contacter
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </router-link>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  // Animer l'en-tête de section
  gsap.from('.text-center', {
    scrollTrigger: {
      trigger: '.text-center',
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
  });
  
  // Animer chaque élément de service avec un délai séquentiel
  const serviceItems = document.querySelectorAll('.service-item');
  
  serviceItems.forEach((item, index) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: index * 0.15, // Délai progressif pour un effet séquentiel
    });
  });
  
  // Animation du CTA en bas
  gsap.from('.mt-24', {
    scrollTrigger: {
      trigger: '.mt-24',
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 40,
    duration: 1,
  });
});
</script>

<style scoped>
.services-section {
  background-color: #f8fafc;
  background-image: 
    radial-gradient(circle at 25% 10%, rgba(16, 185, 129, 0.05) 0%, transparent 20%),
    radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.05) 0%, transparent 20%);
}

.service-item {
  transition: all 0.5s ease;
}

/* Effet de hover amélioré */
.service-item:hover {
  transform: translateY(-8px);
}

/* Animation image au survol */
.service-item img {
  transition: transform 0.7s ease-in-out;
}

.service-item:hover img {
  transform: scale(1.05);
}

/* Style pour les icônes de fonctionnalités */
.service-item .text-emerald-500 {
  filter: drop-shadow(0 2px 2px rgba(16, 185, 129, 0.2));
}

/* Styles responsifs */
@media (max-width: 768px) {
  .services-section {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  
  .service-item .h-64 {
    height: 14rem;
  }
}
</style>