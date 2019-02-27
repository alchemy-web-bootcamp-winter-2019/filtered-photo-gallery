import images from '../data/images.js';
import loadImages from '../src/images-component.js';
import loadFilters from '../src/filter-component.js';
import { filterImages } from '../src/filter-component.js';

loadImages(images);

loadFilters(filter => {
    const filtered = filterImages(images, filter);
    loadImages(filtered);
});