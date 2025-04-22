<template>
  <div ref="heroSection" class="hero-section relative h-screen flex items-center justify-center overflow-hidden">
    <!-- Overlay gradient pour améliorer la lisibilité -->
    <div class="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
    
    <!-- Contenu principal -->
    <div class="relative z-10 container mt-16 mx-auto px-4">
      <div class="max-w-3xl bg-black bg-opacity-40 backdrop-blur-sm p-8 md:p-12 rounded-xl border-l-4 border-green-500 shadow-2xl transform transition-all duration-300 hover:shadow-green-500/30">
        <div class="flex flex-col items-start text-left">
          <!-- Logo ou badge d'entreprise -->
          <div class="inline-block bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-6">
            EXPERT BTP
          </div>
          
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-2">HPR COOP SARL</h1>
          <div class="w-20 h-1 bg-green-500 mb-6"></div>
          <h2 class="text-2xl md:text-3xl font-semibold text-green-400 mb-4">Experts en marchés de construction</h2>
          <p class="text-lg text-gray-100 mb-8 max-w-xl">Réalisez vos projets de construction avec un partenaire fiable et expérimenté. De la conception à la livraison, nous garantissons qualité et respect des délais.</p>
          
          <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <router-link to="/Services" class="group bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg flex items-center justify-center transition-all duration-300 shadow-lg">
              <span class="mr-2">Nos services</span>
              <font-awesome-icon :icon="['fas', 'hard-hat']" class="transform group-hover:rotate-12 transition-transform duration-300" />
            </router-link>
            <button @click="showQuoteModal = true" class="group bg-white hover:bg-gray-100 text-green-800 py-3 px-6 rounded-lg flex items-center justify-center transition-all duration-300 shadow-lg">
              <span class="mr-2">Demander un devis</span>
              <font-awesome-icon :icon="['fas', 'file-signature']" class="transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Éléments décoratifs -->
    <div class="absolute bottom-10 left-10 hidden md:block">
      <div class="flex space-x-4">
        <div class="w-3 h-3 rounded-full bg-green-500"></div>
        <div class="w-3 h-3 rounded-full bg-white"></div>
        <div class="w-3 h-3 rounded-full bg-green-700"></div>
      </div>
    </div>
  </div>

  <!-- Modal de demande de devis -->
  <div v-if="showQuoteModal" class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-90vh overflow-y-auto transform transition-all duration-300 animate-fadeIn">
      <div class="p-6 border-b border-gray-200 flex justify-between items-center">
        <h3 class="text-2xl font-bold text-green-700">Demande de devis projet de construction</h3>
        <button @click="showQuoteModal = false" class="text-gray-500 hover:text-gray-700 focus:outline-none">
          <font-awesome-icon :icon="['fas', 'times']" class="text-2xl" />
        </button>
      </div>
      
      <form @submit.prevent="submitQuote" class="p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Informations sur le client -->
          <div class="md:col-span-2">
            <h4 class="text-lg font-semibold mb-3 text-gray-700 flex items-center">
              <font-awesome-icon :icon="['fas', 'user']" class="mr-2 text-green-600" />
              Vos coordonnées
            </h4>
          </div>
          
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Nom complet *</label>
            <input type="text" v-model="quoteForm.name" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
          </div>
          
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Email *</label>
            <input type="email" v-model="quoteForm.email" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
          </div>
          
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Téléphone *</label>
            <input type="tel" v-model="quoteForm.phone" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
          </div>
          
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Vous êtes</label>
            <select v-model="quoteForm.clientType" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
              <option value="particular">Particulier</option>
              <option value="company">Entreprise</option>
              <option value="public">Collectivité</option>
            </select>
          </div>
          
          <!-- Informations sur le projet -->
          <div class="md:col-span-2 mt-4">
            <h4 class="text-lg font-semibold mb-3 text-gray-700 flex items-center">
              <font-awesome-icon :icon="['fas', 'building']" class="mr-2 text-green-600" />
              Détails du projet
            </h4>
          </div>
          
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Type de projet *</label>
            <select v-model="quoteForm.projectType" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
              <option value="residential">Construction résidentielle</option>
              <option value="commercial">Construction commerciale</option>
              <option value="industrial">Bâtiment industriel</option>
              <option value="renovation">Rénovation</option>
              <option value="extension">Extension de bâtiment</option>
              <option value="other">Autre</option>
            </select>
          </div>
          
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Surface approximative (m²)</label>
            <input type="number" v-model="quoteForm.area" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
          </div>
          
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Budget estimé (FCFA)</label>
            <input type="number" v-model="quoteForm.budget" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
          </div>
          
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Délai souhaité</label>
            <select v-model="quoteForm.deadline" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
              <option value="urgent">Urgent (< 3 mois)</option>
              <option value="short">Court terme (3-6 mois)</option>
              <option value="medium">Moyen terme (6-12 mois)</option>
              <option value="long">Long terme (> 12 mois)</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>
          
          <div class="mb-4 md:col-span-2">
            <label class="block text-sm font-medium text-gray-700 mb-1">Localisation du projet *</label>
            <input type="text" v-model="quoteForm.location" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="Adresse ou quartier">
          </div>
          
          <div class="mb-4 md:col-span-2">
            <label class="block text-sm font-medium text-gray-700 mb-1">Description détaillée du projet *</label>
            <textarea v-model="quoteForm.description" required rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="Décrivez votre projet, vos besoins spécifiques, contraintes, etc."></textarea>
          </div>
          
          <!-- Services souhaités -->
          <div class="md:col-span-2 mt-4">
            <h4 class="text-lg font-semibold mb-3 text-gray-700 flex items-center">
              <font-awesome-icon :icon="['fas', 'list-check']" class="mr-2 text-green-600" />
              Services souhaités
            </h4>
            <p class="text-sm text-gray-500 mb-3">Sélectionnez les services dont vous avez besoin :</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div class="flex items-center">
                <input type="checkbox" id="design" v-model="quoteForm.services.design" class="w-4 h-4 text-green-600 focus:ring-green-500 rounded">
                <label for="design" class="ml-2 text-sm text-gray-700">Conception et plans</label>
              </div>
              
              <div class="flex items-center">
                <input type="checkbox" id="permits" v-model="quoteForm.services.permits" class="w-4 h-4 text-green-600 focus:ring-green-500 rounded">
                <label for="permits" class="ml-2 text-sm text-gray-700">Démarches administratives</label>
              </div>
              
              <div class="flex items-center">
                <input type="checkbox" id="construction" v-model="quoteForm.services.construction" class="w-4 h-4 text-green-600 focus:ring-green-500 rounded">
                <label for="construction" class="ml-2 text-sm text-gray-700">Construction</label>
              </div>
              
              <div class="flex items-center">
                <input type="checkbox" id="materials" v-model="quoteForm.services.materials" class="w-4 h-4 text-green-600 focus:ring-green-500 rounded">
                <label for="materials" class="ml-2 text-sm text-gray-700">Fourniture de matériaux</label>
              </div>
              
              <div class="flex items-center">
                <input type="checkbox" id="supervision" v-model="quoteForm.services.supervision" class="w-4 h-4 text-green-600 focus:ring-green-500 rounded">
                <label for="supervision" class="ml-2 text-sm text-gray-700">Supervision de chantier</label>
              </div>
              
              <div class="flex items-center">
                <input type="checkbox" id="turnkey" v-model="quoteForm.services.turnkey" class="w-4 h-4 text-green-600 focus:ring-green-500 rounded">
                <label for="turnkey" class="ml-2 text-sm text-gray-700">Projet clé en main</label>
              </div>
            </div>
          </div>
          
          <!-- Pièces jointes -->
          <div class="md:col-span-2 mt-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Documents (plans, croquis, références...)</label>
            <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
              <div class="space-y-1 text-center">
                <font-awesome-icon :icon="['fas', 'upload']" class="mx-auto h-12 w-12 text-gray-400" />
                <div class="flex text-sm text-gray-600">
                  <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500">
                    <span>Télécharger un fichier</span>
                    <input id="file-upload" name="file-upload" type="file" class="sr-only" multiple>
                  </label>
                  <p class="pl-1">ou glisser-déposer</p>
                </div>
                <p class="text-xs text-gray-500">PNG, JPG, PDF jusqu'à 10MB</p>
              </div>
            </div>
          </div>
          
          <!-- Notes supplémentaires -->
          <div class="md:col-span-2 mt-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Notes supplémentaires</label>
            <textarea v-model="quoteForm.notes" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="Toute information complémentaire qui pourrait nous aider à mieux comprendre votre projet"></textarea>
          </div>
          
          <!-- Consentement RGPD -->
          <div class="md:col-span-2 mt-4">
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input id="terms" type="checkbox" v-model="quoteForm.consent" required class="w-4 h-4 text-green-600 focus:ring-green-500 rounded">
              </div>
              <div class="ml-3 text-sm">
                <label for="terms" class="text-gray-700">J'accepte que mes données soient utilisées pour le traitement de ma demande de devis. *</label>
                <p class="text-gray-500 text-xs mt-1">En soumettant ce formulaire, vous acceptez notre politique de confidentialité.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-6 flex justify-end space-x-3">
          <button type="button" @click="showQuoteModal = false" class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300">
            Annuler
          </button>
          <button type="submit" class="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center">
            <font-awesome-icon :icon="['fas', 'paper-plane']" class="mr-2" />
            Envoyer ma demande
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

