export function createTemplate(image) {
    const template = document.createElement('template');
    
    template.innerHTML = /*html*/`
        <li>
            <p>${image.title}</p>
            <img src="${image.url}">
            <p>Horns: ${image.horns}</p>
        </li>
    `;
    return template.content;
}