function buildGallery(images) {
    const galleryImage = `
    <li class="${images.keyword}">
        <h2>${images.title}</h2>
        <img src="${images.url}" alt="${images.description}">
        <p>Horns: ${images.horns}</p>
    </li>
    `;

    const template = document.createElement('template');
    template.innerHTML = galleryImage;
    return template.content;
}

export default buildGallery;