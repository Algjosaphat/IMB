<!-- Carrousel de témoignages -->

<template>
        
    <section class="carousel-container commentaire w-full relative overflow-hidden py-16 px-4 ">
        <h2 class="text-2xl md:text-3xl font-semibold text-center mb-8">Ce que disent nos clients</h2>

        <!-- Carrousel Wrapper -->
        <div class="carousel flex transition-transform duration-300 grid" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <div v-for="(testimonial, index) in testimonials" :key="index" class="carousel-slide min-w-full flex-shrink-0 px-4 md:px-20 text-center">
                <!-- Photo du client -->
                <img :src="testimonial.image" alt="Photo de {{ testimonial.name }}" class="mx-auto mb-4 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover">

                <!-- Commentaire -->
                <p class="text-sm sm:text-md md:text-lg italic mb-4 px-2 sm:px-6 md:px-12">"{{ testimonial.comment }}"</p>

                <!-- Nom et localisation -->
                <h3 class="font-semibold text-md sm:text-lg md:text-xl">{{ testimonial.name }}</h3>
                <span class="text-gray-500 text-sm sm:text-base">{{ testimonial.location }}</span>
            </div>
        </div>

        <!-- Navigation buttons -->
        <!-- <button @click="prevSlide" class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-full">
        ‹
        </button>
        <button @click="nextSlide" class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-full">
        ›
        </button> -->
    </section>

</template>

<script >
// Importation de FontAwesomeIcon n'est pas nécessaire ici car il est enregistré globalement dans main.js
</script>

<style >
/* Ajoute des styles spécifiques si nécessaire */
</style>