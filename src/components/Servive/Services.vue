<template>
  <Heder />
  
  <!-- Hero Section avec image de fond et effet parallaxe -->
  <div class="relative h-64 md:h-96 overflow-hidden bg-green-900">
    <div class="absolute inset-0 bg-gradient-to-r from-green-900 via-green-800 to-green-700 opacity-90"></div>
    <div class="absolute inset-0 bg-[url('/api/placeholder/1200/800')] bg-cover bg-center opacity-20"></div>
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="text-center px-4">
        <h1 class="text-4xl md:text-6xl font-extrabold text-white mb-2 tracking-tight">Nos Services</h1>
        <div class="w-24 h-1 bg-green-400 mx-auto mb-4"></div>
        <p class="text-green-100 text-lg md:text-xl max-w-2xl mx-auto">Solutions innovantes pour transformer vos idées en succès</p>
      </div>
    </div>
  </div>

  <!-- Navigation rapide des services -->
  <!-- <div class="bg-white shadow-md sticky top-0 z-40 hidden md:block">
    <div class="container mx-auto flex items-center justify-center space-x-8 py-4 px-4 overflow-x-auto">
      <a 
        v-for="(service, index) in services.slice(0, 5)" 
        :key="`nav-${index}`" 
        href="#" 
        class="text-gray-600 hover:text-green-600 whitespace-nowrap text-sm font-medium transition-colors duration-300"
      >
        {{ service.title }}
      </a>
    </div>
  </div> -->

  <!-- Introduction -->
  <div class="container mx-auto py-16 px-4" ref="introSection">
    <div class="max-w-3xl mx-auto text-center">
      <span class="text-green-600 font-semibold tracking-wider uppercase text-sm">Expertise professionnelle</span>
      <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-6">Des services adaptés à vos besoins</h2>
      <p class="text-gray-600 leading-relaxed">
        Notre équipe d'experts combine créativité et savoir-faire technique pour vous offrir des solutions 
        sur mesure qui répondent parfaitement à vos attentes et vous permettent d'atteindre vos objectifs.
      </p>
    </div>
  </div>

  <!-- Services Section avec design moderne -->
  <section ref="servicesSection" class="container mx-auto px-4 pb-24">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div 
        v-for="(service, index) in services" 
        :key="index" 
        :ref="`service${index}`" 
        class="group rounded-xl overflow-hidden bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
      >
        <!-- Image du service -->
        <div class="relative h-56 overflow-hidden">
          <div class="absolute inset-0 bg-[url('/api/placeholder/800/600')] bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
          <div class="absolute bottom-0 left-0 p-6">
            <span class="bg-green-600 text-white text-xs uppercase font-semibold py-1 px-3 rounded-full">Service {{ index + 1 }}</span>
          </div>
        </div>
        
        <!-- Contenu du service -->
        <div class="p-6">
          <h3 class="text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300">{{ service.title }}</h3>
          <div class="w-12 h-1 bg-green-600 mb-4 transform origin-left group-hover:scale-x-150 transition-transform duration-300"></div>
          <p class="text-gray-600 mb-6 line-clamp-3">{{ service.description }}</p>
          
          <div class="flex items-center justify-between">
            <router-link 
              :to="{ path: service.link, query: { id: service.id } }"
              class="inline-flex items-center text-green-600 font-medium group-hover:text-green-800 transition-colors duration-300"
            >
              Découvrir
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </router-link>
            
            <div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-green-100 transition-colors duration-300">
              <font-awesome-icon :icon="['fas', service.icon || 'star']" class="text-green-600 text-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials Section -->
  <section class="bg-gray-50 py-20">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center mb-12">
        <span class="text-green-600 font-semibold tracking-wider uppercase text-sm">Témoignages</span>
        <h2 class="text-3xl font-bold text-gray-800 mt-2">Ce que nos clients disent</h2>
      </div>
      
      <div class="flex">
        <div v-for="i in 3" :key="`testimonial-${i}`" class="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center px-4">
          <div class="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <div class="flex items-center mb-4">
              <div class="text-yellow-400 flex">
                <svg v-for="star in 5" :key="`star-${star}`" class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
            </div>
            <p class="text-gray-600 italic mb-6">"Un service exceptionnel qui a dépassé toutes nos attentes. L'équipe est professionnelle, réactive et à l'écoute de nos besoins."</p>
            <div class="flex items-center">
              <div class="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                <span class="text-gray-500 font-medium">{{ ['JD', 'MP', 'LR'][i-1] }}</span>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800">{{ ['Jean Dupont', 'Marie Petit', 'Louis Richard'][i-1] }}</h4>
                <p class="text-gray-500 text-sm">{{ ['Directeur Général', 'Chef de Projet', 'Entrepreneur'][i-1] }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Call to Action Premium -->
  <section class="relative py-24 bg-green-900 overflow-hidden">
    <div class="absolute inset-0 bg-[url('/api/placeholder/1200/800')] bg-cover bg-center opacity-10"></div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Prêt à transformer votre projet en réalité ?</h2>
        <p class="text-green-100 text-lg mb-10 max-w-2xl mx-auto">
          Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nos services peuvent vous aider à atteindre vos objectifs.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-white text-green-900 hover:bg-green-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-300 shadow-lg">
            Demander un devis
          </button>
          <button class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300">
            Nous contacter
          </button>
        </div>
      </div>
    </div>
  </section>

  <Foter />
</template>

<script>
import servicesData from '@/assets/services.json';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import Heder from '../Helper/Header.vue';
import Foter from '../Helper/Footer.vue';

export default {
  components: {
    Heder,
    Foter,
  },
  data() {
    return {
      services: servicesData
    };
  },
  mounted() {
    // Timeline principale
    const mainTimeline = gsap.timeline();
    
    // Animation du hero
    mainTimeline.from(".hero h1", {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out"
    })
    .from(".hero .h-1", {
      scaleX: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.6")
    .from(".hero p", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.6");
    
    // Animation de l'introduction
    gsap.from(this.$refs.introSection.children, {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: this.$refs.introSection,
        start: "top 80%",
        toggleActions: "play none none none",
      }
    });

    // Animation des cartes de services avec effet staggered
    this.services.forEach((service, index) => {
      const serviceCard = this.$refs[`service${index}`][0];
      gsap.from(serviceCard, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index % 3 * 0.2, // Délai basé sur la position dans la rangée
        ease: "power2.out",
        scrollTrigger: {
          trigger: serviceCard,
          start: "top 85%",
          toggleActions: "play none none none",
        }
      });
    });

    // Animation pour les témoignages
    gsap.from(".testimonials .bg-white", {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".testimonials",
        start: "top 80%",
        toggleActions: "play none none none",
      }
    });

    // Animation pour le CTA
    gsap.from(".cta h2, .cta p, .cta button", {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".cta",
        start: "top 80%",
        toggleActions: "play none none none",
      }
    });

    // Animation pour la FAQ
    gsap.from(".faq .border", {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".faq",
        start: "top 85%",
        toggleActions: "play none none none",
      }
    });
  },
};
</script>