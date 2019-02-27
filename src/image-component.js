export function createImageTemplate(image) {
    const html = /*html*/`
        <li>
            <h2>${image.title}</h2>
            <img src=${image.url}>
            <h3>Horns: ${image.horns}</h3>
        </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}