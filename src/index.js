import { createHtmlTemplate } from './image.js';
import loadImages from './image.js';
import filterImages from './filterImages.js';
import loadFilter from './filterImages.js';
import images from '../data/images.js';


loadImages(images);

loadFilter(filtered => {
    const filteredImages = filterImages(images, filterBy);
    loadImages(filteredImages);
});







