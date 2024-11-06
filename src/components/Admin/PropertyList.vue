<template>
  <div class="container mx-auto px-4 mt-10">
    <h1 class="text-center text-2xl font-bold text-green-600 mb-6">Liste des Propriétés</h1>
    <div class="overflow-x-auto shadow-lg rounded-lg overflow-y-auto">
      <table class="min-w-full bg-white">
        <thead>
          <tr class="bg-green-700 text-white uppercase text-xs lg:text-sm leading-normal">
            <th class="py-3 px-4 text-left">ID</th>
            <th class="py-3 px-4 text-left">Titre</th>
            <th class="py-3 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody class="text-gray-600 text-xs lg:text-sm font-light">
          <tr v-for="property in properties" :key="property.id" class="border-b border-gray-200 hover:bg-gray-100">
            <td class="py-3 px-4 text-left">{{ property.id }}</td>
            <td class="py-3 px-4 text-left">{{ property.title }}</td>
            <td class="py-3 px-4 text-left space-x-1 sm:space-x-2">
              <button class="bg-lime-500 text-white py-1 px-2 sm:px-3 rounded hover:bg-lime-600">Voir</button>
              <button class="bg-blue-500 text-white py-1 px-2 sm:px-3 rounded hover:bg-blue-600">Modifier</button>
              <button class="bg-red-500 text-white py-1 px-2 sm:px-3 rounded hover:bg-red-600">Supprimer</button>
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
      properties: [
        { id: 1, title: 'Maison de Luxe' },
        { id: 2, title: 'Appartement en Ville' },
        { id: 3, title: 'Villa au Bord de Mer' },
        { id: 4, title: 'Penthouse avec Vue' },
      ],
    };
  },
};
</script>

<style scoped>
</style>
