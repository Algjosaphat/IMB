<template>
    <div class="commentaire mx-auto py-16 px-4">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">Témoignages</h2>
      <div class="relative">
        <!-- Carousel Wrapper -->
        <div class="overflow-hidden">
          <div class="flex transition-transform duration-500 ease-out" :style="carouselStyle">
            <div v-for="(testimonial, index) in testimonials" :key="index" class="min-w-full px-8">
              <div class="p-2">
                <div class="flex justify-center">
                    <img :src="testimonial.image" alt="Photo de {{ testimonial.name }}" class="mx-auto mb-4 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover">
                </div>
                <div class="flex justify-center">
                    <p class="text-gray-600 mb-4" style="text-align: center;">"{{ testimonial.comment }}"</p>
                </div>
                <div class="flex justify-center">
                    <h3 class="font-bold text-gray-800">{{ testimonial.name }}</h3>
                </div>
                <div class="flex justify-center">
                    <p class="text-gray-500">{{ testimonial.location }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Navigation Buttons -->
        <!-- <button @click="prevSlide" class="absolute top-1/2 left-0 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
          &#10094;
        </button>
        <button @click="nextSlide" class="absolute top-1/2 right-0 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
          &#10095;
        </button> -->
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
        },
        mounted() {
            setInterval(() => {
            this.nextSlide();
            }, 5000);
        },
    };
</script>

<style scoped>
/* Personnalisation optionnelle */
.commentaire {
background-color: rgba(121, 228, 162, 0.404);
/* height: 25%; */
}
</style>
  