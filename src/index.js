import generateHtmlTemplate from './template.js';
import images from '../data/images.js';

const imageList = document.getElementById('image-list');

images.forEach(animalImage => {
    const dom = generateHtmlTemplate(animalImage);
    imageList.appendChild(dom);
});
