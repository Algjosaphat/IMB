<template>
  <div class="container mx-auto px-4 mt-10">
    <h1 class="text-3xl text-green-600 font-bold text-center mb-8">Liste des Utilisateurs</h1>
    <div class="overflow-x-auto overflow-y-auto max-h-screen shadow-lg rounded-lg">
      <table class="min-w-full bg-white">
        <thead>
          <tr class="bg-green-700 text-white uppercase text-xs lg:text-sm leading-normal">
            <th class="py-3 px-4 text-left">ID</th>
            <th class="py-3 px-4 text-left">Nom</th>
            <th class="py-3 px-4 text-left">Email</th>
            <th class="py-3 px-4 text-left">Actions</th>
            <th class="py-3 px-4 text-left">Notification</th>
          </tr>
        </thead>
        <tbody class="border-t hover:bg-gray-100 transition">
          <tr v-for="user in users" :key="user.id" class="border-b border-gray-200 hover:bg-gray-100">
            <td class="py-3 px-4 text-left">{{ user.id }}</td>
            <td class="py-3 px-4 text-left">{{ user.name }}</td>
            <td class="py-3 px-4 text-left">{{ user.email }}</td>
            <td class="py-3 px-4 text-left space-x-1 sm:space-x-2">
              <button aria-label="Voir l'utilisateur" class="bg-green-500 text-white py-1 px-2 sm:px-3 rounded hover:bg-green-600">Voir</button>
              <button aria-label="Modifier l'utilisateur" class="bg-blue-500 text-white py-1 px-2 sm:px-3 rounded hover:bg-blue-600">Modifier</button>
              <button aria-label="Supprimer l'utilisateur" class="bg-red-500 text-white py-1 px-2 sm:px-3 rounded hover:bg-red-600">Supprimer</button>
            </td>
            <td class="py-3 px-4 text-left">
              <button aria-label="Envoyer une notification" class="bg-yellow-500 text-white py-1 px-2 sm:px-3 rounded hover:bg-yellow-600">Envoyer</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
        { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
        { id: 4, name: 'Bob Brown', email: 'bob@example.com' },
      ],
    };
  },
};
</script>

<style scoped>
</style>
