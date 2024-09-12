<template>
    <div class="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-6">Mettre en location une propriété</h2>
  
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
  
          <label for="address" class="block text-gray-700 font-bold mb-2 mt-4">Adresse</label>
          <input 
            v-model="form.userAddress" 
            type="text" 
            id="address" 
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
            required
          />
  
          <div class="flex justify-end mt-4">
            <button @click="nextStep" class="bg-yellow-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-yellow-700">
              Suivant
            </button>
          </div>
        </div>
  
        <!-- Étape 2 : Type de propriété -->
        <div v-if="step === 2">
          <h3 class="text-xl font-bold mb-4">Étape 2 : Type de propriété</h3>
          <label for="propertyType" class="block text-gray-700 font-bold mb-2">Type de propriété</label>
          <select 
            v-model="form.propertyType" 
            id="propertyType" 
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
            required
          >
            <option disabled value="">Sélectionnez un type</option>
            <option value="Appartement">Appartement</option>
            <option value="Maison">Maison</option>
            <option value="Villa">Villa</option>
          </select>
          <div class="flex justify-between mt-4">
            <button @click="previousStep" class="bg-gray-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-600">
              Précédent
            </button>
            <button @click="nextStep" class="bg-yellow-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-yellow-700">
              Suivant
            </button>
          </div>
        </div>
  
        <!-- Étape 3 : Détails spécifiques selon le type de propriété -->
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
            <button @click="previousStep" class="bg-gray-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-600">
              Précédent
            </button>
            <button @click="nextStep" class="bg-yellow-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-yellow-700">
              Suivant
            </button>
          </div>
        </div>
  
        <!-- Étape 4 : Informations générales -->
        <div v-if="step === 4">
          <h3 class="text-xl font-bold mb-4">Étape 4 : Informations générales</h3>
  
          <label for="title" class="block text-gray-700 font-bold mb-2">Titre de l'annonce</label>
          <input 
            v-model="form.title" 
            type="text" 
            id="title" 
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
            required
          />
  
          <label for="description" class="block text-gray-700 font-bold mb-2 mt-4">Description</label>
          <textarea 
            v-model="form.description" 
            id="description" 
            rows="5" 
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
            required
          ></textarea>
  
          <label for="price" class="block text-gray-700 font-bold mb-2 mt-4">Prix du loyer (en €)</label>
          <input 
            v-model="form.price" 
            type="number" 
            id="price" 
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
            required
          />
  
          <label for="address" class="block text-gray-700 font-bold mb-2 mt-4">Adresse de la propriété</label>
          <input 
            v-model="form.propertyAddress" 
            type="text" 
            id="propertyAddress" 
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
            required
          />
  
          <label for="availableDate" class="block text-gray-700 font-bold mb-2 mt-4">Date de disponibilité</label>
          <input 
            v-model="form.availableDate" 
            type="date" 
            id="availableDate" 
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
            required
          />
  
          <!-- Boutons de navigation -->
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
  </template>
  
  <script>
  export default {
    data() {
      return {
        step: 1, // Étape actuelle du formulaire
        form: {
          fullName: '',
          email: '',
          phone: '',
          userAddress: '',
          propertyType: '',
          surface: null,
          rooms: null,
          floors: null,
          year: null,
          title: '',
          description: '',
          price: null,
          propertyAddress: '',
          availableDate: '',
        },
      };
    },
    methods: {
      nextStep() {
        if (this.step < 3) {
          this.step++;
        }
      },
      previousStep() {
        if (this.step > 1) {
          this.step--;
        }
      },
      submitForm() {
        // Traitement du formulaire ici
        console.log('Formulaire soumis avec les données suivantes :', this.form);
        alert('Propriété mise en vente avec succès !');
  
        // Réinitialiser le formulaire après soumission
        this.step = 1;
        this.form = {
          propertyType: '',
          surface: null,
          rooms: null,
          floors: null,
          year: null,
          title: '',
          description: '',
          price: null,
          address: ''
        };
      }
    }
  };
  </script>
  
  <style scoped>
  /* Styles supplémentaires si nécessaire */
  </style>   
  