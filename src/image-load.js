import makeImageTemplate from './image-template.js';

export default function loadImage(images){
    const imageGallery = document.getElementById('image-list');
    images.forEach(images => {
        const dom = makeImageTemplate(images);
        imageGallery.appendChild(dom);
    });
}
