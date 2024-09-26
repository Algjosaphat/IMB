<!-- Nitications -->

<template>
    <heder/>
    <div class="p-10"></div>
    <div class="notification-page p-8">
      <h1 class="text-3xl font-bold mb-4 text-center">Mes Notifications</h1>
      
      <div v-if="notifications.length === 0" class="text-gray-500">
        Aucune notification à afficher.
      </div>
      
      <ul v-else class="notification-list">
        <li v-for="notification in notifications" :key="notification.id" class="notification-item mb-4 p-4 border rounded-md shadow">
          <h2 class="font-semibold text-center">{{ notification.title }}</h2>
          <p class="text-gray-700 text-center">{{ notification.message }}</p>
          <p class="text-sm text-gray-500 text-end">{{ formatDate(notification.date) }}</p>
        </li>
      </ul>
    </div>
    <foter/>
</template>
  
<script>
    // import axios from 'axios';
    import Heder from '../Helper/Header.vue';
    import Foter from '../Helper/Footer.vue';

    export default {
        components: {
            Heder,
            Foter,
        },
        data() {
        return {
            notifications: [
                // currentSlide: 0,
                {
                    "id": 1,
                    "title": "Nouvelle Mise à Jour",
                    "message": "Une nouvelle mise à jour est disponible pour votre application.",
                    "date": "2024-09-20T12:00:00Z"
                },
                {
                    "id": 2,
                    "title": "Rappel de Rendez-vous",
                    "message": "N'oubliez pas votre rendez-vous demain à 15h.",
                    "date": "2024-09-21T09:00:00Z"
                }
            ],
        };
        },
        mounted() {
        // this.fetchNotifications();
        },
        methods: {
        // fetchNotifications() {
        //     // Remplace l'URL par celle de ton API
        //     axios.get('/api/user/notifications')
        //     .then(response => {
        //         this.notifications = response.data;
        //     })
        //     .catch(error => {
        //         console.error("Erreur lors de la récupération des notifications :", error);
        //     });
        // },
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(date).toLocaleDateString(undefined, options);
        },
        },
    };

//     export default {
//   data() {
//     return {
//       notifications: []
//     };
//   },
//   methods: {
//     fetchNotifications() {
//       // Logique pour récupérer des notifications, par exemple une requête à une API
//       axios.get('/api/notifications')
//         .then(response => {
//           this.notifications = response.data;
//         })
//         .catch(error => {
//           console.error('Erreur lors de la récupération des notifications:', error);
//         });
//     }
//   },
//   mounted() {
//     this.fetchNotifications(); // Récupérer les notifications dès que le composant est monté
//   }
// }
</script>
  
  <style scoped>
  .notification-page {
    max-width: 600px;
    margin: 0 auto;
  }
  .notification-list {
    list-style-type: none;
    padding: 0;
  }
  .notification-item {
    background-color: #fff;
    border: 1px solid #e5e5e5;
  }
</style>
  