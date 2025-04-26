<!-- Contact.vue -->

<script setup>
import { ref } from 'vue';
import Heder from '../Helper/Header.vue';
import Foter from '../Helper/Footer.vue';

// État réactif pour le formulaire
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

// État pour le message de succès
const showSuccessMessage = ref(false);

// Informations de contact (faciles à modifier)
const contactInfo = ref({
  address: "Godomey Salamey sixième boutique la von du bar sous-solv en venant du CEG Godomey",
  phone: "(+229) 98 88 98 60 / 66 23 73 68",
  email: "hprcoop@gmail.com",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.990232244203!2d2.292292415674273!3d48.85884407928727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671d5e53b89af%3A0x4582d7a538e2d80!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1656684430514!5m2!1sfr!2sfr"
});

// Méthode pour soumettre le formulaire
const submitForm = () => {
  // Ici vous pourriez implémenter l'envoi réel vers un backend
  console.log('Formulaire soumis', form.value);
  
  // Afficher le message de succès
  showSuccessMessage.value = true;
  
  // Masquer le message après 3 secondes
  setTimeout(() => {
    showSuccessMessage.value = false;
  }, 3000);
  
  // Réinitialiser le formulaire
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
};
</script>

<template>
  <div class="bg-emerald-50 min-h-screen">
    <Heder />
    
    <!-- Hero Section -->
    <div class="relative bg-gradient-to-r from-emerald-600 to-green-400 py-40">
      <div class="container mx-auto px-6 md:px-12 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Contactez-Nous</h1>
        <p class="text-white text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          Nous sommes là pour vous aider. N'hésitez pas à nous contacter pour toute question.
        </p>
      </div>
      <div class="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="w-full h-full">
          <path fill="#ecfdf5" fill-opacity="1" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,165.3C840,171,960,213,1080,218.7C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </div>
    
    <!-- Contenu Principal -->
    <div class="container mx-auto px-6 md:px-12 py-12 relative z-10 -mt-10">
      <div class="bg-white shadow-xl rounded-2xl overflow-hidden">
        <div class="flex flex-col md:flex-row">
          <!-- Informations de Contact -->
          <div class="md:w-2/5 bg-gradient-to-br from-emerald-700 to-green-600 p-8 text-white">
            <div class="h-full flex flex-col">
              <h2 class="text-2xl md:text-3xl font-bold mb-8">Nos Coordonnées</h2>
              
              <div class="space-y-6 mb-8 flex-grow">
                <div class="flex items-start">
                  <div class="bg-emerald-500/30 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-lg mb-1">Adresse</h3>
                    <p class="opacity-90">{{ contactInfo.address }}</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="bg-emerald-500/30 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-lg mb-1">Téléphone</h3>
                    <p class="opacity-90">{{ contactInfo.phone }}</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="bg-emerald-500/30 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-lg mb-1">Email</h3>
                    <p class="opacity-90">{{ contactInfo.email }}</p>
                  </div>
                </div>
              </div>
              
              <div class="mt-auto">
                <h3 class="font-semibold text-lg mb-3">Nos Horaires</h3>
                <div class="grid grid-cols-2 gap-2 opacity-90">
                  <div>Lundi - Vendredi:</div>
                  <div>8h00 - 18h00</div>
                  <div>Samedi:</div>
                  <div>9h00 - 16h00</div>
                  <div>Dimanche:</div>
                  <div>Fermé</div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Formulaire de Contact -->
          <div class="md:w-3/5 p-8">
            <h2 class="text-2xl md:text-3xl font-bold mb-6 text-emerald-800">Envoyez-nous un message</h2>
            <p class="text-gray-600 mb-6">Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.</p>
            
            <!-- Message de succès -->
            <div v-if="showSuccessMessage" class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded animate-pulse">
              <p class="font-medium">Merci pour votre message ! Nous vous contacterons bientôt.</p>
            </div>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <input 
                      type="text" 
                      id="name" 
                      v-model="form.name" 
                      class="pl-10 py-3 px-4 block w-full bg-gray-50 border-gray-200 rounded-lg focus:ring-emerald-500 focus:border-emerald-500" 
                      placeholder="Votre nom" 
                      required 
                    />
                  </div>
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                    </div>
                    <input 
                      type="email" 
                      id="email" 
                      v-model="form.email" 
                      class="pl-10 py-3 px-4 block w-full bg-gray-50 border-gray-200 rounded-lg focus:ring-emerald-500 focus:border-emerald-500" 
                      placeholder="votre.email@exemple.com" 
                      required 
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <input 
                    type="text" 
                    id="subject" 
                    v-model="form.subject" 
                    class="pl-10 py-3 px-4 block w-full bg-gray-50 border-gray-200 rounded-lg focus:ring-emerald-500 focus:border-emerald-500" 
                    placeholder="Sujet de votre message" 
                    required 
                  />
                </div>
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  rows="5" 
                  class="py-3 px-4 block w-full bg-gray-50 border-gray-200 rounded-lg focus:ring-emerald-500 focus:border-emerald-500" 
                  placeholder="Votre message..." 
                  required
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  class="w-full inline-flex justify-center items-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all"
                >
                  <span>Envoyer le message</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <!-- Carte Google Maps -->
      <div class="mt-12 bg-white shadow-lg rounded-2xl overflow-hidden">
        <div class="p-4 md:p-6 bg-emerald-50 border-b border-emerald-100">
          <h2 class="text-2xl font-bold text-emerald-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Notre Localisation
          </h2>
        </div>
        <div class="h-96 w-full">
          <iframe
            class="w-full h-full"
            :src="contactInfo.mapUrl"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
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

/* Animation pour le message de succès */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>