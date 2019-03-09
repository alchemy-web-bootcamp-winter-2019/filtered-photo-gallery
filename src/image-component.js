export function createTemplate(image) {
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