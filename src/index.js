import images from '../data/images.js';
import filterImage from './filter-image.js';
import loadFilter from './load-filter.js';
import updateGallery from './make-gallery-function.js';
// cut to loadfilter.js

// const formNode = document.getElementById('filter-list');

// cut to make-gallery-function

// const imageList = document.getElementById('image-list');

//cut to loadFilter.js
// formNode.addEventListener('submit', event => {
//     event.preventDefault();


// cut to loadFilter.js
// const formData = new FormData(formNode);
// const filter = {
//     keyword: formData.get('keyword'),
//     horns: formData.get('horns')
// };

// don't know where the below goed to????

// const filteredImageResult = filterImage(images, filter);
// const imageNode = imageList.children;

// cut to make-gallery-function

// while(imageNode.length > 0) {
//     imageList.removeChild();
// }

// not sure about wherer this goes???


//     filteredImageResult.forEach(function(images) {
//         const dom = makeGalleryFunction(images);
//         imageList.appendChild(dom);
//     });  
// });

// cut to make-gallery-function


//     images.forEach(function (images) {
//     const dom = makeGalleryFunction(images);
//     imageList.appendChild(dom);
// });

loadFilter(function(userInput) {
    const filteredUpdatedImages = filterImage(images, userInput);
    console.log(filteredUpdatedImages);
    updateGallery(filteredUpdatedImages);
});

