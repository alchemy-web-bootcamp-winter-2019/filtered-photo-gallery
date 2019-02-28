export default function makeHtmlTemplate(image) {
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


const imageList = document.getElementById('image-list');

// make a function to add/remove function with event listener

export function loadImage(images) {

    while(imageList.children.length > 0) {
        imageList.lastElementChild.remove();
    }
    images.forEach(image => {
        const dom = makeHtmlTemplate(image);
        imageList.appendChild(dom);
    });
}