// import makeImageTemplate from './image-template.js';
// import makeImageFilter from '../src/images-component.js';
import images from '../data/images.js';
import loadImage from '../src/image-load.js';
import loadFilters from '../src/filter-images.js';

loadFilters();
loadImage(images);

//something ommitted here not sure what
// loadFilters(filterOptions => {
//     const filteredChoice = makeImageFilter(images, filterOptions);
//     console.log(filterOptions);
//     loadImage(filteredChoice);
// });


