<!-- Footer.vue  -->

<template>
    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-12">
      <div class="container mx-auto text-center">
        <div class="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
          
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
              <i class="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="https://x.com/home?lang=fr" class="text-white hover:text-gray-400">
              <i class="fab fa-twitter"></i> Twitter
            </a>
            <a href="https://www.instagram.com/accounts/emailsignup/?next=%2F" class="text-white hover:text-gray-400">
              <i class="fab fa-instagram"></i> Instagram
            </a>
            <a href="https://www.linkedin.com/company/login" class="text-white hover:text-gray-400">
              <i class="fab fa-linkedin-in"></i> LinkedIn
            </a>
          </div>
        </div>
  
        <p class="text-lg mt-8">© 2024 Votre Agence Immobilière. Tous droits réservés.</p>
      </div>
    </footer>
  </template>
  
  <script setup>
  // Aucune logique spécifique pour le footer
  </script>
  
  <style scoped>
  /* Ajoute des styles spécifiques si nécessaire */
  </style>
  