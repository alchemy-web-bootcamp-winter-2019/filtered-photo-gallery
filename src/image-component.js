const imageList = document.getElementById('image-list');

export default function loadImages(images) {

    clearImages();

    images.forEach(image => {
        const dom = createImageTemplate(image);
        imageList.appendChild(dom);
    });
}

function clearImages() {
    while(imageList.children.length > 0) {
        imageList.lastElementChild.remove();
    }
}

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