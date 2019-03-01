import loadImages from './load-images.js';
import images from '../data/images.js';
import loadFilters from './filter-component.js';
import filteredImages from './filtered-images.js';

loadImages(images);

loadFilters(filter => {
    console.log(images);
    console.log(filter);
    const filtered = filteredImages(images, filter);
    console.log(filtered);
    loadImages(filtered);
});

