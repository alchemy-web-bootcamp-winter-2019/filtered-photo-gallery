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

export default makeTemplate;