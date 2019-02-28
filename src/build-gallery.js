export default function buildGallery(image) {
    const html = /*html*/ `
    <li>
        <h2>${image.title}</h2>
        <p>
            <img src="${image.url}" alt="${image.description}">
        </p>
    </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

