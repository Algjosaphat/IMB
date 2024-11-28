<template class>

  <Heder/>
    <div class="h-screen items-center flex justify-center bg-slate-100">
      <div class="max-w-2xl mx-auto p-5 md:p-12 mx-2 bg-white rounded-lg shadow-md ">
        <h2 class="text-2xl font-bold mb-6"  v-if="!isSubmitted">Mettre en location une propriété</h2>
    
        <form v-if="!isSubmitted" @submit.prevent="submitForm">
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
              <button @click="nextStep" class="bg-green-600 text-white py-1 px-3 rounded-full shadow-md hover:bg-green-600 transition-transform transform hover:scale-105">
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
            <div class="flex justify-between mt-4">
              <button @click="previousStep" class="bg-green-600 text-white py-1 px-3 rounded-full shadow-md hover:bg-green-600 transition-transform transform hover:scale-105">
                Précédent
              </button>
              <button @click="nextStep" class="bg-green-600 text-white py-1 px-3 rounded-full shadow-md hover:bg-green-600 transition-transform transform hover:scale-105">
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
              <button @click="previousStep" class="bg-green-600 text-white py-1 px-3 rounded-full shadow-md hover:bg-green-600 transition-transform transform hover:scale-105">
                Précédent
              </button>
              <button @click="nextStep" class="bg-green-600 text-white py-1 px-3 rounded-full shadow-md hover:bg-green-600 transition-transform transform hover:scale-105">
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

  <Foter/>
</template>
  
<script>
import Heder from "../Helper/Header.vue";
import Foter from "../Helper/Footer.vue";

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
        fullName: "",
        email: "",
        phone: "",
        userAddress: "",
        propertyType: "",
        otherPropertyType: "",
        surface: null,
        rooms: null,
        floors: null,
        year: null,
        title: "",
        description: "",
        price: null,
        propertyAddress: "",
        availableDate: "",
      },
    };
  },
  methods: {
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
      if (this.step > 1) this.step--;
    },
    submitForm() {
      console.log("Formulaire soumis :", this.form);
      this.isSubmitted = true;
    },
    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>


  
  <style scoped>
  /* Styles supplémentaires si nécessaire */
  </style>   