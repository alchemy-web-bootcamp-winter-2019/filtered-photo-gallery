export function makeHtmlTemplate(image) {
    const html = `
    <li>
        <h2>${image.title}</h2>
        <img src=${image.url}>
        <p>Horns: ${image.horns}</p>
    </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const imageList = document.getElementById('image-list');

export function loadImages(images) {
    images.forEach(image => {
        const dom = makeHtmlTemplate(image);
        imageList.appendChild(dom);
    });
}
