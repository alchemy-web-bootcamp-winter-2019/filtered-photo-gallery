import makeImageTemplate from './image-template.js';

export default function loadImage(images){
    const imageGallery = document.getElementById('image-list');
    console.log(images);
    images.forEach(images => {
        const dom = makeImageTemplate(images);
        imageGallery.appendChild(dom);
    });
}
