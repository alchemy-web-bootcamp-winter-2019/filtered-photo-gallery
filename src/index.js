import generateHtmlTemplate from './template.js';
import images from '../data/images.js';

const imageList = document.getElementById('image-list');

images.forEach(image => {
    const dom = generateHtmlTemplate(image);
    imageList.appendChild(dom);
});
