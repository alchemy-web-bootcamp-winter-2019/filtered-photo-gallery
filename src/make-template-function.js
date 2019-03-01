export default function makeTemplateFunction(images) {
    const template = document.createElement('template');
    const html = `
    <li>
        <p class="title">${ images.title }</p>
        <img class="galleria" src="${ images.url }">
    </li>
    `;
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}