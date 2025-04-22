<template>
  <div class="w-full mx-auto px-4 py-6 bg-gray-100 min-h-screen">
    <!-- En-tête du tableau de bord -->
    <div class="mb-8">
      <h1 class="text-3xl text-green-600 font-bold">Tableau de Bord</h1>
      <p class="text-gray-600">Vue d'ensemble de votre activité immobilière</p>
    </div>

    <!-- Cartes de statistiques -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-500">Total Propriétés</p>
            <h3 class="text-2xl font-bold">{{ stats.totalProperties }}</h3>
          </div>
          <div class="p-3 bg-blue-100 rounded-full">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
          </div>
        </div>
        <p class="text-green-600 text-sm mt-2">
          <span class="font-bold">+{{ stats.newProperties }}</span> ce mois
        </p>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-500">Demandes en Attente</p>
            <h3 class="text-2xl font-bold">{{ stats.pendingRequests }}</h3>
          </div>
          <div class="p-3 bg-yellow-100 rounded-full">
            <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
        </div>
        <p class="text-red-600 text-sm mt-2">
          <span class="font-bold">{{ stats.urgentRequests }}</span> urgentes
        </p>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-500">Chiffre d'Affaires</p>
            <h3 class="text-2xl font-bold">{{ formatPrice(stats.revenue) }} FCFA</h3>
          </div>
          <div class="p-3 bg-green-100 rounded-full">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
        </div>
        <p class="text-green-600 text-sm mt-2">
          <span class="font-bold">+{{ stats.revenueGrowth }}%</span> vs dernier mois
        </p>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-500">Utilisateurs Actifs</p>
            <h3 class="text-2xl font-bold">{{ stats.activeUsers }}</h3>
          </div>
          <div class="p-3 bg-purple-100 rounded-full">
            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </div>
        </div>
        <p class="text-purple-600 text-sm mt-2">
          <span class="font-bold">{{ stats.newUsers }}</span> nouveaux utilisateurs
        </p>
      </div>
    </div>

    <!-- Activités Récentes et Liste des Propriétés -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Dernières Activités -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-xl font-bold mb-4">Activités Récentes</h2>
        <div class="space-y-4">
          <div v-for="activity in recentActivities" :key="activity.id" class="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg">
            <div :class="getActivityIconClass(activity.type)" class="p-2 rounded-full">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="getActivityIcon(activity.type)"></path>
              </svg>
            </div>
            <div class="flex-1">
              <p class="text-sm font-medium text-gray-900">{{ activity.description }}</p>
              <p class="text-sm text-gray-500">{{ activity.time }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Liste des Propriétés -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-bold">Dernières Propriétés</h2>
          <router-link to="/AddProperty" class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Ajouter
          </router-link>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Propriété</th>
                <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prix</th>
                <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="property in recentProperties" :key="property.id" class="hover:bg-gray-50">
                <td class="px-4 py-2">
                  <div class="flex items-center">
                    <img :src="property.image" alt="" class="h-8 w-8 rounded-full">
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">{{ property.name }}</div>
                      <div class="text-sm text-gray-500">{{ property.location }}</div>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-2 text-sm text-gray-500">{{ formatPrice(property.price) }} FCFA</td>
                <td class="px-4 py-2">
                  <span :class="getStatusClass(property.status)" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
                    {{ property.status }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stats: {
        totalProperties: 45,
        newProperties: 8,
        pendingRequests: 12,
        urgentRequests: 3,
        revenue: 250000000,
        revenueGrowth: 12.5,
        activeUsers: 156,
        newUsers: 23
      },
      recentActivities: [
        {
          id: 1,
          type: 'property',
          description: 'Nouvelle propriété ajoutée à Douala',
          time: 'Il y a 2 heures'
        },
        {
          id: 2,
          type: 'user',
          description: 'Nouveau compte agent créé',
          time: 'Il y a 3 heures'
        },
        {
          id: 3,
          type: 'request',
          description: 'Nouvelle demande de visite',
          time: 'Il y a 5 heures'
        }
      ],
      recentProperties: [
        {
          id: 1,
          name: 'Villa Moderne',
          location: 'Douala, Bonanjo',
          price: 150000000,
          status: 'Disponible',
          image: '/path/to/image1.jpg'
        },
        {
          id: 2,
          name: 'Appartement Luxe',
          location: 'Yaoundé, Bastos',
          price: 75000000,
          status: 'En attente',
          image: '/path/to/image2.jpg'
        }
      ]
    }
  },
  methods: {
    formatPrice(price) {
      return new Intl.NumberFormat('fr-FR').format(price)
    },
    getActivityIconClass(type) {
      const classes = {
        property: 'text-blue-600 bg-blue-100',
        user: 'text-green-600 bg-green-100',
        request: 'text-yellow-600 bg-yellow-100'
      }
      return classes[type] || 'text-gray-600 bg-gray-100'
    },
    getActivityIcon(type) {
      const icons = {
        property: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
        user: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
        request: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
      }
      return icons[type] || 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    getStatusClass(status) {
      const classes = {
        'Disponible': 'bg-green-100 text-green-800',
        'En attente': 'bg-yellow-100 text-yellow-800',
        'Vendu': 'bg-gray-100 text-gray-800'
      }
      return classes[status] || 'bg-gray-100 text-gray-800'
    }
  }
}
</script>

<style scoped>
.grid {
  display: grid;
}
</style>