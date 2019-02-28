import images from '../data/images.js';
import loadImages from './load-images.js';
import loadFilter from './load-filter.js';
import filterImages from './filter-images.js';
//import filterImages from './filter-images.js';


//make dom

loadImages(images);

loadFilter(filter => {
    const filtered = filterImages(images, filter);
    loadImages(filtered);
});

