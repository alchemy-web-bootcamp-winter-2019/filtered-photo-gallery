import buildGallery from '../src/gallery-template.js';

const imageList = document.getElementById('image-form');

function clearImages() {
    while(imageList.children.length > 0) {
        imageList.lastElementChild.remove();
    }
}

function loadImages(images) {
    clearImages();

    images.forEach(image => {
        const dom = buildGallery(image);
        imageList.appendChild(dom);
    });
}

export default loadImages;