<template>
  <div class="bg-gray-50 min-h-screen font-sans">
    <!-- Header -->
    <Heder />
    
    <!-- Hero Section avec recherche intégrée -->
    <div class="relative">
      <div class="w-full h-96 bg-cover bg-center relative" style="background-image: url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')">
        <div class="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-green-900/70"></div>
        <div class="container mx-auto px-4 relative z-10 flex flex-col justify-center h-full">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-40 text-white mb-4 max-w-3xl leading-tight">
            Trouvez votre propriété idéale
          </h1>
          <p class="text-xl text-white/90 mb-8 max-w-2xl">
            Découvrez notre sélection exclusive de propriétés dans les plus belles régions de France
          </p>
          
          <!-- Barre de recherche rapide -->
          <!-- <div class="bg-white p-2 rounded-lg shadow-xl md:max-w-3xl w-full flex flex-col md:flex-row">
            <div class="flex-1 p-2">
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg class="w-5 h-5 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <select v-model="quickSearch.city" class="w-full pl-10 py-3 rounded-lg border-0 focus:ring-2 focus:ring-green-600 bg-gray-50">
                  <option value="">Toutes les villes</option>
                  <option v-for="(city, index) in uniqueCities" :key="index" :value="city">{{ city }}</option>
                </select>
              </div>
            </div>
            <div class="flex-1 p-2">
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg class="w-5 h-5 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <select v-model="quickSearch.budget" class="w-full pl-10 py-3 rounded-lg border-0 focus:ring-2 focus:ring-green-600 bg-gray-50">
                  <option value="">Budget maximum</option>
                  <option value="100000">Jusqu'à 100 000 €</option>
                  <option value="200000">Jusqu'à 200 000 €</option>
                  <option value="500000">Jusqu'à 500 000 €</option>
                  <option value="1000000">Jusqu'à 1 000 000 €</option>
                  <option value="10000000">Plus de 1 000 000 €</option>
                </select>
              </div>
            </div>
            <div class="p-2">
              <button @click="applyQuickSearch" class="w-full md:w-auto px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors shadow-md flex items-center justify-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                Rechercher
              </button>
            </div>
          </div> -->
        </div>
      </div>
    </div>

    <!-- Stats rapides -->
    <!-- <div class="bg-white shadow-md">
      <div class="container mx-auto py-6 px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="text-center p-3">
            <p class="text-3xl font-bold text-green-700">{{ properties.length }}</p>
            <p class="text-gray-600">Propriétés</p>
          </div>
          <div class="text-center p-3">
            <p class="text-3xl font-bold text-green-700">{{ uniqueCities.length }}</p>
            <p class="text-gray-600">Villes</p>
          </div>
          <div class="text-center p-3">
            <p class="text-3xl font-bold text-green-700">{{ getLowestPrice }}</p>
            <p class="text-gray-600">Prix min</p>
          </div>
          <div class="text-center p-3">
            <p class="text-3xl font-bold text-green-700">{{ getHighestPrice }}</p>
            <p class="text-gray-600">Prix max</p>
          </div>
        </div>
      </div>
    </div> -->

    <!-- Contenu principal -->
    <div class="container mx-auto py-12 px-4">
      <!-- Tabs de navigation -->
      <!-- <div class="mb-8 border-b border-gray-200">
        <ul class="flex flex-wrap -mb-px">
          <li class="mr-2">
            <a href="#" class="inline-block py-3 px-4 text-lg font-medium text-green-600 border-b-2 border-green-600">
              Toutes les propriétés
            </a>
          </li>
          <li class="mr-2">
            <a href="#" class="inline-block py-3 px-4 text-lg font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300">
              Ventes
            </a>
          </li>
          <li class="mr-2">
            <a href="#" class="inline-block py-3 px-4 text-lg font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300">
              Locations
            </a>
          </li>
          <li class="mr-2">
            <a href="#" class="inline-block py-3 px-4 text-lg font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300">
              Nouvelles constructions
            </a>
          </li>
        </ul>
      </div> -->

      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Filtres avancés sur le côté -->
        <div class="lg:w-1/4">
          <div class="sticky top-6 bg-white rounded-xl shadow-lg overflow-hidden">
            <div class="bg-gradient-to-r from-green-600 to-gray-600 p-4">
              <h2 class="text-xl font-bold text-white">Filtres avancés</h2>
            </div>
            
            <div class="p-6 space-y-6">
              <!-- Filtre par type -->
              <!-- <div class="space-y-2">
                <label class="block text-sm font-medium text-gray-700">Type de propriété</label>
                <div class="flex flex-wrap gap-2">
                  <button 
                    v-for="type in ['Appartement', 'Maison', 'Villa', 'Terrain']" 
                    :key="type"
                    :class="['px-3 py-1 text-sm rounded-full border transition-colors', 
                      filters.type === type 
                        ? 'bg-green-600 text-white border-green-600' 
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50']"
                    @click="filters.type = filters.type === type ? '' : type"
                  >
                    {{ type }}
                  </button>
                </div>
              </div> -->
              
              <!-- Filtrer par ville -->
              <div class="space-y-2">
                <label for="city" class="block text-sm font-medium text-gray-700">Ville</label>
                <select 
                  v-model="filters.city" 
                  id="city" 
                  class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">Toutes les villes</option>
                  <option v-for="(city, index) in uniqueCities" :key="index" :value="city">
                    {{ city }}
                  </option>
                </select>
              </div>

              <!-- Filtrer par prix (double slider) -->
              <div class="space-y-2">
                <label class="block text-sm font-medium text-gray-700">Prix (€)</label>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <input 
                      type="number" 
                      v-model.number="filters.minPrice" 
                      placeholder="Min" 
                      class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" 
                    />
                  </div>
                  <div>
                    <input 
                      type="number" 
                      v-model.number="filters.maxPrice" 
                      placeholder="Max" 
                      class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" 
                    />
                  </div>
                </div>
              </div>

              <!-- Caractéristiques -->
              <div class="space-y-4">
                <h3 class="text-md font-medium text-gray-800">Caractéristiques</h3>
                
                <!-- Chambres -->
                <div class="space-y-2">
                  <label class="block text-sm font-medium text-gray-700">Chambres</label>
                  <div class="flex space-x-2">
                    <button 
                      v-for="n in 5" 
                      :key="`bed-${n}`"
                      :class="['w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium transition-colors', 
                        filters.bedrooms === n 
                          ? 'bg-green-600 text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200']"
                      @click="filters.bedrooms = filters.bedrooms === n ? 0 : n"
                    >
                      {{ n }}{{ n === 5 ? '+' : '' }}
                    </button>
                  </div>
                </div>

                <!-- Salles de bain -->
                <div class="space-y-2">
                  <label class="block text-sm font-medium text-gray-700">Salles de bain</label>
                  <div class="flex space-x-2">
                    <button 
                      v-for="n in 5" 
                      :key="`bath-${n}`"
                      :class="['w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium transition-colors', 
                        filters.bathrooms === n 
                          ? 'bg-green-600 text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200']"
                      @click="filters.bathrooms = filters.bathrooms === n ? 0 : n"
                    >
                      {{ n }}{{ n === 5 ? '+' : '' }}
                    </button>
                  </div>
                </div>

                <!-- Options supplémentaires -->
                <div class="space-y-3">
                  <div class="flex items-center">
                    <input 
                      type="checkbox" 
                      id="pool" 
                      v-model="filters.hasPool" 
                      class="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label for="pool" class="ml-2 block text-sm text-gray-700">Piscine</label>
                  </div>
                  <div class="flex items-center">
                    <input 
                      type="checkbox" 
                      id="garage" 
                      v-model="filters.hasGarage" 
                      class="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label for="garage" class="ml-2 block text-sm text-gray-700">Garage</label>
                  </div>
                  <div class="flex items-center">
                    <input 
                      type="checkbox" 
                      id="garden" 
                      v-model="filters.hasGarden" 
                      class="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label for="garden" class="ml-2 block text-sm text-gray-700">Jardin</label>
                  </div>
                </div>
              </div>

              <!-- Boutons d'action -->
              <div class="pt-4 space-y-3">
                <button 
                  @click="applyFilters" 
                  class="w-full py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors shadow-md flex items-center justify-center"
                >
                  Appliquer les filtres
                </button>
                <button 
                  @click="resetFilters" 
                  class="w-full py-2 text-gray-600 hover:text-gray-800 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Réinitialiser
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Résultats et tri -->
        <div class="lg:w-3/4">
          <!-- Barre d'en-tête des résultats -->
          <div class="bg-white rounded-lg w-full shadow-md p-4 mb-6 flex flex-col sm:flex-row justify-between items-center">
            <!-- <div class="mb-4 sm:mb-0">
              <p class="text-gray-700">
                <span class="font-bold text-lg text-green-700">{{ filteredProperties.length }}</span> 
                <span class="text-gray-500 ml-2">propriétés trouvées</span>
              </p>
            </div> -->
            <div class="flex flex-col sm:flex-row w-full justify-end items-center gap-4">
              <!-- <div class="flex items-center gap-2">
                <label for="sortOption" class="text-gray-700 whitespace-nowrap">Trier par:</label>
                <select 
                  v-model="sortOption" 
                  id="sortOption"
                  class="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="price-asc">Prix croissant</option>
                  <option value="price-desc">Prix décroissant</option>
                  <option value="newest">Plus récentes</option>
                  <option value="area-desc">Surface</option>
                </select>
              </div> -->
              <div class="flex">
                <!-- <button class="p-2 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50" title="Vue grille">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button class="p-2 bg-gray-100 border border-gray-300 rounded-r-md hover:bg-gray-50" title="Vue liste">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </button> -->
                <p class="text-gray-700 text-end">
                  <span class="font-bold text-lg text-green-700">{{ filteredProperties.length }}</span> 
                  <span class="text-gray-500 ml-2">propriétés trouvées</span>
                </p>
              </div>
            </div>
          </div>

          <!-- Liste des propriétés filtrées -->
          <div v-if="filteredProperties.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div 
              v-for="(property, index) in sortedProperties" 
              :key="index" 
              class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div class="relative">
                <img :src="property.image" :alt="property.title" class="w-full h-64 object-cover" />
                
                <!-- Badge pour le type de propriété -->
                <div class="absolute top-4 left-4">
                  <span class="bg-green-600 text-white text-sm font-medium py-1 px-3 rounded-full shadow-md">
                    {{ property.type || 'Propriété' }}
                  </span>
                </div>
                
                <!-- Badge pour le prix -->
                <div class="absolute top-4 right-4">
                  <span class="bg-white text-green-700 text-sm font-bold py-1 px-3 rounded-full shadow-md">
                    {{ property.price.toLocaleString() }} €
                  </span>
                </div>
                
                <!-- Bouton favori -->
                <!-- <button class="absolute bottom-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button> -->
              </div>
              
              <div class="p-6 flex flex-col flex-grow">
                <div class="mb-4">
                  <div class="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span class="text-gray-600">{{ property.location }}</span>
                  </div>
                  <h2 class="text-2xl font-bold text-gray-800 mb-2">{{ property.title }}</h2>
                  <p class="text-gray-600 line-clamp-2 mb-4">{{ property.description }}</p>
                </div>
                
                <div class="flex justify-between items-center mb-4 py-3 border-t border-b border-gray-100">
                  <div class="flex items-center" title="Chambres">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span class="text-gray-700 font-medium">{{ property.features.bedrooms }}</span>
                  </div>
                  <div class="flex items-center" title="Salles de bain">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span class="text-gray-700 font-medium">{{ property.features.bathrooms }}</span>
                  </div>
                  <div class="flex items-center" title="Surface">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                    </svg>
                    <span class="text-gray-700 font-medium">{{ property.features.area }} m²</span>
                  </div>
                </div>
                
                <div class="mt-auto flex gap-3">
                  <router-link 
                    :to="{ name: 'PropertyDetail', params: { id: property.id } }"
                    class="flex-1 bg-green-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                  >
                    Voir détails
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </router-link>
                  <button class="bg-white border-2 border-green-600 text-green-600 font-medium py-3 px-4 rounded-lg hover:bg-green-50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Message si aucune propriété trouvée -->
          <div v-else class="bg-white rounded-xl shadow-md p-10 text-center">
            <div class="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-gray-800 mb-2">Aucune propriété trouvée</h3>
            <p class="text-gray-600 mb-8 max-w-md mx-auto">Nous n'avons trouvé aucune propriété correspondant à vos critères. Essayez d'élargir votre recherche.</p>
            <button 
              @click="resetFilters" 
              class="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium"
            >
              Réinitialiser les filtres
            </button>
          </div>

          <!-- Pagination -->
          <!-- <div v-if="filteredProperties.length > 0" class="mt-10 flex justify-center">
            <nav class="flex rounded-md shadow">
              <a href="#" class="inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-gray-700 rounded-l-md hover:bg-gray-50 transition-colors">
                <svg class="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
                Précédent
              </a>
              <a href="#" class="inline-flex items-center px-4 py-2 border border-gray-300 bg-green-600 text-white border-green-600">1</a>
              <a href="#" class="inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-colors">2</a>
              <a href="#" class="inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-colors">3</a>
              <a href="#" class="inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-gray-700 rounded-r-md hover:bg-gray-50 transition-colors">
                Suivant
                <svg class="h-5 w-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </nav>
          </div> -->
        </div>
      </div>
    </div>

    <!-- Section newsletter -->
    <div class="bg-green-700 py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-white mb-4">Restez informé des nouvelles propriétés</h2>
          <p class="text-white/90 mb-8">Inscrivez-vous à notre newsletter pour recevoir en avant-première nos meilleures offres et nouveautés</p>
          <div class="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Votre adresse email" 
              class="flex-1 py-3 px-4 rounded-lg border-0 focus:ring-2 focus:ring-white"
            />
            <button class="bg-white text-green-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
              S'inscrire
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Section témoignages -->
    <div class="bg-gray-50 py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Ce que nos clients disent</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-xl shadow-md">
            <div class="flex items-center mb-4">
              <div class="mr-4 bg-blue-100 rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h3 class="font-medium text-lg text-gray-800">Marie Dupont</h3>
                <div class="flex text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            </div>
            <p class="text-gray-600 italic">"Service impeccable ! J'ai trouvé ma maison de rêve en moins de 2 semaines. L'équipe a été très professionnelle et à l'écoute de mes besoins."</p>
          </div>
          
          <div class="bg-white p-6 rounded-xl shadow-md">
            <div class="flex items-center mb-4">
              <div class="mr-4 bg-green-100 rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 class="font-medium text-lg text-gray-800">Thomas Martin</h3>
                <div class="flex text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            </div>
            <p class="text-gray-600 italic">"La plateforme est très intuitive et les filtres sont excellents. J'ai pu affiner ma recherche et trouver exactement ce que je cherchais. Merci !"</p>
          </div>
          
          <div class="bg-white p-6 rounded-xl shadow-md">
            <div class="flex items-center mb-4">
              <div class="mr-4 bg-purple-100 rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 class="font-medium text-lg text-gray-800">Sophie Lefebvre</h3>
                <div class="flex text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            </div>
            <p class="text-gray-600 italic">"Les photos des propriétés sont de très bonne qualité et représentatives. Les descriptions sont précises et les agents sont disponibles. Une expérience positive dans l'ensemble."</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <Foter />
  </div>