// État pour l'affichage du modal
const showQuoteModal = ref(false);

// État du formulaire
const quoteForm = reactive({
  name: '',
  email: '',
  phone: '',
  clientType: 'particular',
  projectType: '',
  area: null,
  budget: null,
  deadline: 'medium',
  location: '',
  description: '',
  services: {
    design: false,
    permits: false,
    construction: false,
    materials: false,
    supervision: false,
    turnkey: false
  },
  notes: '',
  consent: false
});

// Méthode pour soumettre le formulaire
const submitQuote = () => {
  // Ici, vous ajouterez la logique pour envoyer les données à votre backend
  console.log('Formulaire soumis:', quoteForm);
  
  // Simulation d'envoi réussi
  alert('Votre demande de devis a été envoyée avec succès. Nous vous contacterons dans les plus brefs délais.');
  
  // Fermeture du modal
  showQuoteModal.value = false;
  
  // Réinitialisation du formulaire
  resetForm();
};

// Méthode pour réinitialiser le formulaire
const resetForm = () => {
  quoteForm.name = '';
  quoteForm.email = '';
  quoteForm.phone = '';
  quoteForm.clientType = 'particular';
  quoteForm.projectType = '';
  quoteForm.area = null;
  quoteForm.budget = null;
  quoteForm.deadline = 'medium';
  quoteForm.location = '';
  quoteForm.description = '';
  quoteForm.services.design = false;
  quoteForm.services.permits = false;
  quoteForm.services.construction = false;
  quoteForm.services.materials = false;
  quoteForm.services.supervision = false;
  quoteForm.services.turnkey = false;
  quoteForm.notes = '';
  quoteForm.consent = false;
};
</script>

<style scoped>
.hero-section {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('@/assets/hero1.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  transition: all 0.5s ease;
}

@media (max-width: 768px) {
  .hero-section {
    background-attachment: scroll;
  }
}

.max-h-90vh {
  max-height: 90vh;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out forwards;
}
</style>