function makeTemplate(image) {
    const template = document.createElement('template');
    template.innerHTML = `
    <li>
        <h2>${image.title}</h2>
        <img src="${image.url}" alt="img">
        <p>Horns: ${image.horns}</p>
    </li>`;
    return template.content;
}

const imageList = document.getElementById('image-list');

export function loadImages(images) {

    while(imageList.children.length > 0) {
        imageList.lastChild.remove();
    }
    images.forEach(image => {
        const dom = makeTemplate(image);
        imageList.appendChild(dom);
    });

}

export default makeTemplate;