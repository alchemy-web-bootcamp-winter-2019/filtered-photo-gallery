import images from '../data/images.js';
import { createImageTemplate } from './image-component.js';

const imageList = document.getElementById('image-list');

images.forEach(image => {
    const dom = createImageTemplate(image);
    imageList.appendChild(dom);
});