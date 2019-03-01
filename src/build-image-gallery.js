function buildImageGallery(fakeAssImage) {
    const galleryImage = `
     <li>
        <h2>${fakeAssImage.title}</h2>
        <img src="${fakeAssImage.url}" alt="${fakeAssImage.description}">
    </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = galleryImage;
    return template.content;
}

export default buildImageGallery;