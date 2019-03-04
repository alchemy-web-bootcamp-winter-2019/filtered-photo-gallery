import images from '../data/images.js';
import loadImages from './load-images.js';
import filteredImages from './filtered-images.js';
import filterInputs from './filter-component.js';

loadImages(images);

filterInputs(filter => {
    const filtered = filteredImages(images, filter);
    loadImages(filtered);
});