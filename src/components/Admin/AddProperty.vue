<template>
  <div class="admin-dashboard">
    <AdminHeader/>
    <div class="add-property-container">
      <h2>Ajouter une Nouvelle Propriété</h2>
      
      <form @submit.prevent="handleSubmit" class="property-form">
        <div class="form-group">
          <label for="title">Titre</label>
          <input type="text" id="title" v-model="form.title" placeholder="Entrez le titre de la propriété" required />
        </div>

        <div class="form-group">
          <label for="description">Description</label>
          <textarea id="description" v-model="form.description" placeholder="Décrivez la propriété" required></textarea>
        </div>

        <div class="form-group">
          <label for="price">Prix (€)</label>
          <input type="number" id="price" v-model="form.price" placeholder="Ex : 750000" required />
        </div>

        <div class="form-group">
          <label for="location">Emplacement</label>
          <input type="text" id="location" v-model="form.location" placeholder="Ex : Paris" required />
        </div>

        <div class="form-group">
          <label for="storey">Nombre d'étages</label>
          <input type="number" id="storey" v-model="form.storey" placeholder="Ex : 2" required />
        </div>

        <div class="form-group">
          <h3>Caractéristiques</h3>
          <div class="features-group">
            <div class="feature-item">
              <label for="bedrooms">Chambres</label>
              <input type="number" id="bedrooms" v-model="form.features.bedrooms" placeholder="Ex : 4" required />
            </div>

            <div class="feature-item">
              <label for="bathrooms">Salles de bain</label>
              <input type="number" id="bathrooms" v-model="form.features.bathrooms" placeholder="Ex : 3" required />
            </div>

            <div class="feature-item">
              <label for="size">Surface (m²)</label>
              <input type="number" id="size" v-model="form.features.size" placeholder="Ex : 150" required />
            </div>

            <div class="feature-item">
              <label for="parking">Places de parking</label>
              <input type="number" id="parking" v-model="form.features.parking" placeholder="Ex : 2" required />
            </div>
          </div>
        </div>

        <div class="form-group">
          <label for="image">URL de l'image</label>
          <input type="url" id="image" v-model="form.image" placeholder="Ex : https://example.com/image.jpg" required />
        </div>

        <div class="form-group featured-checkbox">
          <label for="featured">Propriété en vedette</label>
          <input type="checkbox" id="featured" v-model="form.featured" />
        </div>

        <button type="submit" class="submit-button">Ajouter la Propriété</button>
      </form>
    </div>
  </div>
  <!-- <div class="py-6"></div>
  <div class="py-6"></div> -->
</template>
  
<script>
  import AdminHeader from '../Admin/Header.vue';
  
  export default {
    components: {
      AdminHeader,
    },
    data() {
      return {
        form: {
          title: '',
          description: '',
          price: null,
          location: '',
          storey: null,
          features: {
            bedrooms: null,
            bathrooms: null,
            size: null,
            parking: null,
          },
          image: '',
          featured: false,
        },
      };
    },
    methods: {
      handleSubmit() {
        // Logique pour l'envoi des données du formulaire
        console.log("Propriété ajoutée:", this.form);
        alert("La propriété a été ajoutée avec succès !");
        this.resetForm();
      },
      resetForm() {
        this.form = {
          title: '',
          description: '',
          price: null,
          location: '',
          storey: null,
          features: {
            bedrooms: null,
            bathrooms: null,
            size: null,
            parking: null,
          },
          image: '',
          featured: false,
        };
      },
    },
  };
</script>
  
<style scoped>
  .add-property-container {
    max-width: 700px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #15763A;
  }
  
  .property-form {
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    font-weight: bold;
    color: #1F1F1F;
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
  }
  
  .features-group {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  
  .feature-item {
    flex: 1 1 calc(50% - 10px);
  }
  
  .feature-item label {
    font-weight: normal;
    color: #1F1F1F;
  }
  
  .submit-button {
    width: 100%;
    padding: 12px;
    margin-top: 10px;
    background-color: #15763A;
    color: #ffffff;
    font-size: 18px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .submit-button:hover {
    background-color: #0e5a27;
  }
  
  .featured-checkbox {
    display: flex;
    align-items: center;
  }
  
  .featured-checkbox label {
    margin-right: 10px;
  }
</style>
  