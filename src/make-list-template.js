const imageList = document.getElementById('image-list');

export function makeImageTemplate(image) {
    const html = /*html*/`
    <li>
                <h2>${image.title}</h2>
                <img src="${image.url}">
                <p>Horns: ${image.horns}</p>
            </li>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export default function loadImages(images) {
    while(imageList.firstChild) {
        imageList.firstChild.remove();
    }
    images.forEach(image => {
        const dom = makeImageTemplate(image);
        imageList.appendChild(dom);
    });
}
