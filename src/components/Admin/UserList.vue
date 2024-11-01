<!-- src/components/Admin/UserList.vue -->
<template>
    <div class="user-list">
      <h2>Liste des Utilisateurs</h2>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.name }} - {{ user.email }}
          <button @click="viewUser(user.id)">Voir</button>
          <button @click="editUser(user.id)">Modifier</button>
          <button @click="deleteUser(user.id)">Supprimer</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        users: [
          { id: 1, name: 'John Doe', email: 'john@example.com' },
          { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
          // Autres utilisateurs fictifs pour l'exemple
        ]
      };
    },
    methods: {
      viewUser(id) {
        console.log("Voir utilisateur", id);
      },
      editUser(id) {
        console.log("Modifier utilisateur", id);
      },
      deleteUser(id) {
        console.log("Supprimer utilisateur", id);
        this.users = this.users.filter(user => user.id !== id);
      }
    }
  }
  </script>
  
  <style scoped>
  .user-list {
    padding: 1rem;
  }
  button {
    margin-left: 0.5rem;
  }
  </style>
  