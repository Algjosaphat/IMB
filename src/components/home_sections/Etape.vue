<template>
  <section ref="stepsSection" class="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
    <div class="max-w-6xl mx-auto">
      <!-- Titre avec élément décoratif -->
      <div class="flex flex-col items-center mb-16">
        <div class="inline-block bg-teal-100 text-teal-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
          NOTRE PROCESSUS
        </div>
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-3">Comment ça marche</h2>
        <div class="w-20 h-1 bg-teal-500"></div>
        <p class="text-gray-600 text-center mt-6 max-w-xl">
          Découvrez notre approche simple et efficace en trois étapes pour vous accompagner dans tous vos projets
        </p>
      </div>
      
      <!-- Conteneur d'étapes avec connecteurs -->
      <div class="relative">
        <!-- Connecteurs (version desktop) -->
        <div class="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
        <div ref="progressLine" class="hidden md:block absolute top-1/2 left-0 h-1 bg-teal-500 -translate-y-1/2 z-0 w-0 transition-all duration-1000"></div>
        
        <!-- Étapes -->
        <div class="flex flex-col md:flex-row justify-between items-center md:space-x-4 space-y-16 md:space-y-0 relative z-10">
          <!-- Étape 1 -->
          <div ref="step1" class="flex flex-col items-center w-full md:w-1/3 group">
            <div class="mb-6 relative">
              <div class="absolute inset-0 bg-teal-400 rounded-full transform scale-0 group-hover:scale-110 transition-all duration-300 ease-out opacity-0 group-hover:opacity-25"></div>
              <div class="relative bg-white shadow-lg rounded-full p-6 border-2 border-teal-400 transform transition-all duration-500 group-hover:-translate-y-2">
                <font-awesome-icon 
                  :icon="['fas', 'magnifying-glass']" 
                  class="text-3xl md:text-4xl text-teal-500"
                />
              </div>
              <div class="absolute -right-1 -top-1 bg-teal-500 rounded-full w-6 h-6 flex items-center justify-center text-white font-bold">
                1
              </div>
            </div>
            <h3 class="text-xl md:text-2xl font-bold mb-3 text-gray-800 text-center">Faites vos choix</h3>
            <p class="text-gray-600 text-center max-w-xs">Explorez notre gamme de services et sélectionnez ceux qui correspondent à vos besoins spécifiques</p>
          </div>
          
          <!-- Étape 2 -->
          <div ref="step2" class="flex flex-col items-center w-full md:w-1/3 group">
            <div class="mb-6 relative">
              <div class="absolute inset-0 bg-teal-400 rounded-full transform scale-0 group-hover:scale-110 transition-all duration-300 ease-out opacity-0 group-hover:opacity-25"></div>
              <div class="relative bg-white shadow-lg rounded-full p-6 border-2 border-teal-400 transform transition-all duration-500 group-hover:-translate-y-2">
                <font-awesome-icon 
                  :icon="['fas', 'phone']" 
                  class="text-3xl md:text-4xl text-teal-500"
                />
              </div>
              <div class="absolute -right-1 -top-1 bg-teal-500 rounded-full w-6 h-6 flex items-center justify-center text-white font-bold">
                2
              </div>
            </div>
            <h3 class="text-xl md:text-2xl font-bold mb-3 text-gray-800 text-center">Contactez-nous</h3>
            <p class="text-gray-600 text-center max-w-xs">Notre équipe d'experts vous répond rapidement pour discuter de votre projet en détail</p>
          </div>
          
          <!-- Étape 3 -->
          <div ref="step3" class="flex flex-col items-center w-full md:w-1/3 group">
            <div class="mb-6 relative">
              <div class="absolute inset-0 bg-teal-400 rounded-full transform scale-0 group-hover:scale-110 transition-all duration-300 ease-out opacity-0 group-hover:opacity-25"></div>
              <div class="relative bg-white shadow-lg rounded-full p-6 border-2 border-teal-400 transform transition-all duration-500 group-hover:-translate-y-2">
                <font-awesome-icon 
                  :icon="['fas', 'wand-magic-sparkles']" 
                  class="text-3xl md:text-4xl text-teal-500"
                />
              </div>
              <div class="absolute -right-1 -top-1 bg-teal-500 rounded-full w-6 h-6 flex items-center justify-center text-white font-bold">
                3
              </div>
            </div>
            <h3 class="text-xl md:text-2xl font-bold mb-3 text-gray-800 text-center">Procédons aux démarches</h3>
            <p class="text-gray-600 text-center max-w-xs">Nous mettons en œuvre votre projet avec précision, transparence et dans le respect des délais convenus</p>
          </div>
        </div>
      </div>
      
      <!-- CTA -->
      <div class="mt-16 text-center">
        <button class="bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center mx-auto">
          <router-link to="/properties">
            <span>Commencer maintenant</span>
            <font-awesome-icon :icon="['fas', 'arrow-right']" class="ml-2" />
          </router-link>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stepsSection = ref(null);
const step1 = ref(null);
const step2 = ref(null);
const step3 = ref(null);
const progressLine = ref(null);

onMounted(() => {
  nextTick(() => {
    // Animation d'entrée pour les étapes
    const steps = [step1.value, step2.value, step3.value];
    
    // Animation de la timeline
    gsap.to(progressLine.value, {
      width: '100%',
      scrollTrigger: {
        trigger: stepsSection.value,
        start: 'top 70%',
        end: 'bottom 70%',
        scrub: true
      }
    });
    
    // Animation des étapes
    gsap.from(steps, {
      opacity: 0,
      y: 50,
      stagger: 0.3,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: stepsSection.value,
        start: 'top 70%',
      }
    });
    
    // Animation des chiffres
    gsap.from('.group div:nth-child(3)', {
      scale: 0,
      stagger: 0.3,
      duration: 0.5,
      delay: 0.5,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: stepsSection.value,
        start: 'top 70%',
      }
    });
  });
});
</script>