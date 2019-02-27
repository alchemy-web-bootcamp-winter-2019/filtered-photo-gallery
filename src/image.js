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

function loadImages(images){
    const imageContainer = document.getElementById('image-container');

    images.forEach(image => {
        const dom = createHtmlTemplate(image);
        imageContainer.appendChild(dom);
    });
};

export default loadImages(images);
