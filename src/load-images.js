import imageTemplate from './image-template.js';

export default function loadImages(images) {
    const imageContainer = document.getElementById('image-container');
    images.forEach(image => {
        const dom = imageTemplate(image);
        imageContainer.appendChild(dom);
    });
}

//were doing this here and not in index.js because we have to grab the imageContainer and append each individual image onto it. This would be an additional step in index.js which should only have the final filtering step. 


//why when I was importing images did it say it wasnt being used even though its used in the function? oh maybe because its just a parameter in the function where as if I were to call the function and then pass images after the functions created. 

