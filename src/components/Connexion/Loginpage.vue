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
              <input 
                type="email" 
                id="email" 
                v-model="email" 
                class="bg-white px-3 py-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
                required 
              />
            </div>
            <div class="mb-6">
              <label for="password" class="block text-sm font-medium text-gray-700">Mot de Passe</label>
              <input 
                type="password" 
                id="password" 
                v-model="password" 
                class="bg-white px-3 py-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
                required 
              />
            </div>
            
            <!-- Affichage du message d'erreur en cas de problème -->
            <p v-if="loginError" class="text-red-600 mb-4">{{ loginError }}</p>
            
            <div class="flex justify-center">
              <button 
                type="submit" 
                class="bg-green-600 text-white py-2 w-full rounded-full shadow-md transition-transform transform hover:scale-105 flex justify-center items-center"
                :disabled="!email || !password || isLoading">
                <!-- Loader ou texte "Connexion" -->
                <span v-if="isLoading" class="loader mr-2"></span> <!-- Ajout d'un loader -->
                {{ isLoading ? 'Connexion en cours...' : 'Connexion' }}
              </button>
            </div>
          </form>

          <p class="mt-4 text-center">
            Vous n'avez pas de compte? 
            <router-link to="/signin" class="text-blue-600 hover:text-blue-700">
              Inscrivez-vous
            </router-link>
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
    const isLoading = ref(false); // Pour gérer l'état de chargement
    const router = useRouter();

    const login = async () => {
      // Début du chargement
      isLoading.value = true;
      loginError.value = ''; // Réinitialiser les messages d'erreur

      try {
        // Envoi des données de connexion à l'API
        const response = await axios.post('https://immobhprcoop.onrender.com/users/login', {
          email: email.value,
          password: password.value,
        });

        // Si la connexion est réussie
        const { token, user } = response.data;

        // Stockage du token et des informations utilisateur dans le localStorage
        localStorage.setItem('authToken', token);
        localStorage.setItem('userName', user.name);

        // Redirection vers la page d'accueil
        router.push('/');
      } catch (error) {
        // Gestion des erreurs
        if (error.response && error.response.status === 401) {
          loginError.value = 'Email ou mot de passe incorrect';
        } else {
          loginError.value = 'Une erreur est survenue. Veuillez réessayer.';
        }
      } finally {
        // Fin du chargement
        isLoading.value = false;
      }
    };

    return {
      email,
      password,
      loginError,
      isLoading, // Retourner l'état de chargement
      login,
    };
  },
};
</script>

<style scoped>
/* Styles pour le loader */
.loader {
  border: 3px solid #f3f3f3;
  border-top: 3px solid #3498db;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
