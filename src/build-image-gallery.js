function buildImageGallery(fakeAssImages) {
    const galleryImage = `
     <li>
        <h2>${fakeAssImages.title}</h2>
        <img src="${fakeAssImages.url}" alt="${fakeAssImages.description}">
        <p>Horns:${fakeAssImages.horns}</p>
    </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = galleryImage;
    return template.content;
}

export default buildImageGallery;