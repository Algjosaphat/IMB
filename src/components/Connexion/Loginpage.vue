<!-- Loginpage.vue -->

<template>
  <div class="py-7 bg-slate-200 h-screen flex items-center justify-center">
    <div class="container mx-auto flex justify-center items-center">
      <div class="flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <!-- Image -->
        <div class="w-full md:w-1/2 hidden md:block">
          <img src="https://www.vf-architectures.fr/public/img/big/meilleurarchitecteCannespourvillamaisonluxejpg_637123da2fa64.jpg" alt="Background Image" class="w-full h-full object-cover"/>
        </div>
        
        <!-- Formulaire de connexion -->
        <div class="w-full md:w-1/2 p-8 py-9 bg-gray-100 flex flex-col justify-center">
          <h2 class="text-2xl font-semibold mb-6 text-center">Se Connecter</h2>
          <form @submit.prevent="login">
            <div class="mb-4">
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" v-model="email" class="bg-white px-3 py-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
            </div>
            <div class="mb-6">
              <label for="password" class="block text-sm font-medium text-gray-700">Mot de Passe</label>
              <input type="password" id="password" v-model="password" class="bg-white px-3 py-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
            </div> 
            <button to="/" class="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 w-full text-center transition duration-150 ease-in-out" v-if="email && password">
              <router-link to="/" >Connexion</router-link>
            </button>
          </form>
          <p class="mt-4 text-center">
            Vous n'avez pas de compte? <router-link to="/signin" class="text-blue-600 hover:text-blue-700">Inscrivez-vous</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const loginError = ref(''); // Pour stocker le message d'erreur en cas d'échec
    const router = useRouter();

    const login = async () => {
      try {
        // Envoi des données de connexion à l'API
        const response = await axios.post('https://immobhprcoop.onrender.com/users/login', {
          email: email.value,
          password: password.value,
        });

        // Si la connexion est réussie, l'API renverra un token et des informations sur l'utilisateur
        const { token, user } = response.data;

        // Stockage du token et des informations utilisateur dans le localStorage
        localStorage.setItem('authToken', token);
        localStorage.setItem('userName', user.name);

        // Redirection vers la page d'accueil après une connexion réussie
        router.push('/');
      } catch (error) {
        // Gestion des erreurs, notamment si les identifiants sont incorrects (erreur 401)
        if (error.response && error.response.status === 401) {
          loginError.value = 'Email ou mot de passe incorrect';
        } else {
          loginError.value = 'Une erreur est survenue. Veuillez réessayer.';
        }
      }
    };

    return {
      email,
      password,
      loginError, // Utilisé pour afficher les erreurs
      login,
    };
  },
};
</script>

<style scoped>
/* Styles supplémentaires si nécessaire */
.error {
  color: red;
}
</style>
