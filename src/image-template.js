
export default function imageTemplate(image) {
    const html = `
  <li>
    <p>${image.title}</p>
    <img src="${image.url}">
  </li>
  `;

    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}