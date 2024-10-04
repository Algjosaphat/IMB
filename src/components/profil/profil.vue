<template>
  <div class="profile-page">
    <!-- Importation du Header -->
    <Heder />

    <!-- Contenu principal de la page de profil -->
     <div class="p-6"></div>
    <div class="container mx-auto p-8 bg-white rounded-lg shadow-lg mt-8">
      <h1 class="text-4xl font-bold mb-4 text-center" style="color: darkgreen;">Mon Profil</h1>
      
      <!-- Affichage des informations utilisateur -->
      <div class="profile-info bg-green-50 p-6 rounded-lg shadow-md">
        <div v-if="showEditForm" class="flex justify-center" style="color: darkolivegreen;">Aperçu</div>
        <div class="flex items-center mb-6">
          <!-- Photo de profil ou icône par défaut -->
          <div v-if="profilePictureUrl">
            <img :src="profilePictureUrl" alt="Photo de profil" class="rounded-full w-32 h-32 object-cover mr-6" />
          </div>
          <div v-else class="text-gray-500 w-32 h-32 rounded-full mr-6" style="background-color: darkgray;">
            <font-awesome-icon :icon="['fas', 'user']" class="text-gray-500 w-32 h-24 rounded-full p-1" />
          </div>
          <div>
            <span class="mr-2 text-black">
              {{ userName || 'Nom non renseigné' }}
            </span>
            <p class="text-gray-600">{{ phoneNumber || 'Téléphone non renseigné' }}</p>
            <p class="text-gray-600">{{ whatsappNumber || 'WhatsApp non renseigné' }}</p>
            <p class="text-gray-600">{{ birthDate || 'Date de naissance non renseignée' }}</p>
          </div>
        </div>

        <!-- Bouton pour compléter le profil -->
        <div class="text-center">
          <button @click="showEditForm = true" class="bg-green-600 text-white py-2 p-6 rounded-full shadow-md transition-transform hover:scale-105">
            Compléter mon profil
          </button>
        </div>
      </div>

      <!-- Formulaire pour compléter le profil -->
      <div v-if="showEditForm" class="mt-8 bg-blue-50 p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold mb-4">Compléter mon profil</h2>
        
        <form @submit.prevent="saveProfile" class="space-y-6">
          <!-- Photo de profil avec option de téléchargement -->
                    <!-- Photo de profil avec option de téléchargement -->
                    <div class="flex flex-col items-center mb-6">
            <!-- Affiche l'icône FontAwesome si aucune image de profil n'est définie -->
            <font-awesome-icon 
              v-if="!newProfilePicturePreview && !profilePictureUrl && defaultProfilePicture" 
              :icon="['fas', 'user']" 
              class="text-gray-500 w-32 h-32 rounded-full p-1" 
              style="color: #16A31A;"
            />
            
            <!-- Affiche une image si elle est disponible -->
            <img 
              v-else 
              :src="newProfilePicturePreview || profilePictureUrl || defaultProfilePicture" 
              alt="Photo de profil" 
              class="rounded-full w-32 h-32 object-cover mb-4" 
            /> 
            
            <!-- Champ pour télécharger une nouvelle image -->
            <input 
              type="file" 
              @change="onProfilePictureChange" 
              accept="image/*" 
              class="mt-2" 
            />
          </div>

          <!-- Nom complet -->
          <div>
            <label for="fullName" class="block font-semibold">Nom complet :</label>
            <input type="text" v-model="fullName" id="fullName" class="input-field" placeholder="Entrez votre nom complet" required />
          </div>

          <!-- Date de naissance -->
          <div>
            <label for="birthDate" class="block font-semibold">Date de naissance :</label>
            <input type="date" v-model="birthDate" id="birthDate" class="input-field" required />
          </div>

          <!-- Numéro de téléphone -->
          <div>
            <label for="phoneNumber" class="block font-semibold">Numéro de téléphone :</label>
            <input type="tel" v-model="phoneNumber" id="phoneNumber" class="input-field" placeholder="Entrez votre numéro de téléphone" required />
          </div>

          <!-- Numéro WhatsApp -->
          <div>
            <label for="whatsappNumber" class="block font-semibold">Numéro WhatsApp :</label>
            <input type="tel" v-model="whatsappNumber" id="whatsappNumber" class="input-field" placeholder="Entrez votre numéro WhatsApp" />
          </div>

          <!-- Carte CIP (PDF) -->
          <div>
            <label class="block font-semibold">Télécharger votre carte CIP (format PDF) :</label>
            <input type="file" @change="onCipPdfChange" class="mt-2" accept="application/pdf" />
            <p v-if="cipPdfName" class="mt-2 text-gray-600">Fichier sélectionné : {{ cipPdfName }}</p>
          </div>

          <!-- Bouton de sauvegarde -->
          <div class="text-center">
            <button type="submit" class="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition-all transform hover:scale-105">
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Importation du Footer -->
    <Foter />
  </div>
