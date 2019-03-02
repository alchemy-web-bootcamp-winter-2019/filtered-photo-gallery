function generateHtmlTemplate(animalImage) {
    const html = `<li>
    <h2>${animalImage.title}</h2>
    <img src=${animalImage.url}>
</li>`;
    const htmlTemplate = document.createElement('template');
    htmlTemplate.innerHTML = html;
    return htmlTemplate.content;
}

export default generateHtmlTemplate;