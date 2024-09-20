<!-- Footer.vue -->

<template>
  <!-- Footer -->
  <footer class="bg-green-700 text-white py-12">
    <div class="container mx-auto text-center">
      <div class="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8 border-b pb-3">
        
        <!-- Liens principaux -->
        <div class="flex flex-col space-y-4">
          <h4 class="text-lg font-semibold">Informations</h4>
          <router-link to="/" class="text-white hover:text-gray-400">Accueil</router-link>
          <router-link to="/about" class="text-white hover:text-gray-400">À propos</router-link>
          <router-link to="/properties" class="text-white hover:text-gray-400">Propriétés</router-link>
          <router-link to="/contact" class="text-white hover:text-gray-400">Contact</router-link>
        </div>

        <!-- Services -->
        <div class="flex flex-col space-y-4">
          <h4 class="text-lg font-semibold">Nos Services</h4>
          <a href="#" class="text-white hover:text-gray-400">Achat de Propriétés</a>
          <a href="/formvente" class="text-white hover:text-gray-400">Vente de Propriétés</a>
          <a href="/formlocation" class="text-white hover:text-gray-400">Gestion Locative</a>
          <a href="#" class="text-white hover:text-gray-400">Construstion / Rénovation</a>
          <!-- <a href="#" class="text-white hover:text-gray-400">Suivi / Evaluation des chantiers</a> -->
          <a href="#" class="text-white hover:text-gray-400">Service d'entretien</a>
        </div>

        <!-- Coordonnées -->
        <div class="flex flex-col space-y-4">
          <h4 class="text-lg font-semibold">Contactez-Nous</h4>
          <p>Ville: Godomey Salamey</p>
          <p>Téléphone: (+229) 98 88 98 60 / 66 23 73 68</p>
          <p>Email: hprcoop@gmail.com </p>
        </div>

        <!-- Réseaux sociaux -->
        <div class="flex flex-col space-y-4">
          <h4 class="text-lg font-semibold">Suivez-Nous</h4>
          <a href="https://www.facebook.com/profile.php?id=61565037761287" class="text-white hover:text-gray-400">
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
      
      <p class="text-lg mt-4">© 2024 Votre Agence Immobilière. Tous droits réservés.</p>
      <br>
    </div>
  </footer>
</template>

<script setup>
// Importation de FontAwesomeIcon n'est pas nécessaire ici car il est enregistré globalement dans main.js
</script>

<style scoped>
/* Ajoute des styles spécifiques si nécessaire */
</style>