// route/indexedDB.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home/Home.vue';
import Contact from '../components/Contact/Contact.vue';
import Propriété from '../components/Propriété/Articles.vue';
import APropos from '../components/AboutMe/APropos.vue';
import Loginpage from '../components/Connexion/Loginpage.vue';
import Signinpage from '../components/Connexion/Signinpage.vue';
import FormVente from '../components/form/formvente.vue';
import FormLocation from '../components/form/formlocation.vue';
import Services from '../components/Servive/Services.vue';
import Profil from '../components/profil/profil.vue';
import Notifications from '../components/notifications/notifications.vue';
import Servicepresentation from '../components/presentation/Servicepresentation.vue';
// import Propertiespresentation from '../components/presentation/Propertiespresentation.vue';
import PropertyDetail from '../components/presentation/Propertiespresentation.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/properties',
    name: 'Propriété',
    component: Propriété
  },
  {
    path: '/About',
    name: 'APropos',
    component: APropos
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/login',
    name: 'Loginpage',
    component: Loginpage
  },
  {
    path: '/signin',
    name: 'Signinpage',
    component: Signinpage
  },
  {
    path: '/formvente',
    name: 'FormVente',
    component: FormVente
  },
  {
    path: '/formlocation',
    name: 'FormLocation',
    component: FormLocation
  },
  {
    path: '/Services',
    name: 'Services',
    component: Services
  },
  {
    path: '/profil',
    name: 'Profil',
    component: Profil
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Notifications
  },
  {
    path: '/servicepresentation',
    name: 'Servicepresentation',
    component : Servicepresentation
  },
  // {
  //   path: '/propertiespresentation',
  //   name: 'Propertiespresentation',
  //   component : Propertiespresentation
  // },
  { 
    path: '/articles/:id', 
    name: 'PropertyDetail', 
    component: PropertyDetail, 
    props: true 
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
