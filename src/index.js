import images from '../data/images.js';
import makeGalleryFunction from './make-gallery-function.js';

const imageList = document.getElementById('image-list');

images.forEach(function(images) {
    const dom = makeGalleryFunction(images);
    imageList.appendChild(dom);
});
