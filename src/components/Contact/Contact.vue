<!-- Contact.vue -->

<template>
  <div>
    <Heder />
    <div class="container mx-auto py-28 px-14">
      <h1 class="text-4xl font-bold text-center mb-8">Nous Contacter</h1>
      <div class="flex flex-col md:flex-row md:space-x-8">
        <!-- Formulaire de Contact -->
        <div class="md:w-1/2 bg-white shadow-lg rounded-lg p-6">
          <h2 class="text-2xl font-semibold mb-4">Envoyez-nous un message</h2>
          <form @submit.prevent="submitForm">
            <div class="mb-4">
              <label for="name" class="block text-sm font-medium text-gray-700">Nom</label>
              <input type="text" id="name" v-model="form.name" placeholder="votre nom..." class="bg-slate-100 ps-2 py-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm" required />
            </div>
            <div class="mb-4">
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" v-model="form.email" placeholder="votre E-mail..." class="bg-slate-100 ps-2 py-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm" required />
            </div>
            <div class="mb-4">
              <label for="subject" class="block text-sm font-medium text-gray-700">Sujet</label>
              <input type="text" id="subject" v-model="form.subject" placeholder="votre sujet..." class="bg-slate-100 ps-2 py-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm" required />
            </div>
            <div class="mb-4">
              <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" v-model="form.message" rows="4" placeholder="Votre message..." class="bg-slate-100 ps-2 py-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm" required></textarea>
            </div>
            <div class="flex justify-center ">
              <button type="submit" class="bg-green-600 text-white py-2 w-full rounded-full shadow-md transition-transform transform hover:scale-105">
                Envoyer
              </button>
            </div>
          </form>
        </div>
        <!-- Informations de Contact -->
        <div class="md:w-1/2 mt-8 md:mt-0 space-y-4">
          <h2 class="text-2xl font-semibold mb-4">Informations de Contact</h2>
          <p class="mb-2">Godomey Salamey sixième boutique la von du bar sous-solv en venant du CEG Godomey</p>
          <p class="mb-2">Téléphone: (+229) 98 88 98 60 / 66 23 73 68</p>
          <p class="mb-4">Email: hprcoop@gmail.com </p>
          <br>
          <div class="h-72">
            <iframe
              class="w-full h-full rounded-lg shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.990232244203!2d2.292292415674273!3d48.85884407928727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671d5e53b89af%3A0x4582d7a538e2d80!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1656684430514!5m2!1sfr!2sfr"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </div>
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
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Implémente la logique d'envoi du formulaire ici
      console.log('Formulaire soumis', this.form);
      // Par exemple, envoyer les données à un serveur ou à un service d'email
      alert('Merci pour votre message !');
      // Réinitialiser le formulaire après envoi
      this.form = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
