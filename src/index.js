import images from '../data/images.js';
import { createTemplate } from '../src/image-component.js';
const imageContainer = document.getElementById('image-container');


images.forEach(image => {
    const dom = createTemplate(image);
    imageContainer.appendChild(dom);
});