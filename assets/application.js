import './scss/index.scss';
import './scss/contextual.scss';
import './scss/gallery.scss';
import dropdowns from './js/dropdowns.js';
import autocomplete from './js/autocomplete.js';
import createMap from "./js/map";
import cookieConsent from './js/cookie-consent.js';

document.addEventListener("DOMContentLoaded", function (event) {
    dropdowns();
    autocomplete();
    createMap();
    cookieConsent();
});
