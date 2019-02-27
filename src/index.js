import images from '../data/images.js';
import { makeImageTemplate } from './make-list-template.js';
import loadImages from './make-list-template.js';
import loadFilter from './filter-component.js';

const imageList = document.getElementById('image-list');

loadImages(images);

loadFilter(callback => {
    
});