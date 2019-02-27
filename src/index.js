import images from '../data/images.js';
import makeImageTemplate from './make-image-template.js';

const imageDisplay = document.getElementById('image-display');

//make dom

images.forEach(image => {
    const dom = makeImageTemplate(image);
    imageDisplay.appendChild(dom);
});