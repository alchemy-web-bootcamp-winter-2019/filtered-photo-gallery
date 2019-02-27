import makeImageTemplate from './image-template.js';
import images from '../data/images.js';


const imageGallery = document.getElementById('image-list');

images.forEach(images => {
    const dom = makeImageTemplate(images);
    imageGallery.appendChild(dom);
});
