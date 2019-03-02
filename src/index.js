import fakeAssImages from '../data/images.js';
import filterImages from './filter-images.js';
import loadImages from './load-images.js'; 
import filterInput from './filter-component.js';

loadImages(fakeAssImages);

filterInput(filter => {
    const filtered = filterImages(fakeAssImages, filter);
    loadImages(filtered);

});