<template>
    <div class="admin-dashboard">
      <AdminHeader />
      <!-- <div class="admin-Da">
        <AdminSidebar />
        <router-view />
      </div> -->
      <div class="admin-main">
        <AdminSidebar />
        <router-view />
      </div>
    </div>
  </template>
  
  <script>
  import AdminHeader from '../Admin/Header.vue';
  import AdminSidebar from '../Admin/Sidebar.vue';
  
  export default {
    components: {
      AdminHeader,
      AdminSidebar,
    },
  };
  </script>
  
  <style scoped>
  .admin-dashboard {
    display: flex;
    flex-direction: column;
  }
  .admin-main {
    display: flex;
  }
  </style>
  