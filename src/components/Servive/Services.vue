<template>
    <heder/>
    <div class="p-6"></div>
    <section ref="servicesSection" class="container mx-auto py-16 px-4">
      <h1 class="text-4xl font-bold text-center text-gray-800 mb-12">Nos Services</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Services list -->
        <div 
          v-for="(service, index) in services" 
          :key="index" 
          :ref="`service${index}`" 
          class="bg-white shadow-lg rounded-lg p-6"
        >
          <h2 class="text-2xl font-semibold mb-4 text-green-700 flex justify-center">{{ service.title }}</h2>
          <p class="text-gray-600">{{ service.description }}</p>
          <div class="py-1 flex justify-center">
            <router-link 
              :to="service.link" 
              class="bg-green-600 text-white py-1 px-3 rounded-full shadow-md hover:bg-green-600 transition-transform transform hover:scale-105"
            >
              Consulté <font-awesome-icon :icon="['fas', 'eye']" />
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <foter/>
  </template>
  
<script>
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  gsap.registerPlugin(ScrollTrigger);
  
  import Heder from '../Helper/Header.vue';
  import Foter from '../Helper/Footer.vue';
  
  export default {
    components: {
      Heder,
      Foter,
    },
    data() {
      return {
        services: [
        { 
            "id": 1,
            "title": "Achat de Propriétés", 
            "description": "Chez HPR COOL SARL, nous vous accompagnons dans toutes les étapes de l'achat de propriétés, que ce soit pour une résidence principale ou un investissement immobilier. Nous vous offrons un large choix de maisons, appartements, et terrains disponibles.", 
            "link": "/servicepresentation",
            "detail": "Nous analysons vos besoins et votre budget afin de vous proposer les meilleures options sur le marché. Notre équipe vous accompagne dans les démarches administratives, les négociations et la finalisation de l'achat. Nous travaillons en collaboration avec des experts pour évaluer la valeur réelle des biens, vous assurant un investissement sûr et rentable."
            },
            { 
            "id": 2,
            "title": "Vente de Propriétés", 
            "description": "Nous facilitons la vente de vos propriétés en vous apportant une expertise locale et en vous offrant une visibilité maximale auprès des acheteurs potentiels. Nos agents immobiliers sont là pour vous aider à obtenir le meilleur prix pour votre bien.", 
            "link": "/formvente",
            "detail": "Nous mettons en place des stratégies de marketing personnalisées pour attirer un maximum d'acheteurs. Notre expertise dans l'évaluation immobilière vous permet de positionner votre bien au prix juste, tout en maximisant sa valeur. Nous gérons également les visites, les négociations et les aspects légaux pour une transaction fluide."
            },
            { 
            "id": 3,
            "title": "Gestion Locative", 
            "description": "Laissez-nous gérer vos biens locatifs pour vous. Nous nous occupons de tout, de la recherche de locataires fiables à la gestion des paiements et de l'entretien de la propriété. Vous profitez d'un revenu locatif sans les tracas de la gestion quotidienne.", 
            "link": "/servicepresentation",
            "detail": "Nous prenons en charge l'ensemble du processus locatif : recherche et sélection de locataires, rédaction de baux, gestion des loyers, et entretien régulier des biens. Nos services incluent également la résolution des litiges éventuels, la gestion des sinistres et la maintenance des équipements, vous garantissant une tranquillité d'esprit totale."
            },
            { 
            "id": 4,
            "title": "Construction / Rénovation", 
            "description": "Que vous souhaitiez construire votre maison de rêve ou rénover une propriété existante, HPR COOL SARL vous accompagne dans vos projets de construction et de rénovation avec des solutions sur mesure adaptées à vos besoins et à votre budget.", 
            "link": "/",
            "detail": "Nous collaborons avec des architectes et entrepreneurs qualifiés pour réaliser vos projets, de la conception à la livraison. Que ce soit pour une nouvelle construction ou une rénovation, nous assurons le suivi complet des travaux, le respect des délais et des budgets, tout en garantissant un résultat de haute qualité."
            },
            { 
            "id": 5,
            "title": "Suivi / Évaluation des chantiers", 
            "description": "Nos experts supervisent vos chantiers de construction ou de rénovation afin de s'assurer que tout se déroule selon les plans et dans le respect des délais. Nous réalisons également des évaluations détaillées pour garantir la qualité du travail.", 
            "link": "/",
            "detail": "Nous offrons un service de suivi rigoureux à chaque étape de votre projet de construction ou rénovation. Des contrôles réguliers sont effectués sur le site pour s'assurer que les normes de qualité et de sécurité sont respectées. Des rapports d'avancement détaillés vous sont fournis, vous permettant de suivre l'évolution du chantier en toute transparence."
            },
            { 
            "id": 6,
            "title": "Service d'Entretien", 
            "description": "Protégez votre investissement immobilier grâce à nos services d'entretien. Que ce soit pour des réparations, du nettoyage ou des améliorations, nous nous assurons que votre propriété reste en parfait état tout au long de l'année.", 
            "link": "/",
            "detail": "Notre équipe d'entretien intervient pour maintenir votre propriété en excellent état. Nous gérons les petites réparations, la maintenance préventive, ainsi que les interventions urgentes. Des services de nettoyage professionnel et des conseils pour l'amélioration de votre bien sont également inclus, pour vous offrir une propriété toujours valorisée."
            },
        ],
      };
    },
    mounted() {
        // this.services = servicesData; // Charger les données JSON
        
      // Animation sur la section des services
      gsap.from(this.$refs.servicesSection, {
        opacity: 0,
        duration: 1,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: this.$refs.servicesSection,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
  
      // Animation sur chaque service
      this.services.forEach((service, index) => {
        const serviceCard = this.$refs[`service${index}`][0];
        gsap.from(serviceCard, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: serviceCard,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        });
      });
    },
  };
  </script>
  
  <style scoped>
  /* Ajoutez des styles spécifiques ici si nécessaire */
  </style>
  