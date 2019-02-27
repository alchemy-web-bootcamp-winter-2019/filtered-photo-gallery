import images from '../data/images.js';
import { makeImageTemplate } from './image-component.js';
const imageList = document.getElementById('image-list');

images.forEach(image => {
    imageList.appendChild(makeImageTemplate(image));
});

