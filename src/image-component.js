const imageList = document.getElementById('image-list');
export default function loadImages(images) {
    clearImages();
    images.forEach(image => {
        imageList.appendChild(makeImageTemplate(image));
    });
}

function clearImages() {
    while(imageList.firstChild) {
        imageList.firstChild.remove();
    }
}

export function makeImageTemplate(image) {
    const html = /*html*/`
        <li>
            <h2>${image.title}</h2>
            <img src="${image.url}">
            <h3>Horns: ${image.horns}</h3>
        </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}