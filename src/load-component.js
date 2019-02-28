export function makeListTemplate(image) {
    const html = `<li>
    <h2>${image.title}</h2>
    <img src="${image.url}">
    <p>
        Horns: ${image.horns}
    </p>
</li>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export default function imagesLoad(images) {
    const imageList = document.getElementById('image-list');
    while(imageList.firstChild) {
        imageList.firstChild.remove();
    }
    images.forEach(image => {
        const dom = makeListTemplate(image);
        imageList.append(dom);
    });
}