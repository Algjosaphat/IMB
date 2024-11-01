<!-- src/components/Admin/PropertyList.vue -->
<template>
    <div class="property-list">
      <h2>Liste des Propriétés</h2>
      <ul>
        <li v-for="property in properties" :key="property.id">
          {{ property.title }}
          <button @click="viewProperty(property.id)">Voir</button>
          <button @click="editProperty(property.id)">Modifier</button>
          <button @click="deleteProperty(property.id)">Supprimer</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        properties: [
          { id: 1, title: 'Maison de Luxe' },
          { id: 2, title: 'Appartement en Ville' },
          // Autres propriétés fictives pour l'exemple
        ]
      };
    },
    methods: {
      viewProperty(id) {
        console.log("Voir propriété", id);
      },
      editProperty(id) {
        console.log("Modifier propriété", id);
      },
      deleteProperty(id) {
        console.log("Supprimer propriété", id);
        this.properties = this.properties.filter(property => property.id !== id);
      }
    }
  }
  </script>
  
  <style scoped>
  .property-list {
    padding: 1rem;
  }
  button {
    margin-left: 0.5rem;
  }
  </style>
  