import images from '../data/images.js';
import buildGallery from './gallery-component.js';
const formNode = document.getElementById('form');
const formData = new FormData(formNode);



buildGallery(images);
