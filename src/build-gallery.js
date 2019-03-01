function buildGallery(image) {
    const galleryImage = `
    <li>
        <img src="${image.url}" alt="${image.description}">
        <h2>${image.title}</h2>
    </li>
    `;

    const template = document.createElement('template');
    template.innerHTML = galleryImage;
    return template.content;
}

export default buildGallery;