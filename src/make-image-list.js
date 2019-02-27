function makeImageList(image) {
    const template = document.createElement('template');

    template.innerHTML = `<li>
    <h2>${image.title}</h2>
    <img src="${image.url}">
    <p>Horns: ${image.horns}</p>
    </li>`;

    const dom = template.content;
    return dom;
}

export default makeImageList;