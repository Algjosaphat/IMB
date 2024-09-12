import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/style.css'
// Importation de FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Importation des icônes spécifiques de FontAwesome que vous souhaitez utiliser
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faUser , faPlus, faEye , faArrowRight, faArrowLeft , faWandMagicSparkles , faPhone ,faSearch} from '@fortawesome/free-solid-svg-icons'; // Import d'icône 'user' pour l'icône de connexion

// Ajoutez les icônes à la bibliothèque
library.add(faFacebookF, faTwitter, faInstagram, faLinkedinIn , faUser , faPlus , faEye ,faArrowRight , faArrowLeft, faWandMagicSparkles, faPhone, faSearch);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);
app.mount('#app');
