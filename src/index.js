import images from '../data/images.js';
import { createHtmlTemplate } from './image.js';
import filterImages from './filterImages.js';
import loadImages from './image.js';
import loadFilter from './loadFilter.js';


loadImages(images);

loadFilter(filterBy => {
    const filteredImages = filterImages(images, filterBy);
    loadImages(filteredImages);
});







