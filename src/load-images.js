import buildImageGallery from './build-image-gallery.js';

const imageList = document.getElementById('image-list');

function loadImages(fakeAssImages) {
    clearImages();

    fakeAssImages.forEach(image => {
        const dom = buildImageGallery(image);
        imageList.appendChild(dom);
    });
}


function clearImages() {
    while(imageList.children.length > 0) {
        imageList.lastElementChild.remove();
    }
}

export default loadImages;