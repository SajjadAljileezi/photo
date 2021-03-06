
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');


import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret,faPhoneVolume,faShoppingCart,faCamera,faUnlock,faImages,faCalendarAlt,faHome,faVideo,faFileVideo,faPlayCircle,faCameraRetro,faDesktop,faRocket, faQuoteLeft,faQuoteRight,faMapMarkerAlt,faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUserSecret,faPhoneVolume,faShoppingCart,faCamera,faUnlock,faImages,faCalendarAlt,faHome,faVideo,faFileVideo,faPlayCircle,faCameraRetro,faDesktop,faRocket, faQuoteLeft,faQuoteRight,faMapMarkerAlt,faEnvelopeOpen )
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lingallery from 'lingallery';


AOS.init();

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({

    el: '#app',
});
$(' .test, .navbar-brand, .new-button').click(function() {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top
    }, 1500);
});
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});




