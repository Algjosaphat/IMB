<!-- Nos Services -->

<template>
    <heder/>
    <div class="p-6"></div>
    <section class="container mx-auto py-16 px-4">
      <h1 class="text-4xl font-bold text-center text-gray-800 mb-12">Nos Services</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Service 1: Achat de Propriétés -->
            <div class="bg-white shadow-lg rounded-lg p-6">
                <h2 class="text-2xl font-semibold mb-4 text-green-700 flex justify-center">Achat de Propriétés</h2>
                <p class="text-gray-600">
                Chez HPR COOL SARL, nous vous accompagnons dans toutes les étapes de l'achat de propriétés, que ce soit pour une résidence principale ou un investissement immobilier. Nous vous offrons un large choix de maisons, appartements, et terrains disponibles.
                </p>
                <div class="py-1 flex justify-center">
                    <router-link to="/" class="bg-green-600 text-white py-1 px-3 rounded-full shadow-md hover:bg-green-600 transition-transform transform hover:scale-105">
                        Consulté <font-awesome-icon :icon="['fas', 'eye']" />
                    </router-link>
                </div>
            </div>
        
            <!-- Service 2: Vente de Propriétés -->
            <div class="bg-white shadow-lg rounded-lg p-6">
                <h2 class="text-2xl font-semibold mb-4 text-green-700 flex justify-center">Vente de Propriétés</h2>
                <p class="text-gray-600">
                Nous facilitons la vente de vos propriétés en vous apportant une expertise locale et en vous offrant une visibilité maximale auprès des acheteurs potentiels. Nos agents immobiliers sont là pour vous aider à obtenir le meilleur prix pour votre bien.
                </p>
                <div class="py-1 flex justify-center">
                    <router-link to="/formvente" class="bg-green-600 text-white py-1 px-3 rounded-full shadow-md hover:bg-green-600 transition-transform transform hover:scale-105">
                        Consulté <font-awesome-icon :icon="['fas', 'eye']" />
                    </router-link>
                </div>
            </div>
        
            <!-- Service 3: Gestion Locative -->
            <div class="bg-white shadow-lg rounded-lg p-6">
                <h2 class="text-2xl font-semibold mb-4 text-green-700 flex justify-center">Gestion Locative</h2>
                <p class="text-gray-600">
                Laissez-nous gérer vos biens locatifs pour vous. Nous nous occupons de tout, de la recherche de locataires fiables à la gestion des paiements et de l'entretien de la propriété. Vous profitez d'un revenu locatif sans les tracas de la gestion quotidienne.
                </p>
                <div class="py-1 flex justify-center">
                    <router-link to="/" class="bg-green-600 text-white py-1 px-3 rounded-full shadow-md hover:bg-green-600 transition-transform transform hover:scale-105">
                        Consulté <font-awesome-icon :icon="['fas', 'eye']" />
                    </router-link>
                </div>
            </div>
        
            <!-- Service 4: Construction / Rénovation -->
            <div class="bg-white shadow-lg rounded-lg p-6">
                <h2 class="text-2xl font-semibold mb-4 text-green-700 flex justify-center">Construction / Rénovation</h2>
                <p class="text-gray-600">
                Que vous souhaitiez construire votre maison de rêve ou rénover une propriété existante, HPR COOL SARL vous accompagne dans vos projets de construction et de rénovation avec des solutions sur mesure adaptées à vos besoins et à votre budget.
                </p>
                <div class="py-1 flex justify-center">
                    <router-link to="/" class="bg-green-600 text-white py-1 px-3 rounded-full shadow-md hover:bg-green-600 transition-transform transform hover:scale-105">
                        Consulté <font-awesome-icon :icon="['fas', 'eye']" />
                    </router-link>
                </div>
            </div>
        
            <!-- Service 5: Suivi / Evaluation des chantiers -->
            <div class="bg-white shadow-lg rounded-lg p-6">
                <h2 class="text-2xl font-semibold mb-4 text-green-700 flex justify-center">Suivi / Évaluation des chantiers</h2>
                <p class="text-gray-600">
                Nos experts supervisent vos chantiers de construction ou de rénovation afin de s'assurer que tout se déroule selon les plans et dans le respect des délais. Nous réalisons également des évaluations détaillées pour garantir la qualité du travail.
                </p>
                <div class="py-1 flex justify-center">
                    <router-link to="/" class="bg-green-600 text-white py-1 px-3 rounded-full shadow-md hover:bg-green-600 transition-transform transform hover:scale-105">
                        Consulté <font-awesome-icon :icon="['fas', 'eye']" />
                    </router-link>
                </div>
            </div>
        
            <!-- Service 6: Service d'entretien -->
            <div class="bg-white shadow-lg rounded-lg p-6">
                <h2 class="text-2xl font-semibold mb-4 text-green-700 flex justify-center">Service d'Entretien</h2>
                <p class="text-gray-600">
                Protégez votre investissement immobilier grâce à nos services d'entretien. Que ce soit pour des réparations, du nettoyage ou des améliorations, nous nous assurons que votre propriété reste en parfait état tout au long de l'année.
                </p> <br>
                <div class="py-1 flex justify-center">
                    <router-link to="/" class="bg-green-600 text-white py-1 px-3 rounded-full shadow-md hover:bg-green-600 transition-transform transform hover:scale-105">
                        Consulté <font-awesome-icon :icon="['fas', 'eye']" />
                    </router-link>
                </div>
            </div>
        </div>

    </section>
    <foter/>
</template>
  
<script>
    import Heder from '../Helper/Header.vue';
    import Foter from '../Helper/Footer.vue';

    export default {
    components: {
        Heder,
        Foter,
    },
    };
</script>

<style scoped>
/* Ajoutez des styles spécifiques ici si nécessaire */
</style>
  
