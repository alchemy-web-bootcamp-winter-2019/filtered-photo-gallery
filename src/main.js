import images from '../data/images.js';
import loadImages from './images-component.js';
import loadFilters from './filter-component.js';
import { filterImages } from './filter-component.js';

loadImages(images);

loadFilters(filter => {
    const filtered = filterImages(images, filter);
    loadImages(filtered);
});