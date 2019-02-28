import images from '../data/images.js';
import imageTemplate from './image-template.js';

const imageList = document.getElementById('image-list');

images.forEach(image => {
    const dom = imageTemplate(image);
    imageList.appendChild(dom);
});