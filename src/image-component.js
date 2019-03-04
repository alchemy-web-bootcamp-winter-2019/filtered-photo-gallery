const imageList = document.getElementById('image-list');

export function makeImageComponent(image) {
    // console.log('image', image);
    const html = /*html*/`
    <li>
    <h2 class="title">${image.title}</h2>
    <img src="${image.url}">
    <h2>Horns: ${image.horns}</h2>
    </li>
    `;
    
    // console.log(images[0]);
    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}

export default function loadImages(images) {
    images.forEach(image => {
        const dom = makeImageComponent(image);
        imageList.appendChild(dom);
    });
}