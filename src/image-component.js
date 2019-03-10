function createTemplate(image) {
    const template = document.createElement('template');
    
    template.innerHTML = /*html*/`
        <li class="image-card">
            <p class="image-title">${image.title}</p>
            <img src="${image.url}">
            <p class="horn-count">Horns: ${image.horns}</p>
        </li>
    `;
    return template.content;
}

export function loadImages(images) {
    const imageContainer = document.getElementById('image-container');

    while(imageContainer.children.length > 0) {
        imageContainer.removeChild(imageContainer.lastChild);
    }

    images.forEach(image => {
        const dom = createTemplate(image);
        imageContainer.appendChild(dom);
    });
}