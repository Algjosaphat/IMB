<!-- src/components/Admin/UserList.vue -->
<template>
    <div class="user-list">
      <h2>Liste des Utilisateurs</h2>
      <table class="styled-table">
        <thead class="w-full">
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Actions</th>
            <th>Notification</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td class="actions">
              <button @click="viewUser(user.id)" class="btn view">Voir</button>
              <button @click="editUser(user.id)" class="btn edit">Modifier</button>
              <button @click="deleteUser(user.id)" class="btn delete">Supprimer</button>
            </td>
            <td>
              <button @click="sendNotification(user.id)" class="btn notify">Envoyer</button>
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
        users: [
          { id: 1, name: 'John Doe', email: 'john@example.com' },
          { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
          { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
          { id: 4, name: 'Bob Brown', email: 'bob@example.com' },
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
      },
      sendNotification(id) {
        console.log("Notification envoyée à l'utilisateur", id);
        alert(`Notification envoyée à l'utilisateur ID ${id}`);
      }
    }
  };
  </script>
  
  <style scoped>
  .user-list {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  h2 {
    text-align: center;
    font-size: 2em;
    color: #1F1F1F;
    margin-bottom: 20px;
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
    background-color: #4CAF50;
  }
  
  .view:hover {
    background-color: #45a049;
  }
  
  .edit {
    background-color: #2196F3;
  }
  
  .edit:hover {
    background-color: #1e88e5;
  }
  
  .delete {
    background-color: #F44336;
  }
  
  .delete:hover {
    background-color: #e53935;
  }
  
  .notify {
    background-color: #FFC107;
    color: #1F1F1F;
  }
  
  .notify:hover {
    background-color: #ffca28;
  }
  </style>
  