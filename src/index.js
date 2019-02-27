import images from '../data/images.js';
import loadImages from './make-list-template.js';
import loadFilter from './filter-component.js';
import { filterImages } from './filter-component.js';

loadImages(images);

loadFilter(filter => {
    const filtered = filterImages(images, filter);
    loadImages(filtered);
});