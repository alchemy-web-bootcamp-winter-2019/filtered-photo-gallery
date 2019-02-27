import images from '../data/images.js';
import loadImages from './image-component.js';
import loadFilter from './filter-component.js';
import filterImages from './filter-images.js';

loadImages(images);

loadFilter(filter => {
    loadImages(filterImages(filter, images));
});


