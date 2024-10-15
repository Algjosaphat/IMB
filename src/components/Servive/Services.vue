<template>
    <heder/>
    <div class="p-6"></div>
    <section ref="servicesSection" class="container mx-auto py-16 px-4">
      <h1 class="text-4xl font-bold text-center text-gray-800 mb-12">Nos Services</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Services list -->
        <div 
          v-for="(service, index) in services" 
          :key="index" 
          :ref="`service${index}`" 
          class="bg-white shadow-lg rounded-lg p-6"
        >
          <h2 class="text-2xl font-semibold mb-4 text-green-700 flex justify-center">{{ service.title }}</h2>
          <p class="text-gray-600">{{ service.description }}</p>
          <div class="py-1 flex justify-center">
            <!-- <router-link 
              :to="service.link" 
              class="bg-green-600 text-white py-1 px-3 rounded-full shadow-md hover:bg-green-600 transition-transform transform hover:scale-105"
            >
              Consulté <font-awesome-icon :icon="['fas', 'eye']" />
            </router-link> -->
            <router-link 
              :to="{ path: service.link, query: { id: service.id } }"
              class="bg-green-600 text-white py-1 px-3 rounded-full shadow-md hover:bg-green-600 transition-transform transform hover:scale-105"
            >
            En savoir plus <font-awesome-icon :icon="['fas', 'eye']" />
            </router-link>

          </div>
        </div>
      </div>
    </section>
    <foter/>
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
        
      // Animation sur la section des services
      gsap.from(this.$refs.servicesSection, {
        opacity: 0,
        duration: 1,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: this.$refs.servicesSection,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
  
      // Animation sur chaque service
      this.services.forEach((service, index) => {
        const serviceCard = this.$refs[`service${index}`][0];
        gsap.from(serviceCard, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: serviceCard,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        });
      });
    },
  };
  </script>
  
  <style scoped>
  /* Ajoutez des styles spécifiques ici si nécessaire */
  </style>
  