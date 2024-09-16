<!-- Etapes -->

<template>

    <section class="mb-10">
      <h1 class="text-2xl font-bold text-center mb-8">3 ÉTAPES À SUIVRE</h1>
      <div class="flex flex-col md:flex-row justify-around items-center md:space-x-6 space-y-8 md:space-y-0">
        <div class="flex flex-col items-center">
          <span class="text-xl md:text-2xl font-semibold mb-4">Faîtes vos choix</span>
          <font-awesome-icon 
            :icon="['fas', 'wand-magic-sparkles']" 
            size="lg" 
            style="color: #63E6BE;" 
            class="text-2xl bg-slate-100 rounded-full w-10 h-10 md:w-20 md:h-20 p-6 md:p-10" 
          />
        </div>

        <div class="flex flex-col items-center">
          <span class="text-xl md:text-2xl font-semibold mb-4">Contactez-Nous</span>
          <font-awesome-icon 
            :icon="['fas', 'phone']" 
            size="lg" 
            style="color: #63E6BE;" 
            class="text-2xl bg-slate-100 rounded-full w-10 h-10 md:w-20 md:h-20 p-6 md:p-10" 
          />
        </div>

        <div class="flex flex-col items-center">
          <span class="text-xl md:text-2xl font-semibold mb-4">Procedons aux demarches</span>
          <font-awesome-icon 
            :icon="['fas', 'search']" 
            size="lg" 
            style="color: #63E6BE;" 
            class="text-2xl bg-slate-100 rounded-full w-10 h-10 md:w-20 md:h-20 p-6 md:p-10" 
          />
        </div>
      </div>
    </section>

</template>

<script setup>
// Importation de FontAwesomeIcon n'est pas nécessaire ici car il est enregistré globalement dans main.js
</script>

<style scoped>
/* Ajoute des styles spécifiques si nécessaire */
</style>