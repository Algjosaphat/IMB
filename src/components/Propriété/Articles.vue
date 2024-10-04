<template>
  <div>
    <Heder />
    <div class="container mx-auto py-32 px-14">
      <h1 class="text-4xl font-bold text-center mb-12">Nos Propriétés</h1>

      <!-- Filtres -->
      <div class="flex flex-wrap justify-center gap-4 mb-8">
        <div>
          <label for="city">Ville:</label>
          <select v-model="filters.city" id="city" class="border p-2 rounded">
            <option value="">Toutes</option>
            <option value="Paris">Paris</option>
            <option value="Normandie">Normandie</option>
            <option value="Marseille">Marseille</option>
            <option value="Côte d'Azur">Côte d'Azur</option>
          </select>
        </div>

        <div>
          <label for="minPrice">Prix Min:</label>
          <input type="number" v-model.number="filters.minPrice" id="minPrice" class="border p-2 rounded" />
        </div>

        <div>
          <label for="maxPrice">Prix Max:</label>
          <input type="number" v-model.number="filters.maxPrice" id="maxPrice" class="border p-2 rounded" />
        </div>

        <div>
          <label for="bedrooms">Chambres:</label>
          <input type="number" v-model.number="filters.bedrooms" id="bedrooms" class="border p-2 rounded" />
        </div>

        <div>
          <label for="bathrooms">Salles de bain:</label>
          <input type="number" v-model.number="filters.bathrooms" id="bathrooms" class="border p-2 rounded" />
        </div>
      </div>

      <!-- Liste des propriétés -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(property, index) in filteredProperties" :key="index" class="bg-white shadow-lg rounded-lg overflow-hidden">
          <img :src="property.image" alt="Property Image" class="w-full h-64 object-cover" />
          <div class="p-6">
            <h2 class="text-2xl font-bold mb-2">{{ property.title }}</h2>
            <p class="text-gray-700 mb-4">{{ property.description }}</p>
            <div class="flex flex-col md:flex-row md:justify-between mb-4">
              <div>
                <h3 class="text-xl font-semibold">Prix</h3>
                <p class="text-lg text-green-600">{{ property.price }}</p>
              </div>
              <div>
                <h3 class="text-xl font-semibold">Localisation</h3>
                <p>{{ property.location }}</p>
              </div>
            </div>
            <div class="mb-4">
              <h3 class="text-xl font-semibold">Caractéristiques</h3>
              <ul class="list-disc pl-5">
                <li>{{ property.features.bedrooms }} Chambres</li>
                <li>{{ property.features.bathrooms }} Salles de bain</li>
                <li>{{ property.features.size }} m²</li>
                <li>{{ property.features.parking }} Place(s) de parking</li>
              </ul>
            </div>
            <br>
            <div class="flex justify-center">
              <router-link :to="{ path: '/contact' }">
                <button class="bg-green-600 text-white py-2 px-10 rounded-full shadow-md transition-transform transform hover:scale-105">
                  Contactez-nous
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Foter />
  </div>
</template>

