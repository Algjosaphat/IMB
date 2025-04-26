<template>
  <div class="testimonial-section py-16 px-4">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center mb-8">Témoignages</h2>
      <div class="relative">
        <!-- Carousel Wrapper -->
        <div class="overflow-hidden">
          <div class="flex transition-transform flex duration-700 ease-out" :style="carouselStyle">
            <div v-for="(testimonial, index) in testimonials" :key="index" class="min-w-full flex items-center justify-center px-4">
              <div class="bg-white p-6 lg:w-80  rounded-lg">
                <div class="flex justify-center mb-6">
                  <div class="relative">
                    <img :src="testimonial.image" alt="Photo de {{ testimonial.name }}" 
                         class="w-24 h-24 rounded-full object-cover border-4 border-emerald-400 shadow-md">
                    <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-emerald-500 text-white rounded-full p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.352-.035-.696-.1-1.028A5 5 0 0010 11z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="text-center mb-4">
                  <div class="text-yellow-500 flex justify-center mb-3">
                    <svg v-for="star in 5" :key="star" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <p class="text-gray-700 italic text-lg mb-4">"{{ testimonial.comment }}"</p>
                  <h3 class="font-bold text-gray-800 text-xl">{{ testimonial.name }}</h3>
                  <p class="text-emerald-600">{{ testimonial.location }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Navigation Buttons -->
        <button @click="prevSlide" class="absolute top-1/2 left-2 -translate-y-1/2 bg-emerald-500 text-white p-2 rounded-full hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button @click="nextSlide" class="absolute top-1/2 right-2 -translate-y-1/2 bg-emerald-500 text-white p-2 rounded-full hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        <!-- Indicators -->
        <div class="flex justify-center mt-6">
          <div v-for="(_, index) in testimonials" :key="'dot-'+index" 
               @click="currentSlide = index"
               :class="['w-3 h-3 mx-1 rounded-full cursor-pointer transition-all', 
                       currentSlide === index ? 'bg-emerald-500' : 'bg-gray-300']">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      testimonials: [
        {
          comment: "J'ai trouvé la maison parfaite grâce à cette agence !",
          name: "Jean Dupont",
          location: "Cotonou, Bénin",
          image: "https://img.freepik.com/premium-vector/happy-european-guy-portrait-flat-style-avatar-young-man-cute-vector-illustration_647188-77.jpg?w=740"
        },
        {
          comment: "Service excellent et très professionnel.",
          name: "Marie Leclerc",
          location: "Calavi, Bénin",
          image: "https://img.freepik.com/premium-vector/avatar-woman-flat-design-people-characters-vector-illustration-eps-10_505557-928.jpg?w=740"
        },
        {
          comment: "Une expérience exceptionnelle du début à la fin.",
          name: "Paul Martin",
          location: "Agla, Bénin",
          image: "https://img.freepik.com/premium-vector/flat-profile-icon-transparent-png-vector-layer-illustration_1226483-3513.jpg?w=740"
        },
        {
          comment: "Service impeccable, nous avons trouvé notre maison de rêve grâce à HPR COOP SARL.",
          name: "Marie Dupont",
          location: "Godomey, Bénin",
          image: "https://img.freepik.com/premium-vector/yoga-woman-woman-doing-yoga_690577-57.jpg?w=740"
        },
        {
          comment: "Un accompagnement personnalisé du début à la fin. Je recommande vivement.",
          name: "Jean Martin",
          location: "Calavi, Bénin",
          image: "https://img.freepik.com/premium-vector/happy-european-guy-portrait-flat-style-avatar-young-man-cute-vector-illustration_647188-77.jpg?w=740"
        },
        {
          comment: "Une expérience formidable, très professionnelle et efficace.",
          name: "Sophie Lambert",
          location: "PK10, Bénin",
          image: "https://img.freepik.com/premium-vector/avatar-woman-flat-design-people-characters-vector-illustration-eps-10_505557-928.jpg?w=740"
        },
        {
          comment: "Merci pour votre aide, nous sommes très heureux de notre nouvelle maison.",
          name: "Pierre Durand",
          location: "Godomey, Bénin",
          image: "https://img.freepik.com/premium-vector/flat-profile-icon-transparent-png-vector-layer-illustration_1226483-3513.jpg?w=740"
        }
      ],
      autoplayInterval: null
    };
  },
  computed: {
    carouselStyle() {
      const slideWidth = 100; // Pourcentage de chaque slide
      return `transform: translateX(-${this.currentSlide * slideWidth}%);`;
    },
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.testimonials.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.testimonials.length) % this.testimonials.length;
    },
    startAutoplay() {
      this.autoplayInterval = setInterval(() => {
        this.nextSlide();
      }, 5000);
    },
    stopAutoplay() {
      clearInterval(this.autoplayInterval);
    }
  },
  mounted() {
    this.startAutoplay();
  },
  beforeUnmount() {
    this.stopAutoplay();
  }
};
</script>

<style scoped>
.testimonial-section {
  background: linear-gradient(135deg, rgba(121, 228, 162, 0.2) 0%, rgba(85, 182, 134, 0.3) 100%);
}

.container {
  max-width: 1200px;
}

h2 {
  color: #2d3748;
  position: relative;
  display: inline-block;
}

h2:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 70px;
  height: 3px;
  background-color: #48bb78;
}

button {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

button:hover {
  transform: translateY(-1px);
}

.bg-white {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style>