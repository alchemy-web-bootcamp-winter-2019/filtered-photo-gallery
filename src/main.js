import images from '../data/images.js';
import { imageTemplate } from './images-component.js';
import loadFilters from './filter-component.js';

const imageList = document.getElementById('image-list');

images.forEach(image => {
    const dom = imageTemplate(image);
    imageList.appendChild(dom);
});

loadFilters(filter => {

});