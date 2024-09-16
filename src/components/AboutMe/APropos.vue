<!-- APropos.vue -->

<template>
  <div>
    <Heder />
    <div class="container mx-auto py-32 px-14">
      <h1 class="text-4xl font-bold text-center mb-8">À Propos de Nous</h1>
      <div class="bg-white shadow-lg rounded-lg p-8 mb-8">
        <h2 class="text-2xl font-semibold mb-4">Notre Mission</h2>
        <p class="text-gray-700 mb-4">
          Chez Votre Agence Immobilière, notre mission est de fournir un service immobilier exceptionnel en offrant une expertise approfondie et un soutien personnalisé à chacun de nos clients. Nous nous engageons à vous aider à trouver la propriété de vos rêves ou à vendre votre bien au meilleur prix.
        </p>
        <p class="text-gray-700">
          Avec des années d'expérience dans le secteur immobilier, nous mettons tout en œuvre pour vous offrir des conseils avisés, une approche professionnelle et une transparence totale tout au long de votre parcours immobilier.
        </p>
      </div>
      <div class="bg-white shadow-lg rounded-lg p-8">
        <h2 class="text-2xl font-semibold mb-4">Notre Équipe</h2>
        <div class="flex flex-wrap -mx-4">
          <div class="w-full md:w-1/3 px-4 mb-8">
            <div class="bg-gray-100 p-6 rounded-lg text-center">
              <img src="https://via.placeholder.com/150" alt="Équipe 1" class="w-32 h-32 mx-auto rounded-full mb-4" />
              <h3 class="text-xl font-semibold">Jean Dupont</h3>
              <p class="text-gray-600">Directeur Général</p>
              <p class="mt-2">Jean est un expert en immobilier avec plus de 20 ans d'expérience. Il supervise toutes les opérations de l'agence et veille à ce que chaque client reçoive un service de premier ordre.</p>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-4 mb-8">
            <div class="bg-gray-100 p-6 rounded-lg text-center">
              <img src="https://via.placeholder.com/150" alt="Équipe 2" class="w-32 h-32 mx-auto rounded-full mb-4" />
              <h3 class="text-xl font-semibold">Marie Martin</h3>
              <p class="text-gray-600">Conseillère Immobilière</p>
              <p class="mt-2">Marie est spécialisée dans la vente de propriétés résidentielles. Elle est passionnée par aider ses clients à trouver leur maison idéale et a une connaissance approfondie du marché local.</p>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-4 mb-8">
            <div class="bg-gray-100 p-6 rounded-lg text-center">
              <img src="https://via.placeholder.com/150" alt="Équipe 3" class="w-32 h-32 mx-auto rounded-full mb-4" />
              <h3 class="text-xl font-semibold">Paul Lefevre</h3>
              <p class="text-gray-600">Responsable de la Gestion Locative</p>
              <p class="mt-2">Paul s'occupe de la gestion des propriétés locatives. Il veille à ce que les propriétaires et les locataires bénéficient d'une gestion efficace et sans souci.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Foter />
  </div>
</template>

<script>
import Heder from '../Helper/Header.vue';
import Foter from '../Helper/Footer.vue';

export default {
  components: {
    Heder,
    Foter,
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
