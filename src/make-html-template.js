export default function makeHtmlTemplate(image) {
    const template = document.createElement('template');
    template.innerHTML = `
        <li>
            <h2>${image.title}</h2>
            <img src="${image.url}" alt="creature">
            <h3>Horns: ${image.horns}</h3>
        </li>
    `;

    return template.content;
}

const imageList = document.getElementById('image-list');

export function loadImages(images) {
    while(imageList.children.length > 0) {
        imageList.lastChild.remove();
    }
    images.forEach(image => {
        const dom = makeHtmlTemplate(image);
        imageList.appendChild(dom);
    });
}