export function createTemplate(images) {
    const template = document.createElement('template');
    
    template.innerHTML = /*html*/`
        <li>
            <p>${images.title}</p>
            <img src="${images.url}">
            <p>Horns: ${images.horns}</p>
        </li>
    `;

    return template.content;
}