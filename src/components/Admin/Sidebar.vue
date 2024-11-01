<!-- src/components/Admin/Sidebar.vue -->
<template>
    <aside class="sidebar">
      <nav>
        <ul>
          <li><router-link to="/admin/users">Gestion des Utilisateurs</router-link></li>
          <li><router-link to="/admin/properties">Gestion des Propriétés</router-link></li>
        </ul>
      </nav>
    </aside>
  </template>
  
  <style scoped>
  .sidebar {
    width: 200px;
    background-color: #f1f1f1;
    padding: 1rem;
  }
  .sidebar ul {
    list-style-type: none;
    padding: 0;
  }
  .sidebar ul li {
    margin-bottom: 1rem;
  }
  </style>
  