<!-- APropos.vue -->

<script setup>
import { ref } from 'vue';
import Heder from '../Helper/Header.vue';
import Foter from '../Helper/Footer.vue';
import imageDG from '../../assets/images/DG.svg'
import imageCI from '../../assets/images/CI.svg'
import imageRGL from '../../assets/images/RGL.svg'

// Données dynamiques pour la section équipe
const equipe = ref([
  {
    id: 1,
    nom: "Roland Houedeou",
    poste: "Directeur Général",
    description: "Jean est un expert en immobilier avec plus de 20 ans d'expérience. Il supervise toutes les opérations de l'agence et veille à ce que chaque client reçoive un service de premier ordre.",
    image: imageDG
  },
  {
    id: 2,
    nom: "Yokébèd Allagbe",
    poste: "Conseillère Immobilière",
    description: "Marie est spécialisée dans la vente de propriétés résidentielles. Elle est passionnée par aider ses clients à trouver leur maison idéale et a une connaissance approfondie du marché local.",
    image: imageCI
  },
  {
    id: 3,
    nom: "Paul Lefevre",
    poste: "Responsable de la Gestion Locative",
    description: "Paul s'occupe de la gestion des propriétés locatives. Il veille à ce que les propriétaires et les locataires bénéficient d'une gestion efficace et sans souci.",
    image: imageRGL
  }
]);

// Données dynamiques pour la section valeurs
const valeurs = ref([
  {
    id: 1,
    titre: "Intégrité",
    description: "Nous croyons en la transparence totale dans toutes nos interactions. Notre réputation est fondée sur l'honnêteté et le respect de nos engagements."
  },
  {
    id: 2,
    titre: "Excellence",
    description: "Nous nous efforçons constamment d'améliorer nos services et de dépasser les attentes de nos clients dans chaque transaction immobilière."
  },
  {
    id: 3,
    titre: "Innovation",
    description: "Nous adoptons les technologies et méthodes les plus récentes pour offrir une expérience immobilière moderne et efficace."
  },
  {
    id: 4,
    titre: "Accessibilité",
    description: "Nous sommes disponibles et à l'écoute, prêts à répondre à vos questions et à vous accompagner à chaque étape de votre projet immobilier."
  }
]);
</script>

<template>
  <div class="bg-emerald-50 min-h-screen">
    <Heder />
    <div class="container mx-auto py-20 px-6 md:px-10">
      <h1 class="text-4xl md:text-5xl font-bold text-center mb-12 mt-10 text-emerald-800">À Propos de Nous</h1>
      
      <!-- Section Mission -->
      <div class="bg-white shadow-xl rounded-xl p-8 mb-12 transform transition-all hover:scale-[1.01] border-l-4 border-emerald-500">
        <h2 class="text-2xl md:text-3xl font-semibold mb-6 text-emerald-700 flex items-center">
          <span class="mr-3">🏡</span> Notre Mission
        </h2>
        <div class="text-gray-700 space-y-4 text-lg leading-relaxed">
          <p>
            Chez Votre Agence Immobilière, notre mission est de fournir un service immobilier exceptionnel en offrant une expertise approfondie et un soutien personnalisé à chacun de nos clients. Nous nous engageons à vous aider à trouver la propriété de vos rêves ou à vendre votre bien au meilleur prix.
          </p>
          <p>
            Avec des années d'expérience dans le secteur immobilier, nous mettons tout en œuvre pour vous offrir des conseils avisés, une approche professionnelle et une transparence totale tout au long de votre parcours immobilier.
          </p>
        </div>
      </div>
      
      <!-- Section Équipe - Dynamique -->
      <div class="bg-white shadow-xl rounded-xl p-8 mb-12">
        <h2 class="text-2xl md:text-3xl font-semibold mb-8 text-emerald-700 flex items-center">
          <span class="mr-3">👥</span> Notre Équipe
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Boucle sur les membres de l'équipe -->
          <div 
            v-for="membre in equipe" 
            :key="membre.id" 
            class="rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
          >
            <div class="bg-gradient-to-br from-emerald-100 to-green-50 p-6 rounded-t-xl">
              <div class="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
                <img :src="membre.image" :alt="membre.nom" class="w-full h-full object-cover" />
              </div>
            </div>
            <div class="p-6 bg-white">
              <h3 class="text-xl font-bold text-emerald-700">{{ membre.nom }}</h3>
              <p class="text-emerald-500 font-medium mb-3">{{ membre.poste }}</p>
              <p class="text-gray-600">{{ membre.description }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Section Valeurs - Dynamique -->
      <div class="bg-white shadow-xl rounded-xl p-8 mb-12">
        <h2 class="text-2xl md:text-3xl font-semibold mb-6 text-emerald-700 flex items-center">
          <span class="mr-3">💎</span> Nos Valeurs
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div 
            v-for="valeur in valeurs" 
            :key="valeur.id"
            class="p-6 rounded-lg bg-gradient-to-r from-emerald-50 to-green-50 shadow-md"
          >
            <h3 class="text-xl font-semibold text-emerald-700 mb-3">{{ valeur.titre }}</h3>
            <p class="text-gray-700">{{ valeur.description }}</p>
          </div>
        </div>
      </div>
      
    </div>
    <Foter />
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
</style>