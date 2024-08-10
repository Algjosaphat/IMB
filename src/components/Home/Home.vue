<!-- Home.vue -->

<template>
  <div>
    <!-- Header -->
    <Header />

    <!-- Bannière d'accueil -->
    <div
      class="bg-fixed bg-cover bg-center h-screen flex items-center justify-center"
      :style="{ backgroundImage: 'url(https://www.mgvillas.fr/objetos/temp/source/mgvillas/mgvillas-propiedades_5f57a70f58407-source.jpg)' }"
    >
      <div class="bg-black bg-opacity-50 text-center p-10 rounded-xl mx-3">
        <h1 class="text-4xl font-bold text-white mb-4">Bienvenue sur notre site immobilier</h1>
        <p class="text-lg text-white mb-6">Trouvez votre maison de rêve parmi nos offres exclusives</p>
        <div class="md:flex justify-center">
          <router-link to="/properties" class="bg-bleu text-white py-1 px-6 rounded-2xl shadow-lg hover:bg-yellow-700 hover:shadow-xl transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500">
            Voir plus
          </router-link>
        </div>
      </div>
    </div>

    <!-- Propriétés en Vedette -->
    <section class="featured-properties py-16 md:py-24 mx-5 md:mx-0">
      <h2 class="text-3xl font-semibold text-center mb-8">Propriétés en Vedette</h2>
      <div class="flex flex-wrap gap-6 justify-center">
        <!-- Property 1 -->
        <div class="relative bg-cover bg-center h-80 w-full sm:w-80 md:w-96 lg:w-1/4 rounded-md hover:-translate-x-1 hover:-translate-y-1 duration-150" 
             :style="{ backgroundImage: 'url(https://www.architoi.com/wp-content/uploads/2022/07/ralph-ravi-kayden-mR1CIDduGLc-unsplash-1024x679.jpg)' }">
          <div class="absolute bottom-4 left-4 bg-black bg-opacity-60 p-4 rounded-lg text-white">
            <h2 class="text-lg font-bold">Maison Moderne à Paris</h2>
            <p>Prix : 1 200 000 €</p>
            <p>4 chambres, 3 salles de bain, jardin</p>
            <div class="py-1 flex justify-center">
              <router-link to="/property/1" class="bg-yellow-600 text-white py-1 px-3 rounded-lg shadow-md hover:bg-yellow-700 transition-transform transform hover:scale-105">
                Visité ->
              </router-link>
            </div>
          </div>
        </div>

        <!-- Property 2 -->
        <div class="relative bg-cover bg-center h-80 w-full sm:w-80 md:w-96 lg:w-1/4 rounded-md hover:-translate-x-1 hover:-translate-y-1 duration-150" 
             :style="{ backgroundImage: 'url(https://media.inmobalia.com/imgV1/B98Le8~d7Me7MjCwPLJ6Ayra8IUhJ5ktnTPjoqTXEgsEG0U7f5gnGvKgfz7aB8oKA_XWwr_PYfPFkRpynsJ0kvms_koqAmhpoOHQYRswhYQFl3Ad0eZY.jpeg)' }">
          <div class="absolute bottom-4 left-4 bg-black bg-opacity-60 p-4 rounded-lg text-white">
            <h2 class="text-lg font-bold">Villa Luxueuse à Nice</h2>
            <p>Prix : 2 500 000 €</p>
            <p>5 chambres, 4 salles de bain, piscine</p> 
            <div class="py-1 flex justify-center">
              <router-link to="/property/1" class="bg-yellow-600 text-white py-1 px-3 rounded-lg shadow-md hover:bg-yellow-700 transition-transform transform hover:scale-105">
                Visité ->
              </router-link>
            </div>
          </div>
        </div>

        <!-- Property 3 -->
        <div class="relative bg-cover bg-center h-80 w-full sm:w-80 md:w-96 lg:w-1/4 rounded-md hover:-translate-x-1 hover:-translate-y-1 duration-150" 
             :style="{ backgroundImage: 'url(https://www.vf-architectures.fr/public/img/big/ArchitectepourvilladeluxeetprestigeCannesarchitectesVF1jpg_5e9c5280605f4.jpg)' }">
          <div class="absolute bottom-4 left-4 bg-black bg-opacity-60 p-4 rounded-lg text-white">
            <h2 class="text-lg font-bold">Appartement à Lyon</h2>
            <p>Prix : 800 000 €</p>
            <p>3 chambres, 2 salles de bain</p>
            <div class="py-1 flex justify-center">
              <router-link to="/property/1" class="bg-yellow-600 text-white py-1 px-3 rounded-lg shadow-md hover:bg-yellow-700 transition-transform transform hover:scale-105">
                Visité ->
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Informations sur l'agence -->
    <section class="agency-info pb-32 md:px-44">
      <div class="container mx-auto">
        <h2 class="text-3xl font-semibold mb-4 mx-5">À propos de nos services</h2>
        <div class="mt-12 space-y-12">
          <!-- Div 1 -->
          <div class="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-xl gap-6 md:gap-24 hover:-translate-x-1 hover:-translate-y-1 duration-150">
            <img src="https://cabinetfoussat.com/wp-content/uploads/2022/09/Nos-conseils-pour-vendre-une-agence-immobilire--1110x554.png" alt="Achat de Propriétés" class="w-full md:w-1/3 h-auto object-cover rounded-lg">
            <div class="w-full md:w-2/3 mt-4 md:mt-0">
              <h3 class="text-xl font-bold mb-2">Achat de Propriétés</h3>
              <p class="hidden md:block">Nous vous accompagnons dans l'achat de propriétés de rêve adaptées à vos besoins et à votre budget. Que vous cherchiez une maison, un appartement, ou une villa, notre équipe d'experts est là pour vous guider tout au long du processus, de la recherche à l'acquisition finale.</p>
              <div class="py-2 flex justify-center">
                <router-link to="/services/achat" class="bg-bleu text-white py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-700 hover:shadow-xl transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                  En savoir plus
                </router-link>
              </div>
            </div>
          </div>

          <!-- Div 2 -->
          <div class="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-xl gap-6 md:gap-24 hover:-translate-x-1 hover:-translate-y-1 duration-150">
            <div class="w-full md:w-2/3">
              <h3 class="text-xl font-bold mb-2">Vente de Propriétés</h3>
              <p class="hidden md:block">Vous souhaitez vendre votre propriété ? Notre équipe d'experts en immobilier met à votre disposition son savoir-faire pour estimer, promouvoir et vendre votre bien dans les meilleures conditions. Nous utilisons des stratégies de marketing efficaces pour attirer des acheteurs potentiels et garantir une vente rapide et au meilleur prix.</p>
              <div class="py-2 flex justify-center">
                <router-link to="/services/vente" class="bg-bleu text-white py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-700 hover:shadow-xl transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                  En savoir plus
                </router-link>
              </div>
            </div>
            <img src="https://www.accrochecoeur-nantes.fr/wp-content/uploads/2023/02/real-estate-broker-and-customer-shaking-hands-afte-2022-10-03-23-26-44-utc.jpg" alt="Vente de Propriétés" class="w-full md:w-1/3 h-auto object-cover rounded-lg">
          </div>

          <!-- Div 3 -->
          <div class="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-xl gap-6 md:gap-24 hover:-translate-x-1 hover:-translate-y-1 duration-150">
            <img src="https://cabinetfoussat.com/wp-content/uploads/2022/09/Nos-conseils-pour-vendre-une-agence-immobilire--1110x554.png" alt="Gestion Locative" class="w-full md:w-1/3 h-auto object-cover rounded-lg">
            <div class="w-full md:w-2/3 mt-4 md:mt-0">
              <h3 class="text-xl font-bold mb-2">Gestion Locative</h3>
              <p class="hidden md:block">Notre service de gestion locative prend en charge tous les aspects de la location de votre bien, de la recherche de locataires à la gestion des contrats et des paiements. Nous nous assurons que votre propriété est bien entretenue et que vous recevez des revenus locatifs réguliers et sans tracas.</p>
              <div class="py-2 flex justify-center">
                <router-link to="/services/gestion-locative" class="bg-bleu text-white py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-700 hover:shadow-xl transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                En savoir plus
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="carousel-container w-full relative overflow-hidden">
      <div class="carousel flex transition-transform duration-300" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(slide, index) in slides" :key="index" class="carousel-slide min-w-full flex-shrink-0">
          <img :src="slide.image" :alt="`Slide ${index + 1}`" class="w-full h-auto">
        </div>
      </div>
      <!-- Navigation Buttons -->
      <button @click="prevSlide" class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full">
        &#10094;
      </button>
      <button @click="nextSlide" class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full">
        &#10095;
      </button>
    </section>
    <!--  -->
    <Footer />
    <!--  -->
  </div>
</template>

<script>
import Header from '../Helper/Header.vue';
import Footer from '../Helper/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      currentIndex: 0,
      slides: [
        { image: 'https://www.proprietesdecharme.com/wp-content/uploads/2023/08/Maison-de-luxe-a-vendre-Vente-maison-de-luxe-Vente-villa-de-luxe-14.jpg' },
        { image: 'https://i.pinimg.com/originals/a8/97/23/a89723b20b5b29d0168d0382389f527e.png' },
        { image: 'https://www.costas-casas.fr/db/huizen/1676/134224_03.jpg' },
        { image: 'https://www.vf-architectures.fr/public/img/big/ArchitectepourvilladeluxeetprestigeCannesarchitectesVF1jpg_5e9c5280605f4.jpg' }
      ]
    };
  },
  methods: {
    prevSlide() {
      this.currentIndex = (this.currentIndex === 0) ? this.slides.length - 1 : this.currentIndex - 1;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
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
.carousel-container {
  position: relative;
}

.carousel {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  min-width: 100%;
}

.carousel img {
  width: 100%;
  height: 400px;
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
