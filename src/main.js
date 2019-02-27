import images from '../data/images.js';
import makeTemplate from './make-template.js';

const imageList = document.getElementById('image-list');

images.forEach(image => {
    const dom = makeTemplate(image);
    imageList.appendChild(dom);
});