</template>

<script>
import { properties } from '@/assets/proprietes.js'; // Importation des propriétés
import Heder from '../Helper/Header.vue';
import Foter from '../Helper/Footer.vue';

export default {
  components: {
    Heder,
    Foter,
  },
  data() {
    return {
      filters: {
        city: '', // Filtre par ville
        minPrice: 0, // Filtre par prix minimum
        maxPrice: 0, // Filtre par prix maximum
        bedrooms: 0, // Filtre par nombre de chambres
        bathrooms: 0, // Filtre par salles de bain
        type: '', // Type de propriété
        hasPool: false, // Filtrer par piscine
        hasGarage: false, // Filtrer par garage
        hasGarden: false // Filtrer par jardin
      },
      quickSearch: {
        city: '',
        budget: ''
      },
      properties, // Données des propriétés
      sortOption: 'price-asc', // Option de tri par défaut
      currentPage: 1, // Page actuelle pour la pagination
      itemsPerPage: 6, // Nombre d'éléments par page
    };
  },
  computed: {
    // Liste des villes uniques pour le filtre
    uniqueCities() {
      return [...new Set(this.properties.map(property => property.location))];
    },
    // Prix le plus bas parmi toutes les propriétés (formaté)
    getLowestPrice() {
      if (this.properties.length === 0) return "0 €";
      const min = Math.min(...this.properties.map(p => p.price));
      return `${min.toLocaleString()} €`;
    },
    // Prix le plus élevé parmi toutes les propriétés (formaté)
    getHighestPrice() {
      if (this.properties.length === 0) return "0 €";
      const max = Math.max(...this.properties.map(p => p.price));
      return `${max.toLocaleString()} €`;
    },
    // Propriétés filtrées
    filteredProperties() {
      return this.properties.filter(property => {
        // Filtre par ville
        const matchesCity = this.filters.city === '' || property.location === this.filters.city;
        
        // Filtre par prix
        const matchesPrice =
          (this.filters.minPrice === 0 || property.price >= this.filters.minPrice) &&
          (this.filters.maxPrice === 0 || property.price <= this.filters.maxPrice);
        
        // Filtre par caractéristiques de base
        const matchesBedrooms = this.filters.bedrooms === 0 || 
          (this.filters.bedrooms < 5 && property.features.bedrooms === this.filters.bedrooms) ||
          (this.filters.bedrooms === 5 && property.features.bedrooms >= 5);
        
        const matchesBathrooms = this.filters.bathrooms === 0 || 
          (this.filters.bathrooms < 5 && property.features.bathrooms === this.filters.bathrooms) ||
          (this.filters.bathrooms === 5 && property.features.bathrooms >= 5);
        
        // Filtre par type de propriété
        const matchesType = this.filters.type === '' || property.type === this.filters.type;
        
        // Filtres supplémentaires (caractéristiques)
        const matchesPool = !this.filters.hasPool || property.features.hasPool;
        const matchesGarage = !this.filters.hasGarage || property.features.hasGarage;
        const matchesGarden = !this.filters.hasGarden || property.features.hasGarden;
        
        return matchesCity && matchesPrice && matchesBedrooms && matchesBathrooms && 
               matchesType && matchesPool && matchesGarage && matchesGarden;
      });
    },
    // Propriétés triées
    sortedProperties() {
      const sorted = [...this.filteredProperties];
      
      switch (this.sortOption) {
        case 'price-asc':
          return sorted.sort((a, b) => a.price - b.price);
        case 'price-desc':
          return sorted.sort((a, b) => b.price - a.price);
        case 'newest':
          // Si dateAdded existe sur l'objet property
          return sorted.sort((a, b) => {
            const dateA = a.dateAdded ? new Date(a.dateAdded) : new Date(0);
            const dateB = b.dateAdded ? new Date(b.dateAdded) : new Date(0);
            return dateB - dateA;
          });
        case 'area-desc':
          // Tri par surface décroissante
          return sorted.sort((a, b) => (b.features.area || 0) - (a.features.area || 0));
        default:
          return sorted;
      }
    },
    // Propriétés paginées
    paginatedProperties() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.sortedProperties.slice(start, end);
    },
    // Nombre total de pages pour la pagination
    totalPages() {
      return Math.ceil(this.filteredProperties.length / this.itemsPerPage);
    }
  },
  methods: {
    // Réinitialiser tous les filtres
    resetFilters() {
      this.filters = {
        city: '',
        minPrice: 0,
        maxPrice: 0,
        bedrooms: 0,
        bathrooms: 0,
        type: '',
        hasPool: false,
        hasGarage: false,
        hasGarden: false
      };
      this.currentPage = 1;
    },
    // Appliquer les filtres (dans un cas réel, cela pourrait être utile pour déclencher d'autres actions)
    applyFilters() {
      // Dans une application réelle, vous pourriez ici charger les données depuis une API
      console.log('Filtres appliqués ')
      }
    },
    // Appliquer les filtres (dans un cas réel, cela pourrait être utile pour déclencher d'autres actions)
    applyFilters() {
      // Dans une application réelle, vous pourriez ici charger les données 
      // depuis une API ou effectuer d'autres actions
      console.log('Filtres appliqués:', this.filters);
    },
    // Changer de page (pour la pagination)
    changePage(page) {
      this.currentPage = page;
      // Ici vous pourriez aussi charger de nouvelles données selon la page
    }
  }
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  /* -webkit-line-clamp: 2; */
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>