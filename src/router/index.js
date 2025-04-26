// route/indexedDB.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home/Home.vue';
import Contact from '../components/Contact/Contact.vue';
import Propriété from '../components/Propriété/Articles.vue';
import APropos from '../components/AboutMe/APropos.vue';
import Loginpage from '../components/Connexion/Loginpage.vue';
import Signinpage from '../components/Connexion/Signinpage.vue';
import FormAchat from '../components/form/formachat.vue';
import FormVente from '../components/form/formvente.vue';
import FormLocation from '../components/form/formlocation.vue';
import Services from '../components/Servive/Services.vue';
import Profil from '../components/profil/profil.vue';
import Notifications from '../components/notifications/notifications.vue';
import Servicepresentation from '../components/presentation/Servicepresentation.vue';
// import Propertiespresentation from '../components/presentation/Propertiespresentation.vue';
import PropertyDetail from '../components/presentation/Propertiespresentation.vue';

// Côté admin
import AdminDashboard from '../components/views/AdminDashboard.vue';
import Defaut from '../components/Admin/Defaut.vue';
import UserList from '../components/Admin/UserList.vue';
import PropertyList from '../components/Admin/PropertyList.vue';
import AddProperty from '../components/Admin/AddProperty.vue';
import Statistics from '../components/Admin/Statistics.vue';


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
    path: '/formachat',
    name: 'FormAchat',
    component: FormAchat
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
  // Côté admin,
  {
    path: '/admin',
    component: AdminDashboard,
    children: [
        { path:  'Defaut', component: Defaut},
        { path: 'users', component: UserList },
        { path: 'properties', component: PropertyList },
    ],
    meta: { requiresAuth: true },
  },
  {
    path: '/addproperty',
    name: 'AddProperty',
    component: AddProperty,
    // meta: { requiresAuth: true },
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: Statistics,
    // meta: { requiresAuth: true },
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 })
});

// Ajouter une vérification pour restreindre l'accès aux routes admin
// router.beforeEach((to, from, next) => {
//   const isAuthenticated = /* insérer la logique d'authentification ici */;
//   if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
//       next({ name: 'Loginpage' }); // Redirige vers la page de connexion
//   } else {
//       next();
//   }
// });

export default router;
