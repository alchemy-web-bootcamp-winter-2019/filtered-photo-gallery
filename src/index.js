import images from '../data/images.js';
import { loadImages } from '../src/image-component.js';

loadImages(images);





/*
- Use the Component Module pattern to have the `images-component.js` 
    export a `loadImages` function used by `index.js`
- Create the Filter Component. It will need to export `loadFilter` 
    that accepts a callback. Remember the form work will have to 
    happen inside the `loadFilter` function
- Log the filter object in `index.js` so you know the Filter Component 
    is wired up correctly.
- TDD the `filterImages` function and move to own module
- Incorporate the `filterImages` function into `index.js` and reload 
    the images each time it changes.
- Don't forget to remove the existing images when reloading!
*/