import images from '../data/images.js';

const imageDisplay = document.getElementById('image-display');

//create template

function makeImageTemplate(image) {

    const html = 
        `<li>
            <h2>${image.title}</h2>
            <img src="${image.url}" alt="${image.description}">
        </li>`;


    const template = document.createElement('template');
    template.innerHTML = html;

    return template.content;
    
}