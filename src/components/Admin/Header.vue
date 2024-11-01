<!-- src/components/Admin/Header.vue -->
<template>
    <header class="admin-header">
      <h1>Tableau de Bord Administrateur</h1>
      <button @click="logout" class="logout-btn">Déconnexion</button>
    </header>
  </template>
  
  <script>
  export default {
    methods: {
      logout() {
        // Logique de déconnexion
        console.log("Déconnexion");
        this.$router.push({ name: 'Loginpage' });
      }
    }
  }
  </script>
  
  <style scoped>
  .admin-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #333;
    color: white;
  }
  .logout-btn {
    background-color: #f44336;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  </style>
  