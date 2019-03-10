import images from '../data/images.js';
import { loadImages } from '../src/image-component.js';
import { filterImages } from '../src/filter-component.js';
import loadFilter from '../src/filter-component.js';

loadImages(images);

loadFilter(filter => {
    const filteredImages = filterImages(images, filter);
    loadImages(filteredImages);
});
