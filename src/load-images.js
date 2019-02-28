import makeImageTemplate from './make-image-template.js';

const imageDisplay = document.getElementById('image-display');

export default function loadImages(bananas) {
    while(imageDisplay.children.length > 0){
        imageDisplay.lastElementChild.remove();
    }
    
    bananas.forEach(banana => {
        const dom = makeImageTemplate(banana);
        imageDisplay.appendChild(dom);
    });

}

