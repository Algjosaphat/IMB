<template>
  <section 
    ref="featuredSection" 
    class="featured-properties py-16 md:py-24 mx-5 md:mx-0"
  >
    <h2 class="text-3xl font-semibold text-center mb-8">Propriétés en Vedette</h2>
    <div class="flex flex-wrap gap-6 justify-center">
      <!-- Boucle sur les propriétés -->
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
          <p>{{ property.bedrooms }} chambres, {{ property.bathrooms }} salles de bain
            <span v-if="property.etages">, {{ property.etages }} étages</span>
          </p>
          <div class="py-1 flex justify-center">
            <router-link 
              :to="`/property/${property.id}`" 
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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Enregistre le plugin ScrollTrigger dans GSAP
gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      featuredProperties: [
        {
          id: 1,
          title: 'Maison Moderne à Paris',
          price: '1 200 000 €',
          bedrooms: 4,
          bathrooms: 3,
          etages: 2,
          image: 'https://www.architoi.com/wp-content/uploads/2022/07/ralph-ravi-kayden-mR1CIDduGLc-unsplash-1024x679.jpg',
        },
        {
          id: 2,
          title: 'Villa Luxueuse à Nice',
          price: '2 500 000 €',
          bedrooms: 5,
          bathrooms: 4,
          image: 'https://media.inmobalia.com/imgV1/B98Le8~d7Me7MjCwPLJ6Ayra8IUhJ5ktnTPjoqTXEgsEG0U7f5gnGvKgfz7aB8oKA_XWwr_PYfPFkRpynsJ0kvms_koqAmhpoOHQYRswhYQFl3Ad0eZY.jpeg',
        },
        {
          id: 3,
          title: 'Appartement à Lyon',
          price: '800 000 €',
          bedrooms: 3,
          bathrooms: 2,
          image: 'https://www.vf-architectures.fr/public/img/big/ArchitectepourvilladeluxeetprestigeCannesarchitectesVF1jpg_5e9c5280605f4.jpg',
        }
      ],
    };
  },
  mounted() {
    // Ajout des animations lorsque la section "featured-properties" est visible
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
