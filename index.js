import createListItem from './src/create-list-item.js';
import images from './data/images.js';

const galleryNode = document.getElementById('photo-gallery');

images.forEach(imageObject =>{
    const listItem = createListItem(imageObject);
    galleryNode.appendChild(listItem);
});


