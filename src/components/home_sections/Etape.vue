<template>
  <section class="mb-10" ref="stepsSection">
    <h1 class="text-2xl font-bold text-center mb-8">3 ÉTAPES À SUIVRE</h1>
    <div class="flex flex-col md:flex-row justify-around items-center md:space-x-6 space-y-8 md:space-y-0">
      <div class="flex flex-col items-center step" ref="step1">
        <span class="text-xl md:text-2xl font-semibold mb-4">Faîtes vos choix</span>
        <font-awesome-icon 
          :icon="['fas', 'search']" 
          size="lg" 
          style="color: #63E6BE;" 
          class="text-2xl bg-slate-100 rounded-full w-10 h-10 md:w-20 md:h-20 p-6 md:p-10" 
        />
      </div>

      <div class="flex flex-col items-center step" ref="step2">
        <span class="text-xl md:text-2xl font-semibold mb-4">Contactez-Nous</span>
        <font-awesome-icon 
          :icon="['fas', 'phone']" 
          size="lg" 
          style="color: #63E6BE;" 
          class="text-2xl bg-slate-100 rounded-full w-10 h-10 md:w-20 md:h-20 p-6 md:p-10" 
        />
      </div>

      <div class="flex flex-col items-center step" ref="step3">
        <span class="text-xl md:text-2xl font-semibold mb-4">Procedons aux demarches</span>
        <font-awesome-icon 
          :icon="['fas', 'wand-magic-sparkles']" 
          size="lg" 
          style="color: #63E6BE;" 
          class="text-2xl bg-slate-100 rounded-full w-10 h-10 md:w-20 md:h-20 p-6 md:p-10" 
        /> 
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';

const stepsSection = ref(null);
const step1 = ref(null);
const step2 = ref(null);
const step3 = ref(null);

onMounted(() => {
  const steps = [step1.value, step2.value, step3.value];
  
  // Animation d'entrée
  gsap.from(steps, {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: 'power2.out',
  });
});
</script>

<style scoped>
/* Ajoute des styles spécifiques si nécessaire */
</style>
