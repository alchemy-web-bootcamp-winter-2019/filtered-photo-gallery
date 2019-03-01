import images from '../data/images.js';
import loadImages from './image-component.js';
import getFilters from './filter-componenet.js';
import filterImages from './filter-images.js';


loadImages(images);
getFilters(filter => {
    const filteredImages = filterImages(filter, images);
    loadImages(filteredImages);
});