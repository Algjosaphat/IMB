<template>
  <Heder />
  <div class="justify-center items-center flex h-screen bg-slate-100">
  <div class="max-w-2xl mx-auto p-12 m-10 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-6" v-if="!isSubmitted">Demande d'achat de propriété</h2>

    <form v-if="!isSubmitted" @submit.prevent="submitForm">
      <!-- Étape initiale : Choix du type de propriété à acheter -->
      <div v-if="step === 1">
        <div class="mb-4">
          <label class="block text-gray-700 font-medium mb-2">Quel type de propriété souhaitez-vous acheter ?</label>
          <div class="flex items-center space-x-4">
            <label class="flex items-center">
              <input type="radio" name="propertyType" value="Appartement" v-model="form.propertyType" class="text-indigo-600 focus:ring-indigo-500">
              <span class="ml-2 text-gray-700">Appartement</span>
            </label> 
            <label class="flex items-center">
              <input type="radio" name="propertyType" value="Maison" v-model="form.propertyType" class="text-indigo-600 focus:ring-indigo-500">
              <span class="ml-2 text-gray-700">Maison</span>
            </label>
            <label class="flex items-center">
              <input type="radio" name="propertyType" value="Terrain" v-model="form.propertyType" class="text-indigo-600 focus:ring-indigo-500">
              <span class="ml-2 text-gray-700">Terrain</span>
            </label>
          </div>
        </div>
        <div class="flex justify-end mt-4">
          <button @click="nextStep" :disabled="!form.propertyType" class="bg-green-600 text-white py-1 px-3 rounded-full shadow-md hover:bg-green-700 transition-transform transform hover:scale-105">
            Suivant
          </button>
        </div>
      </div>

      <!-- Étape 2 : Informations personnelles -->
      <div v-if="step === 2">
        <h3 class="text-xl font-bold mb-4">Étape 2 : Informations personnelles</h3>
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

        <div class="flex justify-between mt-4">
          <button @click="previousStep" class="bg-green-600 text-white py-1 px-3 rounded-full shadow-md hover:bg-green-600 transition-transform transform hover:scale-105">
            Précédent
          </button>
          <button @click="nextStep" class="bg-green-600 text-white py-1 px-3 rounded-full shadow-md hover:bg-green-600 transition-transform transform hover:scale-105">
            Suivant
          </button>
        </div>
      </div>

      <!-- Étape 3 : Budget et localisation souhaitée -->
      <div v-if="step === 3">
        <h3 class="text-xl font-bold mb-4">Étape 3 : Budget et localisation</h3>

        <label for="budget" class="block text-gray-700 font-bold mb-2">Budget (en €)</label>
        <input 
          v-model="form.budget" 
          type="number" 
          id="budget" 
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
          required
        />

        <label for="location" class="block text-gray-700 font-bold mb-2 mt-4">Quartier souhaité</label>
        <input 
          v-model="form.location" 
          type="text" 
          id="location" 
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
          required
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

      <!-- Étape 4 : Caractéristiques spécifiques de la propriété -->
      <div v-if="step === 4">
        <h3 class="text-xl font-bold mb-4">Étape 4 : Caractéristiques de la propriété</h3>

        <label for="surface" class="block text-gray-700 font-bold mb-2">Superficie (en m²)</label>
        <input 
          v-model="form.surface" 
          type="number" 
          id="surface" 
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
          required
        />

        <label v-if="form.propertyType !== 'Terrain'" for="rooms" class="block text-gray-700 font-bold mb-2 mt-4">Nombre de pièces</label>
        <input 
          v-if="form.propertyType !== 'Terrain'"
          v-model="form.rooms" 
          type="number" 
          id="rooms" 
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

    <!-- Message de confirmation -->
    <div v-else class="text-center p-6">
      <h3 class="text-2xl font-bold text-green-700">Votre demande a été envoyée avec succès !</h3>
      <p class="text-gray-700 mt-4">Merci pour votre demande. Nous vous contacterons dans les plus brefs délais pour discuter de votre recherche de propriété.</p>
      <button @click="goToHome" class="mt-6 bg-green-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-green-700 transition-transform transform hover:scale-105">
        Retour à l'accueil
      </button>
    </div>
  </div>
</div>
  <Foter />
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
      isSubmitted: false,
      form: {
        propertyType: '',
        fullName: '',
        email: '',
        phone: '',
        budget: null,
        location: '',
        surface: null,
        rooms: null,
      },
    };
  },
  methods: {
    nextStep() {
      if (this.step === 1 && !this.form.propertyType) {
        alert("Veuillez sélectionner un type de propriété.");
        return;
      }
      if (this.step === 2 && (!this.form.fullName || !this.form.email || !this.form.phone)) {
        alert("Veuillez remplir toutes les informations personnelles.");
        return;
      }
      if (this.step === 3 && (!this.form.budget || !this.form.location)) {
        alert("Veuillez remplir le budget et la localisation.");
        return;
      }
      this.step++;
    },
    previousStep() {
      if (this.step > 1) this.step--;
    },
    submitForm() {
      this.isSubmitted = true;
    },
    goToHome() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.bg-white {
  background-color: #FFFFFF;
}
</style>
