import makeImageTemplate from './image-template.js';

const imageList = document.getElementById('image-list');

function clearImages(){
    while(imageList.children.length > 0) {
        imageList.lastElementChild.remove();
    }
}

export default function loadImage(images) {
    clearImages();
    images.forEach(function(image) {
        const dom = makeImageTemplate(image);
        imageList.appendChild(dom);
    });
}
