function makeImageTemplate(images) {
    const html = `<li>
    <h2>${images.title}</h2>
    <img src="${images.url}">
</li>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;

    return dom;
}

export default makeImageTemplate;