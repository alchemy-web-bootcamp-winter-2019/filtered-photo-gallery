import { createHtmlTemplate } from './image.js';
import images from '../data/images.js';

const form = document.getElementById('form-filter');
const imageContainer = document.getElementById('image-container');

form.addEventListener('submit', event => {
    const keywordInput =
    const hornInput = 
})

images.forEach((image) => {
    const template = document.createElement('template');
    template.innerHTML = createHtmlTemplate(image);
    const createdTemplate = template.content;
    imageContainer.appendChild(createdTemplate);
});



