<template>
  <div>
    <!-- Ajout du header -->
    <Heder />

    <div class="h-screen items-center flex justify-center bg-slate-100">
      <div class="max-w-2xl mx-auto p-12 m-10 bg-white rounded-lg shadow-md">
        <h2 class=" flex justify-center text-2xl font-bold mb-6">Mettre en vente une propriété</h2>
  
        <form @submit.prevent="submitForm">
          <!-- Étape 1 : Informations personnelles -->
          <div v-if="step === 1">
            <h3 class="text-xl font-bold mb-4">Étape 1 : Informations personnelles</h3>
            <label for="fullName" class="block text-gray-700 font-bold mb-2">Nom complet</label>
            <input 
              v-model="form.fullName" 
              type="text" 
              id="fullName" 
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
              required
            />
            <!-- Ajout des champs ville et quartier -->
            <label for="city" class="block text-gray-700 font-bold mb-2 mt-4">Ville</label>
            <input 
              v-model="form.city" 
              type="text" 
              id="city" 
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
              required
            />
  
            <!-- <label for="neighborhood" class="block text-gray-700 font-bold mb-2 mt-4">Adresse (Quartier)</label>
            <input 
              v-model="form.neighborhood" 
              type="text" 
              id="neighborhood" 
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
              required
            /> -->
  
            <label for="email" class="block text-gray-700 font-bold mb-2 mt-4">Email</label>
            <input 
              v-model="form.email" 
              type="email" 
              id="email" 
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
              required
            />
  
            <label for="phone" class="block text-gray-700 font-bold mb-2 mt-4">Téléphone</label>
            <input 
              v-model="form.phone" 
              type="tel" 
              id="phone" 
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
              required
            />
  
            <label for="userAddress" class="block text-gray-700 font-bold mb-2 mt-4">Adresse et ou (Quartier)</label>
            <input 
              v-model="form.userAddress" 
              type="text" 
              id="userAddress" 
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
              required
            />
  
            <div class="flex justify-end mt-4">
              <button @click="nextStep" class="bg-green-600 text-white py-1 px-3 rounded-full shadow-md hover:bg-green-600 transition-transform transform hover:scale-105">
                Suivant
              </button>
            </div>
          </div>
  
          <!-- Étape 2 : Type de propriété et photos -->
          <div v-if="step === 2">
            <h3 class="text-xl font-bold mb-4">Étape 2 : Type de propriété et Photos</h3>
            <label for="propertyType" class="block text-gray-700 font-bold mb-2">Type de propriété</label>
            <select 
              v-model="form.propertyType" 
              id="propertyType" 
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
              required
            >
              <option disabled>Sélectionnez un type</option>
              <option value="Appartement">Appartement</option>
              <option value="Maison">Maison</option>
              <option value="Villa">Villa</option>
              <option value="Terrain">Terrain</option>
              <option value="Boutique">Boutique</option>
              <option value="Autre">Autre...</option>
            </select>
  
            <div v-if="form.propertyType === 'Autre'" class="">
              <label for="otherPropertyType" class="block text-gray-700 font-bold mb-2 mt-4">Quel autre type de propriété ?</label>
              <input
                v-model="form.otherPropertyType"
                id="otherPropertyType"
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                required
              />
            </div>
  
            <!-- Ajout du champ pour les photos -->
            <label for="photos" class="block text-gray-700 font-bold mb-2 mt-4">Télécharger des photos (min 5)</label>
            <input 
              @change="handleFileUpload" 
              type="file" 
              id="photos1" 
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
              multiple
              accept="image/*"
            />
            <input 
              @change="handleFileUpload" 
              type="file" 
              id="photos2" 
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
              multiple
              accept="image/*"
            />
            <input 
              @change="handleFileUpload" 
              type="file" 
              id="photos3" 
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
              multiple
              accept="image/*"
            />
            <input 
              @change="handleFileUpload" 
              type="file" 
              id="photos4" 
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
              multiple
              accept="image/*"
            />
            <input 
              @change="handleFileUpload" 
              type="file" 
              id="photos5" 
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
              multiple
              accept="image/*"
            />
  
  
            <div class="flex justify-between mt-4">
              <button @click="previousStep" class="bg-green-600 text-white py-1 px-3 rounded-full shadow-md hover:bg-green-600 transition-transform transform hover:scale-105">
                Précédent
              </button>
              <button @click="nextStep" class="bg-green-600 text-white py-1 px-3 rounded-full shadow-md hover:bg-green-600 transition-transform transform hover:scale-105">
                Suivant
              </button>
            </div>
          </div>
  
          <!-- Étape 3 : Détails spécifiques -->
          <div v-if="step === 3">
            <h3 class="text-xl font-bold mb-4">Étape 3 : Détails sur la propriété</h3>
            <label for="surface" class="block text-gray-700 font-bold mb-2">Superficie (en m²)</label>
            <input 
              v-model="form.surface" 
              type="number" 
              id="surface" 
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
              required
            />
    
            <label for="rooms" class="block text-gray-700 font-bold mb-2 mt-4">Nombre de pièces</label>
            <input 
              v-model="form.rooms" 
              type="number" 
              id="rooms" 
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
              required
            />
    
            <label for="floors" class="block text-gray-700 font-bold mb-2 mt-4">Nombre d'étages</label>
            <input 
              v-model="form.floors" 
              type="number" 
              id="floors" 
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
            />
    
            <label for="year" class="block text-gray-700 font-bold mb-2 mt-4">Année de construction</label>
            <input 
              v-model="form.year" 
              type="number" 
              id="year" 
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
            />
    
            <div class="flex justify-between mt-4">
              <button @click="previousStep" class="bg-green-600 text-white py-1 px-3 rounded-full shadow-md hover:bg-green-600 transition-transform transform hover:scale-105">
                Précédent
              </button>
              <button @click="nextStep" class="bg-green-600 text-white py-1 px-3 rounded-full shadow-md hover:bg-green-600 transition-transform transform hover:scale-105">
                Suivant
              </button>
            </div>
            <!-- Si le type est Terrain ou autre -->
            <!-- ... (même structure que précédemment) -->
          </div>
  
          <!-- Étape 4 : Frais de traitement -->
          <div v-if="step === 4">
            <h3 class="text-xl font-bold mb-4">Étape 4 : Frais de traitement</h3>
            <label for="momoPay" class="block text-gray-700 font-bold mb-2">Frais via MoMo Pay</label>
            <input 
              v-model="form.momoPay" 
              type="number" 
              id="momoPay" 
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
              required
            />
            <div class="flex justify-between mt-4">
              <button @click="previousStep" class="bg-green-600 text-white py-1 px-3 rounded-full shadow-md hover:bg-green-600 transition-transform transform hover:scale-105">
                Précédent
              </button>
              <button type="submit" class="bg-green-600 text-white py-1 px-3 rounded-full shadow-md hover:bg-green-600 transition-transform transform hover:scale-105">
                Soumettre
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <!-- Ajout du footer -->
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
  data() {
    return {
      step: 1,
      form: {
        fullName: '',
        email: '',
        phone: '',
        userAddress: '',
        city: '',
        neighborhood: '',
        propertyType: '',
        surface: null,
        rooms: null,
        floors: null,
        year: null,
        title: '',
        description: '',
        price: null,
        propertyAddress: '',
        photos: [],
        momoPay: null
      }
    };
  },
  methods: {
    validateStep() {
      this.errors = {}; // Réinitialiser les erreurs
      if (this.step === 1) {
        if (!this.form.fullName) this.errors.fullName = "Le nom complet est requis.";
        if (!this.form.email) this.errors.email = "L'email est requis.";
        if (!this.form.phone) this.errors.phone = "Le numéro de téléphone est requis.";
        if (!this.form.city) this.errors.city = "La ville est requise.";
        if (!this.form.neighborhood) this.errors.neighborhood = "Le quartier est requis.";
      }
      if (this.step === 2) {
        if (!this.form.propertyType) this.errors.propertyType = "Le nom complet est requis.";
        if (!this.form.photos1) this.errors.photos1 = "Sélectionnez une photo";
        if (!this.form.photos2) this.errors.photos2 = "Sélectionnez une photo";
        if (!this.form.photos3) this.errors.photos3 = "Sélectionnez une photo";
        if (!this.form.photos4) this.errors.photos4 = "Sélectionnez une photo";
      }
      // Ajoutez ici la validation pour d'autres étapes si nécessaire
      return Object.keys(this.errors).length === 0;
    },
    nextStep() {
      const validators = [
        () => this.form.fullName && this.form.email && this.form.phone && this.form.userAddress,
        () =>
          this.form.propertyType &&
          (this.form.propertyType !== "Autre" || this.form.otherPropertyType),
        () => this.form.surface && this.form.rooms,
        () => this.form.title && this.form.description && this.form.price,
      ];
      if (validators[this.step - 1]()) {
        this.step++;
      } else {
        // alert("Veuillez remplir tous les champs requis.");
        return
      }
    },
  previousStep() {
    if (this.step > 1) {
      this.step--;
    }
  },
  submitForm() {
    console.log('Formulaire soumis avec les données suivantes :', this.form);
    alert('Propriété mise en vente avec succès !');
    this.step = 1;
    this.resetForm();
  },
  handleFileUpload(event) {
    this.form.photos = Array.from(event.target.files);
  },
  resetForm() {
    this.form = {
      fullName: '',
      email: '',
      phone: '',
      userAddress: '',
      city: '',
      neighborhood: '',
      propertyType: '',
      surface: null,
      rooms: null,
      floors: null,
      year: null,
      title: '',
      description: '',
      price: null,
      propertyAddress: '',
      photos: [],
      momoPay: null
    };
  }
}

};
</script>

<style scoped>
/* Styles supplémentaires si nécessaire */
</style>
