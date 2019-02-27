import makeImageList from './make-image-list.js';
import images from '../data/images.js';

const imageListNode = document.getElementById('image-list');

images.forEach(image => {
    const imageLi = makeImageList(image);
    imageListNode.appendChild(imageLi);
});