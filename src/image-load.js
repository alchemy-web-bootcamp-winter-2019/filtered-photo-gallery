import makeImageTemplate from './image-template.js';


const imageList = document.getElementById('image-list');

// const filteredResult = makeImageTemplate(images, filterSelect);
// const imageFiltered = imageList.children;

function clearImages(){
    while(imageList.length > 0) {
        imageList.lastElementChild.remove();
    }
}

// filteredResult.forEach(function(filteredResult) {
//     const dom = makeImageTemplate(filteredResult);
//     imageList.appendChild(dom);
// });


export default function loadImage(images) {
    clearImages();
    images.forEach(image => {
        const dom = makeImageTemplate(image);
        imageList.appendChild(dom);
    });
}
