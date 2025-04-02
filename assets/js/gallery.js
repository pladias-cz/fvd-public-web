import BlueimpGallery from "blueimp-gallery/js/blueimp-gallery.js";
import "blueimp-gallery/css/blueimp-gallery.css";

export default function enableGallery() {
    let elements = document.getElementsByClassName("gallery-clickable");

    Array.from(elements).forEach(function(element) {
        element.onclick = function(event) {
            event = event || window.event;
            var target = event.target || event.srcElement;
            var link = target.src ? target.parentNode : target;
            var options = { index: link, event: event };
            var links = this.getElementsByClassName('picture-link');
            new BlueimpGallery(links, options);
        };
    });
}

document.addEventListener("DOMContentLoaded", function (event) {
    enableGallery();
});
