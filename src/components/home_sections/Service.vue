<!-- Informations sur l'agence -->

<template>

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

</template>

<script setup>
// Importation de FontAwesomeIcon n'est pas nécessaire ici car il est enregistré globalement dans main.js
</script>

<style scoped>
/* Ajoute des styles spécifiques si nécessaire */
</style>