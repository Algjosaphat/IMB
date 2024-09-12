<!-- Footer.vue -->

<template>
  <!-- Footer -->
  <footer class="bg-green-700 text-white py-12">
    <div class="container mx-auto text-center">
      <div class="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8 border-b pb-3">
        
        <!-- Liens principaux -->
        <div class="flex flex-col space-y-4">
          <h4 class="text-lg font-semibold">Informations</h4>
          <a href="#" class="text-white hover:text-gray-400">Accueil</a>
          <a href="#" class="text-white hover:text-gray-400">À propos</a>
          <a href="#" class="text-white hover:text-gray-400">Services</a>
          <a href="#" class="text-white hover:text-gray-400">Contact</a>
        </div>

        <!-- Services -->
        <div class="flex flex-col space-y-4">
          <h4 class="text-lg font-semibold">Nos Services</h4>
          <a href="#" class="text-white hover:text-gray-400">Achat de Propriétés</a>
          <a href="#" class="text-white hover:text-gray-400">Vente de Propriétés</a>
          <a href="#" class="text-white hover:text-gray-400">Gestion Locative</a>
          <a href="#" class="text-white hover:text-gray-400">Estimations Gratuites</a>
        </div>

        <!-- Coordonnées -->
        <div class="flex flex-col space-y-4">
          <h4 class="text-lg font-semibold">Contactez-Nous</h4>
          <p>123 Rue de l'Immobilier, Paris, France</p>
          <p>Téléphone: +33 1 23 45 67 89</p>
          <p>Email: contact@votreagence.com</p>
        </div>

        <!-- Réseaux sociaux -->
        <div class="flex flex-col space-y-4">
          <h4 class="text-lg font-semibold">Suivez-Nous</h4>
          <a href="https://www.facebook.com/login/?locale=fr_FR" class="text-white hover:text-gray-400">
            <font-awesome-icon :icon="['fab', 'facebook-f']" /> Facebook
          </a>
          <a href="https://x.com/home?lang=fr" class="text-white hover:text-gray-400">
            <font-awesome-icon :icon="['fab', 'twitter']" /> Twitter
          </a>
          <a href="https://www.instagram.com/accounts/emailsignup/?next=%2F" class="text-white hover:text-gray-400">
            <font-awesome-icon :icon="['fab', 'instagram']" /> Instagram
          </a>
          <a href="https://www.linkedin.com/company/login" class="text-white hover:text-gray-400">
            <font-awesome-icon :icon="['fab', 'linkedin-in']" /> LinkedIn
          </a>
        </div>
      </div>
      
      <p class="text-lg mt-8">© 2024 Votre Agence Immobilière. Tous droits réservés.</p>
    </div>
  </footer>
</template>

<script setup>
// Importation de FontAwesomeIcon n'est pas nécessaire ici car il est enregistré globalement dans main.js
</script>

<style scoped>
/* Ajoute des styles spécifiques si nécessaire */
</style>
