function makeHtmlTemplate(image) {
    const template = document.createElement('template');
    template.innerHTML = `
    <li>   
        <h3>${image.title}</h3>
        <img src="${image.url}"> 
        <h4>Horns: ${image.horns}</h4>
    </li>
    `;

    return template.content;
}

export default makeHtmlTemplate;