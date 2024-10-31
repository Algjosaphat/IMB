<template>
  <section 
    ref="featuredSection" 
    class="featured-properties py-16 md:py-24 mx-5 md:mx-0"
  >
    <h2 class="text-3xl font-semibold text-center mb-8">Propriétés en Vedette</h2>
    <div class="flex flex-wrap gap-6 justify-center">
      <!-- Boucle sur les propriétés en vedette -->
      <div 
        v-for="(property, index) in featuredProperties" 
        :key="index" 
        :ref="`property${index}`" 
        class="property-card relative bg-cover bg-center h-80 w-full sm:w-80 md:w-96 lg:w-1/4 rounded-md"
        :style="{ backgroundImage: `url(${property.image})` }"
      >
        <div class="absolute bottom-4 bg-black bg-opacity-60 p-4 mx-5 rounded-lg text-white w-11/12">
          <h2 class="text-lg font-bold">{{ property.title }}</h2>
          <p>Prix : {{ property.price }}</p>
          <p>{{ property.features.bedrooms }} chambres, {{ property.features.bathrooms }} salles de bain
            <span v-if="property.storey">, {{ property.storey }} étages</span>
          </p>
          <div class="py-1 flex justify-center">
            <router-link 
              :to="{ name: 'PropertyDetail', params: { id: property.id } }" 
              class="bg-green-600 text-white py-1 px-3 rounded-full shadow-md hover:bg-green-600 transition-transform transform hover:scale-105"
            >
              Visité <font-awesome-icon :icon="['fas', 'eye']" />
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
    // Animation lorsque la section "featured-properties" est visible
    gsap.from(this.$refs.featuredSection, {
      opacity: 0,
      duration: 2,
      ease: "power1.out",
      scrollTrigger: {
        trigger: this.$refs.featuredSection,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    // Animation pour chaque carte de propriété
    this.featuredProperties.forEach((property, index) => {
      const propertyCard = this.$refs[`property${index}`][0];
      gsap.from(propertyCard, {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: propertyCard,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    });
  },
};
</script>

<style scoped>
.property-card {
  transform-origin: center center;
}
</style>
