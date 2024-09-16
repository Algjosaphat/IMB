<!-- Propriétés en Vedette -->

<template>
    
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

</template>

<script setup>
// Importation de FontAwesomeIcon n'est pas nécessaire ici car il est enregistré globalement dans main.js
</script>

<style scoped>
/* Ajoute des styles spécifiques si nécessaire */
</style>