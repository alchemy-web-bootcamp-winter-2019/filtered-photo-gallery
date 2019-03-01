function buildGallery(image) {
    const galleryImage = `
    <li>
        <h2>${image.title}</h2>
        <img src="${image.url}" alt="${image.description}">
    </li>
    `;

    const template = document.createElement('template');
    template.innerHTML = galleryImage;
    return template.content;
}

export default buildGallery;