import images from '../data/images.js'

export function createHtmlTemplate(image){
    const template = document.createElement('template');
    template.innerHTML = `
        <li>
            <p>${image.title}</p>
            <img src="${image.url}">
        </li>
        `;
    return template.content;    
};

export default function loadImages(images){
    const imageContainer = document.getElementById('image-container');

    images.forEach(image => {
        const dom = createHtmlTemplate(image);
        imageContainer.appendChild(dom);
    });
};
