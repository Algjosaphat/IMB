<!-- Notifications.vue -->

<script setup>
import { ref, onMounted } from 'vue';
import Heder from '../Helper/Header.vue';
import Foter from '../Helper/Footer.vue';

// État réactif pour les notifications
const notifications = ref([
  {
    "id": 1,
    "title": "Nouvelle Mise à Jour",
    "message": "Une nouvelle mise à jour est disponible pour votre application.",
    "date": "2024-09-20T12:00:00Z",
    "type": "info" // Type pour l'icône
  },
  {
    "id": 2,
    "title": "Rappel de Rendez-vous",
    "message": "N'oubliez pas votre rendez-vous demain à 15h.",
    "date": "2024-09-21T09:00:00Z",
    "type": "reminder" // Type pour l'icône
  },
  {
    "id": 3,
    "title": "Demande Approuvée",
    "message": "Votre demande de documents a été approuvée. Vous pouvez maintenant télécharger les fichiers.",
    "date": "2024-09-22T14:30:00Z",
    "type": "success" // Type pour l'icône
  }
]);

// Pour le filtre des notifications
const activeFilter = ref('all');
const filters = [
  { id: 'all', label: 'Toutes' },
  { id: 'unread', label: 'Non lues' },
  { id: 'read', label: 'Lues' }
];

// État pour indiquer si une notification est lue
const readStatus = ref({});

// Méthode pour formater la date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  
  // Vérifier si c'est aujourd'hui
  const today = new Date();
  if (date.toDateString() === today.toDateString()) {
    return `Aujourd'hui, ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  }
  
  // Vérifier si c'est hier
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  if (date.toDateString() === yesterday.toDateString()) {
    return `Hier, ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  }
  
  // Sinon, formater avec la date complète
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return date.toLocaleDateString(undefined, options);
};

// Méthode pour marquer une notification comme lue
const markAsRead = (id) => {
  readStatus.value[id] = true;
};

// Méthode pour marquer toutes les notifications comme lues
const markAllAsRead = () => {
  notifications.value.forEach(notification => {
    readStatus.value[notification.id] = true;
  });
};

// Méthode pour supprimer une notification
const deleteNotification = (id) => {
  const index = notifications.value.findIndex(notification => notification.id === id);
  if (index !== -1) {
    notifications.value.splice(index, 1);
  }
};

// Méthode pour obtenir l'icône en fonction du type de notification
const getNotificationIcon = (type) => {
  switch (type) {
    case 'info':
      return `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      `;
    case 'success':
      return `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      `;
    case 'reminder':
      return `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      `;
    default:
      return `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      `;
  }
};

// Calcul des notifications filtrées
const filteredNotifications = () => {
  if (activeFilter.value === 'all') {
    return notifications.value;
  } else if (activeFilter.value === 'unread') {
    return notifications.value.filter(notification => !readStatus.value[notification.id]);
  } else {
    return notifications.value.filter(notification => readStatus.value[notification.id]);
  }
};

// Simuler la récupération de notifications depuis une API
const fetchNotifications = () => {
  console.log('Récupération des notifications...');
  // Dans un cas réel, nous ferions une requête API ici
  // axios.get('/api/user/notifications')
  //   .then(response => {
  //     notifications.value = response.data;
  //   })
  //   .catch(error => {
  //     console.error("Erreur lors de la récupération des notifications :", error);
  //   });
};

// Charger les notifications au montage du composant
onMounted(() => {
  fetchNotifications();
});
</script>

