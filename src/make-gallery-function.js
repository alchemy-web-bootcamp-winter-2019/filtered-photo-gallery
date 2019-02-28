function makeGalleryFunction(images) {
    const html = /*html*/ `
    <li><h2>${images.title}</h2>
    <img src="${images.url}"></li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export default makeGalleryFunction;