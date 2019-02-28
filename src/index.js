import loadImages from './load-component.js';
import images from '../data/images.js';
import loadFilter, { filterImages } from './filter-component.js';

loadImages(images);

loadFilter(filter => {
    const filteredImages = filterImages(images, filter);
    loadImages(filteredImages);
});