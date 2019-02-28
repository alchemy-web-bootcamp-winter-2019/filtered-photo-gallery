import buildGallery from './build-gallery.js';
import images from '../data/images.js';
const imageListNode = document.getElementById('image-list');

images.forEach(image => {
    const dom = buildGallery(image);
    imageListNode.appendChild(dom);
});
