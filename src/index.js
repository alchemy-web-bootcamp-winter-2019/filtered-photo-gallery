import images from '../data/images.js';
import loadImages from './make-template-function.js';
import loadFilterFunction, { filterObjectsFunction } from './filtering-component.js';

loadImages(images);
loadFilterFunction(theFilter => {
    const filtered = filterObjectsFunction(images, theFilter);
    loadImages(filtered);
    console.log(theFilter);
});

