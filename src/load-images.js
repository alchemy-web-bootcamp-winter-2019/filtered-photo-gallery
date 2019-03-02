import buildImageGallery from '../src/build-image-gallery.js';

const imageList = document.getElementById('image-list');

function clearImages() {
    while(imageList.children.length > 0) {
        imageList.lastElementChild.remove();
    }
}

function loadImages(fakeAssImages) {
    clearImages();

    imageList.forEach(image => {
        const dom = buildImageGallery(image);
        imageList.appendChild(dom);
    })
}

export default loadImages;