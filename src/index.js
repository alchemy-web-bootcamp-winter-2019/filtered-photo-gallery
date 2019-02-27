import images from '../data/images.js';
import makeImagesTemplate from './make-image-list.js';

const imageListNode = document.getElementById('image-list');

images.forEach(image => {
    const dom = makeImagesTemplate(image);
    imageListNode.appendChild(dom);
});