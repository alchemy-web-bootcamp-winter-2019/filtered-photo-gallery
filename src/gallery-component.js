export function makeImageHTML(image) {
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

export default function buildGallery(images) {
    const imageListNode = document.getElementById('image-list');

    images.forEach(image => {
        const dom = makeImageHTML(image);
        imageListNode.appendChild(dom);
    });
}
