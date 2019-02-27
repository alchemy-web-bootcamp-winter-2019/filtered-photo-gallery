export default function loadImages(images) {
    const imageListNode = document.getElementById('image-list');

    while(imageListNode.firstChild) {
        imageListNode.firstChild.remove();
    }
    images.forEach(image => {
        const dom = makeImageTemplate(image);
        imageListNode.appendChild(dom);
    });
}

export function makeImageTemplate(image) {
    const html = /*html*/
    `<li>
        <h2>${image.title}</h2>
        <img src="${image.url}">
    </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}