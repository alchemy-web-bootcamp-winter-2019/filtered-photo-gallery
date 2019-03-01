import makeImageTemplate from './image-template.js';

const imageList = document.getElementById('image-list');


export default function loadImages(images) {
    clearImages();
    images.forEach(function(image) {
        const dom = makeImageTemplate(image);
        imageList.appendChild(dom);
    });
}

function clearImages() {
    while(imageList.children.length > 0) {
        imageList.lastElementChild.remove();
    }
}