<template>
  <div class="bg-emerald-50 min-h-screen">
    <Heder />
    
    <!-- Hero Section avec vague -->
    <div class="relative bg-gradient-to-r from-emerald-600 to-green-400 lg:py-40 py-20">
      <div class="container mx-auto px-6 text-center mt-4">
        <h1 class="text-3xl md:text-4xl font-bold text-white mb-2">Mes Notifications</h1>
        <p class="text-emerald-100 md:text-lg max-w-xl mx-auto">
          Restez informé des dernières mises à jour et événements importants
        </p>
      </div>
      <!-- Vague décorative -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="w-full h-full">
          <path fill="#ecfdf5" fill-opacity="1" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,165.3C840,171,960,213,1080,218.7C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </div>
    
    <!-- Zone de contenu principal -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 -mt-6 relative z-10">
      <div class="max-w-3xl mx-auto">
        
        <!-- Carte des notifications -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          
          <!-- En-tête de la carte -->
          <div class="flex items-center justify-between p-4 md:p-6 bg-white border-b">
            <div class="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <h2 class="text-xl font-semibold text-gray-800">Notifications</h2>
              <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-emerald-100 bg-emerald-600 rounded-full">
                {{ notifications.length }}
              </span>
            </div>
            
            <!-- Bouton "Tout marquer comme lu" -->
            <button 
              @click="markAllAsRead" 
              class="text-sm text-emerald-600 hover:text-emerald-800 font-medium flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Tout marquer comme lu
            </button>
          </div>
          
          <!-- Filtres -->
          <div class="bg-gray-50 px-4 py-3 border-b flex overflow-x-auto">
            <div class="flex space-x-2">
              <button 
                v-for="filter in filters" 
                :key="filter.id"
                @click="activeFilter = filter.id"
                :class="[
                  'px-3 py-1 text-sm rounded-full transition-colors',
                  activeFilter === filter.id 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-200'
                ]"
              >
                {{ filter.label }}
              </button>
            </div>
          </div>
          
          <!-- Liste des notifications -->
          <div class="divide-y divide-gray-100">
            <div v-if="filteredNotifications().length === 0" class="py-12 text-center">
              <div class="flex flex-col items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <p class="text-gray-500 text-lg">Aucune notification à afficher</p>
                <p class="text-gray-400 text-sm mt-1">Les nouvelles notifications apparaîtront ici</p>
              </div>
            </div>
            
            <div 
              v-for="notification in filteredNotifications()" 
              :key="notification.id" 
              :class="[
                'p-4 md:p-5 hover:bg-gray-50 transition-colors group',
                readStatus[notification.id] ? 'bg-gray-50' : 'bg-white'
              ]"
              @click="markAsRead(notification.id)"
            >
              <div class="flex items-start">
                <!-- Indicateur non-lu et icône -->
                <div class="mr-4 flex-shrink-0 relative">
                  <div 
                    v-if="!readStatus[notification.id]" 
                    class="absolute -top-1 -left-1 w-2 h-2 bg-emerald-500 rounded-full"
                  ></div>
                  <div class="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100" v-html="getNotificationIcon(notification.type)"></div>
                </div>
                
                <!-- Contenu de la notification -->
                <div class="flex-1">
                  <div class="flex items-start justify-between">
                    <h3 
                      :class="[
                        'text-base',
                        readStatus[notification.id] ? 'text-gray-700 font-medium' : 'text-gray-900 font-semibold'
                      ]"
                    >
                      {{ notification.title }}
                    </h3>
                    <span class="text-xs text-gray-500 flex-shrink-0 ml-2">{{ formatDate(notification.date) }}</span>
                  </div>
                  <p 
                    :class="[
                      'text-sm mt-1',
                      readStatus[notification.id] ? 'text-gray-500' : 'text-gray-700'
                    ]"
                  >
                    {{ notification.message }}
                  </p>
                </div>
                
                <!-- Bouton de suppression (visible au survol) -->
                <button 
                  @click.stop="deleteNotification(notification.id)" 
                  class="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity ml-2"
                  title="Supprimer cette notification"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <!-- Pied de carte -->
          <div class="bg-gray-50 px-6 py-3 text-right">
            <a href="#" class="text-sm text-emerald-600 hover:text-emerald-800 font-medium flex items-center justify-center sm:justify-start">
              <span>Voir toutes les notifications</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
        
        <!-- Carte d'information -->
        <div class="bg-white rounded-lg shadow-md p-6 border-l-4 border-emerald-500">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-emerald-800">Comment ça marche</h3>
              <div class="mt-2 text-sm text-gray-600">
                <p>Les notifications vous tiennent informé des mises à jour importantes et des activités sur votre compte. Vous pouvez marquer les notifications comme lues ou les supprimer lorsque vous n'en avez plus besoin.</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    
    <Foter />
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
}

/* Animation pour les éléments interactifs */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}
</style>