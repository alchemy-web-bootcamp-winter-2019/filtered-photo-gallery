import images from '../data/images.js';
import { loadImages } from './make-html-template.js';
import filterImages from './filter-images.js';
import loadFilter from './load-filter.js';

loadImages(images);

loadFilter(filter => {
    const filteredImages = filterImages(filter, images);
    loadImages(filteredImages);
});