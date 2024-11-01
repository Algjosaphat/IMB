<template>
    <HeaderAdmin />
    <div class="statistics-page">
       <!-- Importation du header d'administration -->
  
      <h2>Tableau de Bord des Statistiques</h2>
  
      <div class="statistics-cards">
        <div class="card" v-for="stat in stats" :key="stat.title">
          <div class="icon-container">
            <i :class="stat.icon"></i>
          </div>
          <div class="card-content">
            <h3>{{ stat.title }}</h3>
            <p>{{ stat.value }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import HeaderAdmin from '../Admin/Header.vue'; // Chemin à ajuster en fonction de votre projet
  
  export default {
    components: {
      HeaderAdmin,
    },
    data() {
      return {
        stats: [
          { title: "Propriétés Totales", value: 120, icon: "fas fa-home" },
          { title: "Utilisateurs Actifs", value: 78, icon: "fas fa-users" },
          { title: "Propriétés en Vedette", value: 15, icon: "fas fa-star" },
          { title: "Transactions Récentes", value: 10, icon: "fas fa-exchange-alt" },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .statistics-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 30px;
    color: #15763A;
  }
  
  .statistics-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }
  
  .card {
    display: flex;
    align-items: center;
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .card:hover {
    transform: translateY(-5px);
  }
  
  .icon-container {
    font-size: 40px;
    color: #96BB00;
    margin-right: 15px;
  }
  
  .card-content h3 {
    font-size: 18px;
    color: #1F1F1F;
  }
  
  .card-content p {
    font-size: 24px;
    color: #15763A;
    font-weight: bold;
  }
  </style>
  