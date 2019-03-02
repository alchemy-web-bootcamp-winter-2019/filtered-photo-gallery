import images from '../data/images.js';
import filterImage from './filter-image.js';
import loadFilter from './load-filter.js';
import updateGallery from './make-gallery-function.js';

loadFilter(function(userInput) {
    const filteredUpdatedImages = filterImage(images, userInput);
    updateGallery(filteredUpdatedImages);
});

