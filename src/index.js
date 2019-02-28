import makeImageTemplate from './image-template.js';
import makeImageFilter from '../src/images-component.js';
import images from '../data/images.js';
import loadImage from '../src/image-load.js';
import loadFilters from '../src/filter-images.js';

loadImage(images);

loadFilters(filterOptions => {
    const filteredChoice = makeImageFilter(images, filterOptions);
    loadImage(filteredChoice);
});


