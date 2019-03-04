import images from '../data/images.js';
import loadImages from './load-images.js';

//we dont import imageTemplate and render all the images here because index.js pulls all pieces together at the end. That last step is calling all functions to render the filtered array. Calling in imageTemplate would require an additional step and in component architecture each functionality should have its own file!

loadImages(images);

