import images from '../data/images.js';
import loadImages from './make-template-function.js';
import loadFilterFunction, { filterObjectsFunction } from './filtering-component.js';
import loadSortedArray, { sortingFunction } from './sortingFunction.js';

loadImages(images);

loadSortedArray(sortSelection => {
    const sortedArray = sortingFunction(images, sortSelection);
    loadImages(sortedArray);
    console.log(sortSelection);
});

loadFilterFunction(theFilter => {
    const filtered = filterObjectsFunction(images, theFilter);
    loadImages(filtered);
    console.log(theFilter);
});


