import makeImageFilter from '../src/images-component.js';
import images from '../data/images.js';
import loadImage from '../src/image-load.js';
import loadFilters from '../src/filter-images.js';

// loadFilters();
loadImage(images);

//something ommitted here not sure what

loadFilters(filter => {
    const filteredChoice = makeImageFilter(images, filter);
    loadImage(filteredChoice);
});


