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
            
            <button 
              type="submit" 
              class="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 w-full transition duration-150 ease-in-out"
              :disabled="!name || !email || !password || !confirmPassword"
            >
              S'inscrire
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
    const router = useRouter();

    const register = async () => {
      // Vérifier si le mot de passe et la confirmation du mot de passe sont identiques
      if (password.value !== confirmPassword.value) {
        registerError.value = 'Les mots de passe ne correspondent pas';
        return;
      }

      try {
        // Appel à l'API pour l'inscription
        const response = await axios.post('https://immobhprcoop.onrender.com/users/register', {
          name: name.value,
          email: email.value,
          password: password.value,
        });

        // Inscription réussie, récupération du token et des informations de l'utilisateur
        const { token, user } = response.data;

        // Stocker le token et les informations utilisateur dans le localStorage
        localStorage.setItem('authToken', token);
        localStorage.setItem('userName', user.name);

        // Redirection vers la page de connexion après inscription réussie
        router.push('/login');
      } catch (error) {
        // Gestion des erreurs lors de l'inscription
        if (error.response && error.response.status === 400) {
          registerError.value = 'L\'inscription a échoué. Veuillez vérifier les informations saisies.';
        } else {
          registerError.value = 'Une erreur est survenue. Veuillez réessayer.';
        }
      }
    };

    return {
      name,
      email,
      password,
      confirmPassword,
      registerError,
      register,
    };
  },
};
</script>

<style scoped>
/* Styles supplémentaires si nécessaire */
</style>