</template>

<script setup>
import axios from 'axios'; // Importer axios
import Heder from '../Helper/Header.vue'; // Importer le composant Header
import Foter from '../Helper/Footer.vue'; // Importer le composant Footer
import { ref, onMounted } from 'vue';

const defaultProfilePicture = '/path/to/default-profile.png'; // Image de profil par défaut
const profilePictureUrl = ref('');
const userName = ref('');
const fullName = ref(''); 
const birthDate = ref('');
const phoneNumber = ref('');
const whatsappNumber = ref('');
const cipPdfName = ref('');
const showEditForm = ref(false);  // Contrôle l'affichage du formulaire de complétion

// Fonction pour récupérer les données utilisateur via l'API
async function fetchUserProfile() {
  try {
    const response = await axios.get('https://api.example.com/user/profile'); // URL de l'API
    const data = response.data;

    // Mise à jour des informations utilisateur depuis l'API
    userName.value = data.userName || 'Nom non renseigné';
    fullName.value = data.fullName || '';
    birthDate.value = data.birthDate || 'Date de naissance non renseignée';
    phoneNumber.value = data.phoneNumber || 'Téléphone non renseigné';
    whatsappNumber.value = data.whatsappNumber || 'WhatsApp non renseigné';
    
    // Remplacement de l'image par celle fournie par l'API
    if (data.profilePictureUrl) {
      profilePictureUrl.value = data.profilePictureUrl;
    } else {
      profilePictureUrl.value = defaultProfilePicture; // Utilisation de l'image par défaut
    }
  } catch (error) {
    console.error("Erreur lors de la récupération du profil utilisateur :", error);
  }
}

// Chargement des informations utilisateur au montage de la page
onMounted(() => {
  userName.value = localStorage.getItem('userName') || 'Utilisateur'; // Nom de l'utilisateur connecté
  fetchUserProfile(); // Appeler l'API pour charger les données utilisateur
});

// onMounted(() => {
//   // Récupération des données utilisateur depuis localStorage
//   profilePictureUrl.value = localStorage.getItem('profilePictureUrl') || '';
//   userName.value = localStorage.getItem('userName') || 'Utilisateur'; // Nom de l'utilisateur connecté
//   fullName.value = localStorage.getItem('fullName') || '';
//   birthDate.value = localStorage.getItem('birthDate') || '';
//   phoneNumber.value = localStorage.getItem('phoneNumber') || '';
//   whatsappNumber.value = localStorage.getItem('whatsappNumber') || '';
//   cipPdfName.value = localStorage.getItem('cipPdfName') || '';
// });

// Gestion de la photo de profil locale si l'utilisateur souhaite la changer
function onProfilePictureChange(event) {
  const file = event.target.files[0];
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = () => {
      profilePictureUrl.value = reader.result; // Charger l'image dans le navigateur
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
function saveProfile() {
  // Sauvegarde locale ou API
  localStorage.setItem('profilePictureUrl', profilePictureUrl.value);
  localStorage.setItem('fullName', fullName.value);
  localStorage.setItem('birthDate', birthDate.value);
  localStorage.setItem('phoneNumber', phoneNumber.value);
  localStorage.setItem('whatsappNumber', whatsappNumber.value);
  localStorage.setItem('cipPdfName', cipPdfName.value);

  alert('Profil mis à jour !');
  showEditForm.value = false; // Fermer le formulaire après la sauvegarde
}


</script>


<style scoped>
.profile-page {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f9f9f9;
}

.input-field {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.375rem;
  margin-top: 0.5rem;
  box-sizing: border-box;
}

.profile-info {
  background-color: #f0fdf4;
  border: 2px solid #bbf7d0;
}

button {
  transition: transform 0.3s ease-out;
}

button:hover {
  transform: scale(1.05);
}
</style>
