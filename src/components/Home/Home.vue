<!-- Home.vue -->

<template>
  <div>
    <!-- Header -->
    <Header />

    <!-- Section hero -->
    <div ref="heroSection" class="hero-section h-screen flex items-center bg-fixed bg-cover bg-center flex justify-center">
      <div class="bg-black bg-opacity-50 text-center p-10 rounded-xl mx-3">
        <h1 class="text-4xl font-bold text-white mb-4">Bienvenue à HPR COOP SARL</h1>
        <p class="text-lg text-white mb-6">Trouvez votre maison de rêve parmi nos offres exclusives</p>
        <div class="md:flex justify-center">
          <router-link to="/properties" class=" bg-green-600 text-white py-1 px-6 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500">
            Voir plus <font-awesome-icon :icon="['fas', 'arrow-right']" />
          </router-link>
        </div>
      </div>
    </div>

    <!-- Propriétés en Vedette -->
    <section class="featured-properties py-16 md:py-24 mx-5 md:mx-0">
      <h2 class="text-3xl font-semibold text-center mb-8">Propriétés en Vedette</h2>
      <div class="flex flex-wrap gap-6 justify-center">
        <!-- Property 1 -->
        <div class="relative bg-cover bg-center h-80 w-full sm:w-80 md:w-96 lg:w-1/4 rounded-md " 
             :style="{ backgroundImage: 'url(https://www.architoi.com/wp-content/uploads/2022/07/ralph-ravi-kayden-mR1CIDduGLc-unsplash-1024x679.jpg)' }">
          <div class="absolute bottom-4 bg-black bg-opacity-60 p-4 mx-5 rounded-lg text-white w-11/12">
            <h2 class="text-lg font-bold">Maison Moderne à Paris</h2>
            <p>Prix : 1 200 000 €</p>
            <p>4 chambres, 3 salles de bain, jardin</p>
            <div class="py-1 flex justify-center">
              <router-link to="/property/1" class="bg-green-600 text-white py-1 px-3 rounded-full shadow-md hover:bg-green-600 transition-transform transform hover:scale-105">
                Visité <font-awesome-icon :icon="['fas', 'eye']" />
              </router-link>
            </div>
          </div>
        </div>

        <!-- Property 2 -->
        <div class="relative bg-cover bg-center h-80 w-full sm:w-80 md:w-96 lg:w-1/4 rounded-md " 
             :style="{ backgroundImage: 'url(https://media.inmobalia.com/imgV1/B98Le8~d7Me7MjCwPLJ6Ayra8IUhJ5ktnTPjoqTXEgsEG0U7f5gnGvKgfz7aB8oKA_XWwr_PYfPFkRpynsJ0kvms_koqAmhpoOHQYRswhYQFl3Ad0eZY.jpeg)' }">
             <div class="absolute bottom-4 bg-black bg-opacity-60 p-4 mx-5 rounded-lg text-white w-11/12">
              <h2 class="text-lg font-bold">Villa Luxueuse à Nice</h2>
            <p>Prix : 2 500 000 €</p>
            <p>5 chambres, 4 salles de bain, piscine</p> 
            <div class="py-1 flex justify-center">
              <router-link to="/property/1" class="bg-green-600 text-white py-1 px-3 rounded-full shadow-md hover:bg-green-600 transition-transform transform hover:scale-105">
                Visité <font-awesome-icon :icon="['fas', 'eye']" />
              </router-link>
            </div>
          </div>
        </div>

        <!-- Property 3 -->
        <div class="relative bg-cover bg-center h-80 w-full sm:w-80 md:w-96 lg:w-1/4 rounded-md" 
             :style="{ backgroundImage: 'url(https://www.vf-architectures.fr/public/img/big/ArchitectepourvilladeluxeetprestigeCannesarchitectesVF1jpg_5e9c5280605f4.jpg)' }">
             <div class="absolute bottom-4 bg-black bg-opacity-60 p-4 mx-5 rounded-lg text-white w-11/12">
              <h2 class="text-lg font-bold">Appartement à Lyon</h2>
            <p>Prix : 800 000 €</p>
            <p>3 chambres, 2 salles de bain</p>
            <div class="py-1 flex justify-center">
              <router-link to="/property/1" class="bg-green-600 text-white py-1 px-3 rounded-full shadow-md hover:bg-green-600 transition-transform transform hover:scale-105">
                Visité <font-awesome-icon :icon="['fas', 'eye']" />
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
          <div class="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-xl gap-6 md:gap-24 ">
            <img src="https://cabinetfoussat.com/wp-content/uploads/2022/09/Nos-conseils-pour-vendre-une-agence-immobilire--1110x554.png" alt="Achat de Propriétés" class="w-full md:w-1/3 h-auto object-cover rounded-lg">
            <div class="w-full md:w-2/3 mt-4 md:mt-0">
              <h3 class="text-xl font-bold mb-2">Achat de Propriétés</h3>
              <p class="hidden md:block">Nous vous accompagnons dans l'achat de propriétés de rêve adaptées à vos besoins et à votre budget. Que vous cherchiez une maison, un appartement, ou une villa, notre équipe d'experts est là pour vous guider tout au long du processus, de la recherche à l'acquisition finale.</p>
              <div class="py-2 flex justify-start">
                <router-link to="/properties" class="bg-green-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-green-600 hover:shadow-xl transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                  En savoir plus <font-awesome-icon :icon="['fas', 'arrow-right']" />
                </router-link>
              </div>
            </div>
          </div>

          <!-- Div 2 -->
          <div class="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-xl gap-6 md:gap-24">
            <div class="w-full md:w-2/3">
              <h3 class="text-xl font-bold mb-2 text-right">Vente de Propriétés</h3>
              <p class="hidden md:block text-right">Vous souhaitez vendre votre propriété ? Notre équipe d'experts en immobilier met à votre disposition son savoir-faire pour estimer, promouvoir et vendre votre bien dans les meilleures conditions. Nous utilisons des stratégies de marketing efficaces pour attirer des acheteurs potentiels et garantir une vente rapide et au meilleur prix.</p>
              <div class="py-2 flex justify-end">
                <router-link to="/formvente" class="bg-green-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-green-600 hover:shadow-xl transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                  <font-awesome-icon :icon="['fas', 'arrow-left']" /> En savoir plus
                </router-link>
              </div>
            </div>
            <img src="https://www.accrochecoeur-nantes.fr/wp-content/uploads/2023/02/real-estate-broker-and-customer-shaking-hands-afte-2022-10-03-23-26-44-utc.jpg" alt="Vente de Propriétés" class="w-full md:w-1/3 h-auto object-cover rounded-lg">
          </div>

          <!-- Div 3 -->
          <div class="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-xl gap-6 md:gap-24">
            <img src="https://cabinetfoussat.com/wp-content/uploads/2022/09/Nos-conseils-pour-vendre-une-agence-immobilire--1110x554.png" alt="Gestion Locative" class="w-full md:w-1/3 h-auto object-cover rounded-lg">
            <div class="w-full md:w-2/3 mt-4 md:mt-0">
              <h3 class="text-xl font-bold mb-2">Gestion Locative</h3>
              <p class="hidden md:block">Notre service de gestion locative prend en charge tous les aspects de la location de votre bien, de la recherche de locataires à la gestion des contrats et des paiements. Nous nous assurons que votre propriété est bien entretenue et que vous recevez des revenus locatifs réguliers et sans tracas.</p>
              <div class="py-2 flex justify-start">
                <router-link to="/formlocation" class="bg-green-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-green-600 hover:shadow-xl transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                En savoir plus <font-awesome-icon :icon="['fas', 'arrow-right']" />
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-10">
      <h1 class="text-2xl font-bold text-center mb-8">3 ÉTAPES À SUIVRE</h1>
      <div class="flex flex-col md:flex-row justify-around items-center md:space-x-6 space-y-8 md:space-y-0">
        <div class="flex flex-col items-center">
          <span class="text-xl md:text-2xl font-semibold mb-4">Faîtes vos choix</span>
          <font-awesome-icon 
            :icon="['fas', 'wand-magic-sparkles']" 
            size="lg" 
            style="color: #63E6BE;" 
            class="text-2xl bg-slate-100 rounded-full w-10 h-10 md:w-20 md:h-20 p-6 md:p-10" 
          />
        </div>

        <div class="flex flex-col items-center">
          <span class="text-xl md:text-2xl font-semibold mb-4">Contactez-Nous</span>
          <font-awesome-icon 
            :icon="['fas', 'phone']" 
            size="lg" 
            style="color: #63E6BE;" 
            class="text-2xl bg-slate-100 rounded-full w-10 h-10 md:w-20 md:h-20 p-6 md:p-10" 
          />
        </div>

        <div class="flex flex-col items-center">
          <span class="text-xl md:text-2xl font-semibold mb-4">Procedons aux demarches</span>
          <font-awesome-icon 
            :icon="['fas', 'search']" 
            size="lg" 
            style="color: #63E6BE;" 
            class="text-2xl bg-slate-100 rounded-full w-10 h-10 md:w-20 md:h-20 p-6 md:p-10" 
          />
        </div>
      </div>
    </section>

        <!-- Carrousel de témoignages -->
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
