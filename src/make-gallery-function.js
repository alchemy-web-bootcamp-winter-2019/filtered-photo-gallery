function makeGalleryFunction(images) {
    const html = /*html*/ `
    <li><h2>${images.title}</h2>
    <img src="${images.url}"></li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

// export default makeGalleryFunction;

export default function updateGallery(images) {
    const imageList = document.getElementById('image-list');
    while(imageList.children.length > 0) {
        imageList.lastElementChild.remove();
    }

    images.forEach(function(images) {
        const dom = makeGalleryFunction(images);
        imageList.appendChild(dom);
    });


    
}