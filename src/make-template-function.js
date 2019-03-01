export function makeTemplateFunction(image) {
    const template = document.createElement('template');
    const html = `
    <li>
        <p class="title">${ image.title }</p>
        <img class="galleria" src="${ image.url }">
        <p class="horns">Horns: ${ image.horns }</p>
    </li>
    `;
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}
const ulContainer = document.getElementById('ul-container');

export default function loadImages(images) {
    clearImages();
    images.forEach((image) => {
        const dom = makeTemplateFunction(image);
        ulContainer.appendChild(dom);
    });

    function clearImages() {
        while(ulContainer.children.length > 0) {
            ulContainer.lastElementChild.remove();
        } 
    }
}