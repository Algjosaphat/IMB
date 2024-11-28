<template>
    <div class="w-full mx-auto px-1 py-6 bg-gray-100 min-h-screen">
      <div class="p-6 ">
        <h1 class="text-3xl text-green-600 font-bold text-center mb-8">Page d'administration</h1>
  
        <div class="overflow-x-auto m-12">
          <table class="table-auto w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr class="bg-gray-200 text-gray-700">
                <th class="px-4 py-2">ID</th>
                <th class="px-4 py-2">Nom</th>
                <th class="px-4 py-2">Type</th>
                <th class="px-4 py-2">Ville</th>
                <th class="px-4 py-2">Prix</th>
                <th class="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr 
                v-for="property in properties" 
                :key="property.id" 
                class="border-t hover:bg-gray-100 transition"
              >
                <td class="px-4 py-2 text-center">{{ property.id }}</td>
                <td class="px-4 py-2">{{ property.fullName }}</td>
                <td class="px-4 py-2">{{ property.propertyType }}</td>
                <td class="px-4 py-2">{{ property.city }}</td>
                <td class="px-4 py-2">{{ property.price }} FCFA</td>
                <td class="px-4 py-2 flex justify-center space-x-2">
                  <button 
                    @click="viewDetails(property.id)" 
                    class="bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-700"
                  >
                    Détails
                  </button>
                  <button 
                    @click="editProperty(property.id)" 
                    class="bg-yellow-500 text-white px-3 py-1 rounded-full hover:bg-yellow-700"
                  >
                    Modifier
                  </button>
                  <button 
                    @click="deleteProperty(property.id)" 
                    class="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-700"
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
              <tr v-if="properties.length === 0">
                <td colspan="6" class="px-4 py-4 text-center text-gray-500">
                  Aucune propriété disponible.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
</template>
  
<script>
  export default {
    // components: {

    // },
    data() {
      return {
        properties: [
          {
            id: 1,
            fullName: "Jean Dupont",
            propertyType: "Maison",
            city: "Douala",
            price: 150000000,
          },
          {
            id: 2,
            fullName: "Marie Claire",
            propertyType: "Appartement",
            city: "Yaoundé",
            price: 75000000,
          },
          {
            id: 3,
            fullName: "Paul Elong",
            propertyType: "Terrain",
            city: "Bafoussam",
            price: 50000000,
          },
        ],
      };
    },
    methods: {
      viewDetails(id) {
        alert(`Afficher les détails de la propriété ID: ${id}`);
        // Redirection ou affichage des détails ici
      },
      editProperty(id) {
        alert(`Modifier la propriété ID: ${id}`);
        // Redirection vers une page de modification
      },
      deleteProperty(id) {
        const confirmDelete = confirm("Êtes-vous sûr de vouloir supprimer cette propriété ?");
        if (confirmDelete) {
          this.properties = this.properties.filter(property => property.id !== id);
          alert(`Propriété ID: ${id} supprimée.`);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .table-auto th,
  .table-auto td {
    text-align: left;
  }
  </style>
  