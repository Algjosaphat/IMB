<template>
  <div>
    <!-- Ajout du header -->
    <Header />

    <div class="max-w-2xl mx-auto p-6 m-10 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-6">Mettre en vente une propriété</h2>

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

          <label for="neighborhood" class="block text-gray-700 font-bold mb-2 mt-4">Quartier</label>
          <input 
            v-model="form.neighborhood" 
            type="text" 
            id="neighborhood" 
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
            required
          />

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

          <label for="userAddress" class="block text-gray-700 font-bold mb-2 mt-4">Adresse</label>
          <input 
            v-model="form.userAddress" 
            type="text" 
            id="userAddress" 
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
            required
          />

          <div class="flex justify-end mt-4">
            <button @click="nextStep" class="bg-yellow-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-yellow-700">
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
            <option disabled value="">Sélectionnez un type</option>
            <option value="Terrain">Terrain</option>
            <option value="Maison">Maison</option>
            <option value="Appartement">Appartement</option>
            <option value="Villa">Villa</option>
          </select>

          <!-- Ajout du champ pour les photos -->
          <label for="photos" class="block text-gray-700 font-bold mb-2 mt-4">Télécharger des photos (max 5)</label>
          <input 
            @change="handleFileUpload" 
            type="file" 
            id="photos" 
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
            multiple
            accept="image/*"
          />


          <div class="flex justify-between mt-4">
            <button @click="previousStep" class="bg-gray-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-600">
              Précédent
            </button>
            <button @click="nextStep" class="bg-yellow-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-yellow-700">
              Suivant
            </button>
          </div>
        </div>

        <!-- Étape 3 : Détails spécifiques -->
        <div v-if="step === 3">
          <h3 class="text-xl font-bold mb-4">Étape 3 : Détails sur la propriété</h3>
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
            <button @click="previousStep" class="bg-gray-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-600">
              Précédent
            </button>
            <button type="submit" class="bg-yellow-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-yellow-700">
              Soumettre
            </button>
          </div>
        </div>
      </form>
    </div>

    <!-- Ajout du footer -->
    <Footer />
  </div>
</template>

<script>
import Header from '../Helper/Header.vue';
import Footer from '../Helper/Footer.vue';

export default {
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
  nextStep() {
    if (this.step < 4) {
      this.step++;
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
