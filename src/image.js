export function createHtmlTemplate(image){
    const template = document.createElement('template');
    template.innerHTML = `
        <li>
            <p>${image.title}</p>
            <img src="${image.url}">
        </li>
        `;
    return template.content;    
};