<script>
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
        city: '',
        minPrice: 0,
        maxPrice: 0,
        bedrooms: 0,
        bathrooms: 0,
      },
      properties: [
        {
          image: 'https://www.architoi.com/wp-content/uploads/2022/07/ralph-ravi-kayden-mR1CIDduGLc-unsplash-1024x679.jpg',
          title: 'Belle Maison à Paris',
          description: 'Maison spacieuse avec jardin, située dans un quartier calme de Paris.',
          price: 750000,
          location: 'Paris',
          features: {
            bedrooms: 4,
            bathrooms: 3,
            size: 150,
            parking: 2
          }
        },
        // Ajoute d'autres propriétés ici
        {
          image: 'https://media.inmobalia.com/imgV1/B98Le8~d7Me7MjCwPLJ6Ayra8IUhJ5ktnTPjoqTXEgsEG0U7f5gnGvKgfz7aB8oKA_XWwr_PYfPFkRpynsJ0kvms_koqAmhpoOHQYRswhYQFl3Ad0eZY.jpeg',
          title: 'Maison de Campagne en Normandie',
          description: 'Charmante maison de campagne avec grand jardin.',
          price: 350000,
          location: 'Normandie',
          features: {
            bedrooms: 5,
            bathrooms: 4,
            size: 200,
            parking: 3
          }
        },
        // autres propriétés...
        {
            image: 'https://www.architoi.com/wp-content/uploads/2022/07/ralph-ravi-kayden-mR1CIDduGLc-unsplash-1024x679.jpg',
            title: 'Belle Maison à Paris',
            description: 'Maison spacieuse avec jardin, située dans un quartier calme de Paris.',
            price: '750 000 €',
            location: '123 Rue de l\'Immobilier, Paris, France',
            features: {
              bedrooms: 4,
              bathrooms: 3,
              size: 150,
              parking: 2
            }
          },
          // Ajoute d'autres propriétés ici
          {
            image: 'https://media.inmobalia.com/imgV1/B98Le8~d7Me7MjCwPLJ6Ayra8IUhJ5ktnTPjoqTXEgsEG0U7f5gnGvKgfz7aB8oKA_XWwr_PYfPFkRpynsJ0kvms_koqAmhpoOHQYRswhYQFl3Ad0eZY.jpeg',
            title: 'Maison de Campagne en Normandie',
            description: 'Charmante maison de campagne avec grand jardin.',
            price: '350 000 €',
            location: '789 Route de la Campagne, Normandie, France',
            features: {
              bedrooms: 5,
              bathrooms: 4,
              size: 200,
              parking: 3
            }
          },
          {
            image: 'https://media.inmobalia.com/imgV1/B98Le8~d7M9k3DegigWkzHXQlgzMFGqGJJp6ZRUcpX033lqadFBp2i4GGW4X3JDm~11J_coE7XMgSyFWgioo4vCKf4wUKEFeX_UhvhTBcdwUe7qaa6SBQbQU_WccjPbvVolkSJlRtoq~mxNeCJ56N0~nPZbQCHBxnpDJRyp1Ki2PlZav84Ls7w2umknXyz3NxVvvak898xmknXl35x6kCyUZwSClwshZMjNzImMS~u1uo0u5ItVWEIHcJh2aNofxG3ynfGyGmG25dFhKUG78yyYiN8bkFWWd7Gzt9WDEP0HGyJH3cEKKjRMkF5H0CWgnct_bVu2OKllkfo4esmAB7bCOC4khdaMZb5fGFovg~gRrYPR7RF~tSw--.jpg',
            title: 'Loft à Marseille',
            description: 'Loft spacieux avec terrasse ensoleillée.',
            price: '650 000 €',
            location: '321 Boulevard de la Liberté, Marseille, France',
            features: {
              bedrooms: 2,
              bathrooms: 1,
              size: 110,
              parking: 1
            }
          },
          {
            image: 'https://media.inmobalia.com/imgV1/B98Le8~d7M9k3DegigWkzHXQlgzMFGqGJJp6ZRUcpX033lqadFBp2i4GGW4X3JDm~11J_coE7XMgSyFWgioo4vCKf4wUKEFeX_UhvhTBcdwUe7qaaDjhAkSq_Oheh5LS7WNXTbRbOeK86Iw3lFoRPiD_ir_RXo8Oy_owz931viJ8c1na8rofaCpqJW31wCIKu77lqu800MHZJ4ky_xspXzxXaLS8IEeYGQOgiB0uV8t9oFVwtxSHxI2RFx6s0Jd8wn_NNm9wQ9GORcHci19Uf3KVebuhUOvjbOsMuKJwLkZgVTcfpRtjobwm5y8wMbYI90onEtqhBKejsHXTwucE~bsEivj1c5jbJBus1ZzvutsoGSwFfTBvgg--.jpg',
            title: 'Villa au Bord de Mer',
            description: 'Villa luxueuse avec accès direct à la plage.',
            price: '1 200 000 €',
            location: '654 Plage du Soleil, Côte d\'Azur, France',
            features: {
              bedrooms: 6,
              bathrooms: 5,
              size: 300,
              parking: 4
            }
          },
      ]
    };
  },
  computed: {
    filteredProperties() {
      return this.properties.filter(property => {
        const meetsCity = this.filters.city === '' || property.location === this.filters.city;
        const meetsPrice =
          (this.filters.minPrice === 0 || property.price >= this.filters.minPrice) &&
          (this.filters.maxPrice === 0 || property.price <= this.filters.maxPrice);
        const meetsBedrooms = this.filters.bedrooms === 0 || property.features.bedrooms >= this.filters.bedrooms;
        const meetsBathrooms = this.filters.bathrooms === 0 || property.features.bathrooms >= this.filters.bathrooms;
        return meetsCity && meetsPrice && meetsBedrooms && meetsBathrooms;
      });
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
