<!-- src/components/Admin/PropertyList.vue -->
<template>
    <div class="property-list">
      <h2>Liste des Propriétés</h2>
      <table class="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Titre</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="property in properties" :key="property.id">
            <td>{{ property.id }}</td>
            <td>{{ property.title }}</td>
            <td class="actions">
              <button class="btn view" @click="viewProperty(property.id)">Voir</button>
              <button class="btn edit" @click="editProperty(property.id)">Modifier</button>
              <button class="btn delete" @click="deleteProperty(property.id)">Supprimer</button>
            </td>
          </tr>
        </tbody>
      </table>
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
          // Ajoutez d'autres propriétés fictives pour l'exemple
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
  };
  </script>
  
  <style scoped>
  .property-list {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #15763A;
  }
  
  .styled-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
  }
  
  .styled-table thead {
    background-color: #15763A;
    color: #ffffff;
  }
  
  .styled-table th,
  .styled-table td {
    padding: 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  .styled-table tbody tr {
    transition: background-color 0.3s;
  }
  
  .styled-table tbody tr:hover {
    background-color: #f2f2f2;
  }
  
  .actions {
    display: flex;
    gap: 5px; /* Espacement entre les boutons */
  }
  
  .btn {
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.9em;
    color: #fff;
    transition: background-color 0.3s, transform 0.2s;
  }
  
  .view {
    background-color: #96BB00;
  }
  
  .view:hover {
    background-color: #15763A;
  }
  
  .edit {
    background-color: #4A90E2;
  }
  
  .edit:hover {
    background-color: #357ABD;
  }
  
  .delete {
    background-color: #E74C3C;
  }
  
  .delete:hover {
    background-color: #C0392B;
  }
  </style>
  