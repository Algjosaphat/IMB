<template>
  <div class="min-h-screen bg-gradient-to-tl from-emerald-50 via-white to-teal-50">
    <!-- Header -->
    <Heder />

    <!-- Contenu principal -->
    <main class="container mx-auto px-4 py-10">
      <!-- Carte de profil -->
      <div class="max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-2xl bg-white">
        <!-- Bannière avec motif -->
        <div class="relative h-40 sm:h-48 bg-gradient-to-r from-emerald-500 to-teal-400 overflow-hidden">
          <div class="absolute inset-0 opacity-20">
            <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23ffffff\' fill-opacity=\'0.5\' fill-rule=\'evenodd\'/%3E%3C/svg%3E');"></div>
          </div>
          <div class="absolute inset-0 flex items-center justify-center">
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-md">
              Mon Profil
            </h1>
          </div>
        </div>
        
        <!-- Photo de profil positionnée pour chevaucher la bannière -->
        <div class="relative -mt-16 px-6 flex justify-center">
          <div class="relative group">
            <div class="w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white">
              <img 
                v-if="profilePictureUrl" 
                :src="profilePictureUrl" 
                alt="Photo de profil" 
                class="w-full h-full object-cover"
              />
              <div v-else class="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <font-awesome-icon :icon="['fas', 'user']" class="text-gray-300 text-5xl" />
              </div>
            </div>
            
            <!-- Overlay pour indiquer qu'on peut changer la photo -->
            <div v-if="showEditForm" class="absolute inset-0 bg-black bg-opacity-40 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 cursor-pointer">
              <font-awesome-icon :icon="['fas', 'camera']" class="text-white text-2xl" />
            </div>
          </div>
        </div>
        
        <!-- Contenu principal du profil -->
        <div class="p-6">
          <!-- Mode aperçu pendant l'édition -->
          <div v-if="showEditForm" class="mb-4 text-center">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
              <font-awesome-icon :icon="['fas', 'eye']" class="mr-1" />
              Mode aperçu
            </span>
          </div>
          
          <!-- Informations de l'utilisateur -->
          <div class="space-y-4 mb-8">
            <div class="text-center">
              <h2 class="text-2xl font-bold text-gray-800">
                {{ userName || 'Utilisateur' }}
              </h2>
              <p class="text-emerald-600 text-sm">Membre depuis {{ new Date().toLocaleDateString() }}</p>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 max-w-2xl mx-auto">
              <div class="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                <div class="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 mr-3">
                  <font-awesome-icon :icon="['fas', 'phone']" />
                </div>
                <div>
                  <p class="text-xs text-gray-500">Téléphone</p>
                  <p class="font-medium">{{ phoneNumber || 'Non renseigné' }}</p>
                </div>
              </div>
              
              <div class="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                <div class="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 mr-3">
                  <font-awesome-icon :icon="['fab', 'whatsapp']" />
                </div>
                <div>
                  <p class="text-xs text-gray-500">WhatsApp</p>
                  <p class="font-medium">{{ whatsappNumber || 'Non renseigné' }}</p>
                </div>
              </div>
              
              <div class="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100 sm:col-span-2">
                <div class="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 mr-3">
                  <font-awesome-icon :icon="['fas', 'calendar']" />
                </div>
                <div>
                  <p class="text-xs text-gray-500">Date de naissance</p>
                  <p class="font-medium">{{ birthDate || 'Non renseignée' }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Bouton pour compléter le profil -->
          <div class="flex justify-center" v-if="!showEditForm">
            <button 
              @click="showEditForm = true"
              class="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <font-awesome-icon :icon="['fas', 'user-edit']" class="mr-2" />
              Compléter mon profil
            </button>
          </div>
          
          <!-- Formulaire pour compléter le profil -->
          <div v-if="showEditForm" class="mt-6">
            <div class="border-b border-gray-200 pb-4 mb-6">
              <h2 class="text-xl font-bold text-emerald-800 flex items-center">
                <font-awesome-icon :icon="['fas', 'id-card']" class="mr-2" />
                Informations personnelles
              </h2>
              <p class="text-sm text-gray-500 mt-1">Complétez vos informations pour personnaliser votre profil</p>
            </div>
            
            <form @submit.prevent="saveProfile" class="space-y-8">
              <!-- Section photo de profil -->
              <div class="flex justify-center mb-6">
                <div class="text-center">
                  <div class="relative inline-block mb-4">
                    <div class="w-28 h-28 rounded-full overflow-hidden border-4 border-emerald-100 shadow-md">
                      <!-- Icône par défaut -->
                      <font-awesome-icon 
                        v-if="!newProfilePicturePreview && !profilePictureUrl" 
                        :icon="['fas', 'user']" 
                        class="text-gray-300 w-full h-full p-6" 
                      />
                      
                      <!-- Image sélectionnée -->
                      <img 
                        v-else 
                        :src="newProfilePicturePreview || profilePictureUrl" 
                        alt="Photo de profil" 
                        class="w-full h-full object-cover" 
                      />
                    </div>
                    
                    <div class="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center border border-gray-200">
                      <font-awesome-icon :icon="['fas', 'camera']" class="text-emerald-500" />
                    </div>
                  </div>
                  
                  <!-- Champ pour télécharger une nouvelle image -->
                  <label class="inline-flex items-center px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-700 cursor-pointer hover:bg-emerald-100 transition-colors">
                    <font-awesome-icon :icon="['fas', 'upload']" class="mr-2" />
                    Modifier ma photo
                    <input 
                      type="file" 
                      @change="onProfilePictureChange" 
                      accept="image/*" 
                      class="hidden" 
                    />
                  </label>
                </div>
              </div>

              <!-- Champs formulaire -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Nom complet -->
                <div>
                  <label for="fullName" class="block text-sm font-medium text-gray-700 mb-1">
                    <font-awesome-icon :icon="['fas', 'user']" class="mr-2 text-emerald-600" />
                    Nom complet
                  </label>
                  <div class="relative">
                    <input 
                      type="text" 
                      v-model="fullName" 
                      id="fullName" 
                      class="block w-full pl-3 pr-10 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" 
                      placeholder="Entrez votre nom complet" 
                      required 
                    />
                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <span class="text-gray-400">
                        <font-awesome-icon :icon="['fas', 'user']" />
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Date de naissance -->
                <div>
                  <label for="birthDate" class="block text-sm font-medium text-gray-700 mb-1">
                    <font-awesome-icon :icon="['fas', 'calendar']" class="mr-2 text-emerald-600" />
                    Date de naissance
                  </label>
                  <div class="relative">
                    <input 
                      type="date" 
                      v-model="birthDate" 
                      id="birthDate" 
                      class="block w-full pl-3 pr-10 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" 
                      required 
                    />
                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <span class="text-gray-400">
                        <font-awesome-icon :icon="['fas', 'calendar']" />
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Numéro de téléphone -->
                <div>
                  <label for="phoneNumber" class="block text-sm font-medium text-gray-700 mb-1">
                    <font-awesome-icon :icon="['fas', 'phone']" class="mr-2 text-emerald-600" />
                    Numéro de téléphone
                  </label>
                  <div class="relative">
                    <input 
                      type="tel" 
                      v-model="phoneNumber" 
                      id="phoneNumber" 
                      class="block w-full pl-3 pr-10 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" 
                      placeholder="Entrez votre numéro de téléphone" 
                      required 
                    />
                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <span class="text-gray-400">
                        <font-awesome-icon :icon="['fas', 'phone']" />
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Numéro WhatsApp -->
                <div>
                  <label for="whatsappNumber" class="block text-sm font-medium text-gray-700 mb-1">
                    <font-awesome-icon :icon="['fab', 'whatsapp']" class="mr-2 text-emerald-600" />
                    Numéro WhatsApp
                  </label>
                  <div class="relative">
                    <input 
                      type="tel" 
                      v-model="whatsappNumber" 
                      id="whatsappNumber" 
                      class="block w-full pl-3 pr-10 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" 
                      placeholder="Entrez votre numéro WhatsApp" 
                    />
                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <span class="text-gray-400">
                        <font-awesome-icon :icon="['fab', 'whatsapp']" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Carte CIP (PDF) -->
              <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  <font-awesome-icon :icon="['fas', 'id-card']" class="mr-2 text-emerald-600" />
                  Carte CIP (format PDF)
                </label>
                <div class="flex flex-col sm:flex-row items-center gap-3">
                  <label class="flex-grow bg-white border border-gray-300 rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors flex items-center justify-center">
                    <font-awesome-icon :icon="['fas', 'file-upload']" class="mr-2 text-emerald-500" />
                    <span>Télécharger votre carte CIP</span>
                    <input 
                      type="file" 
                      @change="onCipPdfChange" 
                      class="hidden" 
                      accept="application/pdf" 
                    />
                  </label>
                  <div v-if="cipPdfName" class="flex items-center px-3 py-2 bg-emerald-50 text-emerald-700 rounded-lg">
                    <font-awesome-icon :icon="['fas', 'file-pdf']" class="mr-2 text-red-500" />
                    <span class="text-sm truncate max-w-xs">{{ cipPdfName }}</span>
                  </div>
                </div>
              </div>

              <!-- Boutons d'action -->
              <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4 border-t border-gray-100">
                <button type="button" @click="showEditForm = false" 
                        class="px-6 py-2.5 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors order-2 sm:order-1">
                  Annuler
                </button>
                <button type="submit" 
                        class="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-400 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all transform hover:translate-y-px order-1 sm:order-2">
                  <font-awesome-icon :icon="['fas', 'save']" class="mr-2" />
                  Enregistrer mon profil
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <!-- Carte CIP prévisualisée si disponible -->
      <div v-if="cipPdfName && !showEditForm" class="max-w-4xl mx-auto mt-6 p-4 bg-white rounded-xl shadow-lg">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <div class="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
              <font-awesome-icon :icon="['fas', 'file-pdf']" class="text-red-500" />
            </div>
            <div>
              <h3 class="font-medium">Carte CIP</h3>
              <p class="text-sm text-gray-500">{{ cipPdfName }}</p>
            </div>
          </div>
          <button class="text-emerald-600 hover:text-emerald-700">
            <font-awesome-icon :icon="['fas', 'download']" />
          </button>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <Foter />
    
    <!-- Notification toast -->
    <div v-if="notification.show" 
         :class="`fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg flex items-center ${notification.isError ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'} transform transition-all duration-500`"
         style="z-index: 50;"
    >
      <font-awesome-icon :icon="[notification.isError ? 'fas' : 'fas', notification.isError ? 'exclamation-circle' : 'check-circle']" class="mr-2" />
      {{ notification.message }}
      <button @click="closeNotification" class="ml-4 text-gray-600 hover:text-gray-800">
        <font-awesome-icon :icon="['fas', 'times']" />
      </button>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import Heder from '../Helper/Header.vue';
import Foter from '../Helper/Footer.vue';
import { ref, onMounted } from 'vue';

// Références réactives
const defaultProfilePicture = '/path/to/default-profile.png';
const profilePictureUrl = ref('');
const newProfilePicturePreview = ref('');
const userName = ref('');
const fullName = ref('');
const birthDate = ref('');
const phoneNumber = ref('');
const whatsappNumber = ref('');
const cipPdfName = ref('');
const showEditForm = ref(false);

// Notification state
const notification = ref({
  show: false,
  message: '',
  isError: false
});

// Récupération des données utilisateur
async function fetchUserProfile() {
  try {
    const response = await axios.get('https://api.example.com/user/profile');
    const data = response.data;

    userName.value = data.userName || 'Nom non renseigné';
    fullName.value = data.fullName || '';
    birthDate.value = data.birthDate || '';
    phoneNumber.value = data.phoneNumber || '';
    whatsappNumber.value = data.whatsappNumber || '';
    
    if (data.profilePictureUrl) {
      profilePictureUrl.value = data.profilePictureUrl;
    }
  } catch (error) {
    console.error("Erreur lors de la récupération du profil utilisateur :", error);
    // Charger les données depuis le localStorage en cas d'échec de l'API
    loadFromLocalStorage();
  }
}

// Charger les données depuis le localStorage
function loadFromLocalStorage() {
  profilePictureUrl.value = localStorage.getItem('profilePictureUrl') || '';
  userName.value = localStorage.getItem('userName') || 'Utilisateur';
  fullName.value = localStorage.getItem('fullName') || '';
  birthDate.value = localStorage.getItem('birthDate') || '';
  phoneNumber.value = localStorage.getItem('phoneNumber') || '';
  whatsappNumber.value = localStorage.getItem('whatsappNumber') || '';
  cipPdfName.value = localStorage.getItem('cipPdfName') || '';
}

// Initialisation au montage du composant
onMounted(() => {
  userName.value = localStorage.getItem('userName') || 'Utilisateur';
  fetchUserProfile();
});

// Gestion de la photo de profil
function onProfilePictureChange(event) {
  const file = event.target.files[0];
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = () => {
      newProfilePicturePreview.value = reader.result;
    };
    reader.readAsDataURL(file);
  }
}

