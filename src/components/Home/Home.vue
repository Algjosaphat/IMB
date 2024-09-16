<!-- Home.vue -->

<template>
  <div>
    <!-- Header -->
    <Heder />

    <!-- Section hero -->
    <Heros/>

    <!-- Propriétés en Vedette -->
    <Vedettes />

    <!-- Informations sur l'agence -->
    <Services />

    <!-- Etapes -->
    <Etapes />

    <!-- Carrousel de témoignages -->
    <Commentaires />
    <!-- <section class="carousel-container commentaire w-full relative overflow-hidden py-16 px-4 "> -->
      <!-- <h2 class="text-2xl md:text-3xl font-semibold text-center mb-8">Ce que disent nos clients</h2> -->

      <!-- Carrousel Wrapper -->
       <!-- <div class=""></div> -->
      <!-- <div class="carousel flex transition-transform duration-300 grid" :style="{ transform: `translateX(-${currentIndex * 100}%)` }"> -->
        <!-- <div v-for="(testimonial, index) in testimonials" :key="index" class="carousel-slide min-w-full flex-shrink-0 px-4 md:px-20 text-center"> -->
          <!-- Photo du client -->
          <!-- <img :src="testimonial.image" alt="Photo de {{ testimonial.name }}" class="mx-auto mb-4 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover"> -->

          <!-- Commentaire -->
          <!-- <p class="text-sm sm:text-md md:text-lg italic mb-4 px-2 sm:px-6 md:px-12">"{{ testimonial.comment }}"</p> -->

          <!-- Nom et localisation -->
          <!-- <h3 class="font-semibold text-md sm:text-lg md:text-xl">{{ testimonial.name }}</h3> -->
          <!-- <span class="text-gray-500 text-sm sm:text-base">{{ testimonial.location }}</span> -->
        <!-- </div> -->
      <!-- </div> -->

      <!-- Navigation buttons -->
      <!-- <button @click="prevSlide" class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-full">
        ‹
      </button>
      <button @click="nextSlide" class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-full">
        ›
      </button> -->
    <!-- </section> -->
    
    <!--  -->
    <Foter />
    <!--  -->
  </div>
</template>

<script>
import Heder from '../Helper/Header.vue';
import Foter from '../Helper/Footer.vue';
import Heros from '../home_sections/Hero.vue';
import Vedettes from '../home_sections/Vedette.vue';
import Services from '../home_sections/Service.vue';
import Etapes from '../home_sections/Etape.vue';
import Commentaires from '../home_sections/Commentaire.vue';

export default {
  components: {
    Heder,
    Foter,
    Heros,
    Vedettes,
    Services,
    Etapes,
    Commentaires,
  },
  data() {
    return {
      currentIndex: 0,
      testimonials: [
        {
          comment: "Service impeccable, nous avons trouvé notre maison de rêve grâce à HPR COOP SARL.",
          name: "Marie Dupont",
          location: "Paris, France",
          image: "https://img.freepik.com/premium-vector/yoga-woman-woman-doing-yoga_690577-57.jpg?w=740"
        },
        {
          comment: "Un accompagnement personnalisé du début à la fin. Je recommande vivement.",
          name: "Jean Martin",
          location: "Nice, France",
          image: "https://img.freepik.com/premium-vector/happy-european-guy-portrait-flat-style-avatar-young-man-cute-vector-illustration_647188-77.jpg?w=740"
        },
        {
          comment: "Une expérience formidable, très professionnelle et efficace.",
          name: "Sophie Lambert",
          location: "Lyon, France",
          image: "https://img.freepik.com/premium-vector/avatar-woman-flat-design-people-characters-vector-illustration-eps-10_505557-928.jpg?w=740"
        },
        {
          comment: "Merci pour votre aide, nous sommes très heureux de notre nouvelle maison.",
          name: "Pierre Durand",
          location: "Marseille, France",
          image: "https://img.freepik.com/premium-vector/flat-profile-icon-transparent-png-vector-layer-illustration_1226483-3513.jpg?w=740"
        }
      ]
    };
  },
  methods: {
    prevSlide() {
      this.currentIndex = (this.currentIndex === 0) ? this.testimonials.length - 1 : this.currentIndex - 1;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    },
    startAutoSlide() {
      this.autoSlideInterval = setInterval(() => {
        this.nextSlide();
      }, 5000); // Change slide every 5 seconds
    }
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeDestroy() {
    clearInterval(this.autoSlideInterval);
  }
};
</script>

<style scoped>

.hero-section {
  background-image: url('@/assets/hero1.png'); /* Assurez-vous que le chemin est correct */
  background-size: cover;
  background-position: center;
}

.hero-section img {
  display: none; /* Cache l'image si vous utilisez background-image */
}

.hero-section {
  background-color: #c5c9c5c5; /* Remplace l'image de fond par une couleur */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
.carousel-container {
  max-width: 100%;
  overflow-x: hidden;
  position: relative;
  scroll-snap-type: x mandatory;
  padding: 2rem 1rem; 
}
.carousel {
  display: flex;
  flex-wrap: nowrap;
  transition: transform 0.3s ease-in-out;
  width: 100%;
}
.carousel-slide {
  min-width: 100%;
  scroll-snap-align: center;
  padding: 1rem;
  box-sizing: border-box;
}

.carousel-slide p {
  font-size: 1.125rem;
  line-height: 1.75rem; 
  color: #555;
}

.carousel-slide h3 {
  margin-top: 1rem;
  font-size: 1.25rem;
  font-weight: 600;
}

.commentaire {
  background-color: rgba(121, 228, 162, 0.404);
  /* height: 25%; */
}

button {
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0.5rem;
}

button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
