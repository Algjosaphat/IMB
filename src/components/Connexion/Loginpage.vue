<!-- Loginpage.vue -->

<template>
    <div class="py-7 bg-slate-200">
      <div class="container mx-auto h-screen flex justify-center items-center px-4">
        <div class="flex w-full max-w-6xl bg-slate-200 shadow-lg rounded-lg overflow-hidden p-10 mx-20">
          <!-- Image -->
          <div class="w-1/2 hidden md:block">
            <img src="https://www.vf-architectures.fr/public/img/big/meilleurarchitecteCannespourvillamaisonluxejpg_637123da2fa64.jpg" alt="Background Image" class="w-full h-full object-cover rounded-xl"/>
          </div>
          
          <!-- Formulaire de connexion -->
          <div class="w-full md:w-1/2 p-8 py-9">
            <h2 class="text-2xl font-semibold mb-6 text-center">Se Connecter</h2>
            <form @submit.prevent="login">
              <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" v-model="email" class="bg-slate-100 px-3 py-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm" required />
              </div>
              <div class="mb-4">
                <label for="password" class="block text-sm font-medium text-gray-700">Mot de Passe</label>
                <input type="password" id="password" v-model="password" class="bg-slate-100 px-3 py-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm" required />
              </div>
              <button type="submit" class="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full">
                Connexion
              </button>
            </form>
            <p class="mt-4 text-center">
              Vous n'avez pas de compte? <router-link to="/register" class="text-blue-600 hover:text-blue-700">Inscrivez-vous</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Header from '../Helper/Header.vue';
  import Footer from '../Helper/Footer.vue';
  
  export default {
    components: {
      Header,
      Footer,
    },
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Implémente la logique de connexion ici
        console.log('Email:', this.email);
        console.log('Mot de Passe:', this.password);
        // Par exemple, vérifier les identifiants avec un service d'authentification
        alert('Connexion réussie !');
        // Réinitialiser les champs après connexion
        this.email = '';
        this.password = '';
      }
    }
  };
  </script>
  
  <style scoped>
  /* Styles supplémentaires si nécessaire */
  </style>
  