// Gestion du PDF de la carte CIP
function onCipPdfChange(event) {
  const file = event.target.files[0];
  if (file && file.type === 'application/pdf') {
    cipPdfName.value = file.name;
  }
}

// Sauvegarde du profil
async function saveProfile() {
  try {
    // Dans un cas réel, envoyer les données à l'API
    // const formData = new FormData();
    // formData.append('fullName', fullName.value);
    // ...
    // await axios.post('https://api.example.com/user/profile', formData);
    
    // Sauvegarde locale
    if (newProfilePicturePreview.value) {
      profilePictureUrl.value = newProfilePicturePreview.value;
      localStorage.setItem('profilePictureUrl', profilePictureUrl.value);
    }
    
    localStorage.setItem('fullName', fullName.value);
    localStorage.setItem('birthDate', birthDate.value);
    localStorage.setItem('phoneNumber', phoneNumber.value);
    localStorage.setItem('whatsappNumber', whatsappNumber.value);
    localStorage.setItem('cipPdfName', cipPdfName.value);
    
    // Si fullName est rempli, utilisez-le comme userName
    if (fullName.value) {
      userName.value = fullName.value;
      localStorage.setItem('userName', userName.value);
    }

    // Afficher la notification de succès
    showNotification("Votre profil a été mis à jour avec succès !");
    showEditForm.value = false;
  } catch (error) {
    console.error("Erreur lors de la sauvegarde du profil:", error);
    showNotification("Une erreur est survenue lors de la mise à jour de votre profil", true);
  }
}

// Afficher une notification
function showNotification(message, isError = false) {
  notification.value = {
    show: true,
    message,
    isError
  };
  
  // Masquer automatiquement après 4 secondes
  setTimeout(() => {
    closeNotification();
  }, 4000);
}

// Fermer la notification
function closeNotification() {
  notification.value.show = false;
}
</script>