

export function makeImageComponent(image) {
    // console.log('image', image);
    const html = /*html*/`
    <li>
    <h2>Name: ${image.title}</h2>
    <img src="${image.url}">
    <h2>Horns: ${image.horns}</h2>
    </li>
    `;
    
    // console.log(images[0]);
    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}
