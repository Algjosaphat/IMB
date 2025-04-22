<template>
  <AdminHeader/>
  <div class="min-h-screen bg-gray-100 flex flex-col items-center py-10">
    <div class="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
      <h1 class="text-3xl font-bold text-center mb-6 text-green-700">Ajouter une Nouvelle Propriété</h1>

      <form @submit.prevent="addProperty" class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label for="title" class="block text-sm font-medium text-gray-700">Titre</label>
          <input
            v-model="newProperty.title"
            type="text"
            id="title"
            placeholder="Entrez le titre de la propriété"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
            required
          />
        </div>

        <div>
          <label for="price" class="block text-sm font-medium text-gray-700">Prix (€)</label>
          <input
            v-model.number="newProperty.price"
            type="number"
            id="price"
            placeholder="Entrez le prix"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
            required
          />
        </div>

        <div>
          <label for="location" class="block text-sm font-medium text-gray-700">Emplacement</label>
          <input
            v-model="newProperty.location"
            type="text"
            id="location"
            placeholder="Entrez l'emplacement"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
            required
          />
        </div>

        <div>
          <label for="image" class="block text-sm font-medium text-gray-700">Image</label>
          <input
            @change="onImageSelected"
            type="file"
            id="image"
            accept="image/*"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
          />
        </div>

        <div class="md:col-span-2">
          <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            v-model="newProperty.description"
            id="description"
            rows="4"
            placeholder="Décrivez la propriété"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
            required
          ></textarea>
        </div>

        <div>
          <label for="storey" class="block text-sm font-medium text-gray-700">Nombre d'étages</label>
          <input
            v-model.number="newProperty.storey"
            type="number"
            id="storey"
            placeholder="Nombre d'étages"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
          />
        </div>

        <div>
          <label for="features" class="block text-sm font-medium text-gray-700">Caractéristiques</label>
          <div class="grid grid-cols-3 gap-2">
            <div>
              <label for="bedrooms" class="block text-xs font-medium text-gray-600">Chambres</label>
              <input
                v-model.number="newProperty.features.bedrooms"
                type="number"
                id="bedrooms"
                placeholder="Chambres"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label for="bathrooms" class="block text-xs font-medium text-gray-600">Salles de bain</label>
              <input
                v-model.number="newProperty.features.bathrooms"
                type="number"
                id="bathrooms"
                placeholder="Salles de bain"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label for="size" class="block text-xs font-medium text-gray-600">Surface (m²)</label>
              <input
                v-model.number="newProperty.features.size"
                type="number"
                id="size"
                placeholder="Surface (m²)"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>
        </div>

        <div>
          <label for="isFeatured" class="block text-sm font-medium text-gray-700">Propriété Vedette</label>
          <div class="flex items-center space-x-4 mt-1">
            <input
              v-model="newProperty.isFeatured"
              type="checkbox"
              id="isFeatured"
              class="h-5 w-5 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            />
            <span class="text-sm text-gray-600">Marquer cette propriété comme vedette</span>
          </div>
          <p class="mt-2 text-sm text-gray-500">
            <strong>Statut actuel :</strong> {{ newProperty.isFeatured ? 'Oui' : 'Non' }}
          </p>
        </div>


        <div class="md:col-span-2">
          <button
            type="submit"
            class="w-full bg-green-600 text-white rounded-md py-2 font-semibold hover:bg-green-700 shadow-lg"
          >
            Ajouter la Propriété
          </button>
        </div>
      </form>

      <div v-if="showPreview" class="mt-8 p-4 bg-gray-50 border rounded-md">
        <h3 class="text-xl font-semibold mb-4">Prévisualisation :</h3>
        <p><strong>Titre :</strong> {{ newProperty.title }}</p>
        <p><strong>Prix :</strong> {{ newProperty.price }} €</p>
        <p><strong>Emplacement :</strong> {{ newProperty.location }}</p>
        <p><strong>Description :</strong> {{ newProperty.description }}</p>
        <p><strong>Vedette :</strong> {{ newProperty.isFeatured ? 'Oui' : 'Non' }}</p>
        <img
          v-if="previewImage"
          :src="previewImage"
          alt="Prévisualisation de l'image"
          class="mt-4 rounded-md max-w-full"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AdminHeader from '../Admin/Header.vue';

export default {
  components: {
    AdminHeader,
  },
  data() {
    return {
      newProperty: {
        title: "",
        price: 0,
        location: "",
        image: "",
        description: "",
        storey: 0,
        features: {
          bedrooms: 0,
          bathrooms: 0,
          size: 0,
        },
        isFeatured: false,
      },
      previewImage: "",
      showPreview: false,
    };
  },
  methods: {
    onImageSelected(event) {
      const file = event.target.files[0];
      if (file) {
        this.previewImage = URL.createObjectURL(file);
        this.newProperty.image = file;
      }
    },
    addProperty() {
      console.log("Propriété ajoutée", this.newProperty);
      alert("Propriété ajoutée avec succès !");
      this.showPreview = true;
    },
  },
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
}
</style>
