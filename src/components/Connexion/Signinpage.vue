<template>
  <div class="py-7 bg-slate-200 h-screen flex items-center justify-center">
    <div class="container mx-auto flex justify-center items-center">
      <div class="flex flex-col md:flex-row-reverse w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <!-- Image -->
        <div class="w-full md:w-1/2 hidden md:block">
          <img src="https://www.vf-architectures.fr/public/img/big/meilleurarchitecteCannespourvillamaisonluxejpg_637123da2fa64.jpg" alt="Background Image" class="w-full h-full object-cover"/>
        </div>
        
        <!-- Formulaire d'inscription -->
        <div class="w-full md:w-1/2 p-8 py-9 bg-gray-100 flex flex-col justify-center">
          <h2 class="text-2xl font-semibold mb-6 text-center">S'inscrire</h2>
          <form @submit.prevent="register">
            <div class="mb-4">
              <label for="name" class="block text-sm font-medium text-gray-700">Nom</label>
              <input type="text" id="name" v-model="name" class="bg-white px-3 py-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
            </div>
            <div class="mb-4">
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" v-model="email" class="bg-white px-3 py-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
            </div>
            <div class="mb-4">
              <label for="password" class="block text-sm font-medium text-gray-700">Mot de Passe</label>
              <input type="password" id="password" v-model="password" class="bg-white px-3 py-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
            </div>
            <div class="mb-6">
              <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirmez le Mot de Passe</label>
              <input 
                type="password" 
                id="confirmPassword" 
                v-model="confirmPassword" 
                class="bg-white px-3 py-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
                required 
              />
            </div>

            <!-- Affichage du message d'erreur si les mots de passe ne correspondent pas ou si une autre erreur survient -->
            <p v-if="registerError" class="text-red-600 mb-4">{{ registerError }}</p>
            
            <!-- Bouton avec un loader et désactivé pendant le chargement -->
            <button 
              type="submit" 
              class="bg-green-600 flex justify-center text-white py-2 w-full rounded-full shadow-md transition-transform transform hover:scale-105"
              :disabled="!name || !email || !password || !confirmPassword || isLoading">
              <!-- Loader ou texte -->
              <span v-if="isLoading" class="loader mr-2"></span> <!-- Ajout d'une icône spinner ou loader -->
              {{ isLoading ? 'En cours...' : 'S\'inscrire' }}
            </button>
          </form>

          <p class="mt-4 text-center">
            Vous avez déjà un compte? 
            <router-link to="/login" class="text-blue-600 hover:text-blue-700">
              Se connecter
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
    const name = ref('');
    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const registerError = ref('');
    const isLoading = ref(false);  // État de chargement
    const router = useRouter();

    const register = async () => {
      // Vérifier si les mots de passe correspondent
      if (password.value !== confirmPassword.value) {
        registerError.value = 'Les mots de passe ne correspondent pas';
        return;
      }

      // Début du chargement
      isLoading.value = true;
      registerError.value = ''; // Réinitialiser le message d'erreur

      try {
        // Appel à l'API pour l'inscription
        const response = await axios.post('https://immobhprcoop.onrender.com/users/register', {
          name: name.value,
          email: email.value,
          password: password.value,
        });

        // Si l'inscription est réussie
        if (response.data) {
          // Stocker le token et le nom de l'utilisateur dans le localStorage
          const { token, user } = response.data;
          localStorage.setItem('authToken', token);
          localStorage.setItem('userName', user.name);

          // Rediriger vers la page de connexion
          router.push('/login');
        }
      } catch (error) {
        // Gestion des erreurs d'inscription
        if (error.response && error.response.status === 400) {
          registerError.value = 'L\'inscription a échoué. Veuillez vérifier les informations saisies.';
        } else {
// 111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            // Appeler l'API de connexion après l'inscription
            const loginResponse = await axios.post('https://immobhprcoop.onrender.com/users/login', {
              email: email.value,
              password: password.value,
            });
            const { token, user } = loginResponse.data;
            localStorage.setItem('authToken', token);
            localStorage.setItem('userName', user.name);
            router.push('/');
// 111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
          // router.push('/login');
        }
      } finally {
        // Fin du chargement
        isLoading.value = false;
      }
    };

    return {
      name,
      email,
      password,
      confirmPassword,
      registerError,
      isLoading,  // Retourner l'état isLoading
      register,
    };
  },
};
</script>

<style scoped>
/* Styles supplémentaires pour le loader */
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
