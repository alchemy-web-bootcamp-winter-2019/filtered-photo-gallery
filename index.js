import createListItem from './src/create-list-item.js';
import images from './data/images.js';
import './src/filter-component.js';

const galleryNode = document.getElementById('photo-gallery');

images.forEach(imageObject =>{
    const listItem = createListItem(imageObject);
    galleryNode.appendChild(listItem);
});


