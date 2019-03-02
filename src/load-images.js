import buildGallery from './gallery-template.js';

const imageList = document.getElementById('image-list');

function loadImages(images) {
    clearImages();

    images.forEach(image => {
        const dom = buildGallery(image);
        imageList.appendChild(dom);
    });
}

function clearImages() {
    while(imageList.children.length > 0) {
        imageList.lastElementChild.remove();
    }
}

export default loadImages;