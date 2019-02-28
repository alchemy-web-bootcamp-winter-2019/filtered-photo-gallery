export default function createListItem(imageObject) {
    const template = document.createElement('template');
    const html =
        `<li>
        <h2>${imageObject.title}</h2>
        <img src = ${imageObject.url}>
        <p>horns: ${imageObject.horns}</p>
        </li>`;


    template.innerHTML = html;
    return template.content;

}