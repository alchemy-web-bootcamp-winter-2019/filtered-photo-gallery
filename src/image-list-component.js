export function createImageLI(imageObj) {
  const template = document.createElement('template');
  const html = /*html*/ `<li><h2>${imageObj.title}</h2><img src="${imageObj.url}"><p>Horns: ${imageObj.horns}</p></li>`;
  template.innerHTML = html;
  return template.content;
}


function loadImageList(imageArray) {
  const imageList = document.getElementById('image-list');
  
  while(imageList.children.length > 0) {imageList.removeChild(imageList.lastChild);}

  imageArray.forEach(image => {
    const imageLI = createImageLI(image);
    imageList.appendChild(imageLI);
  });
}
export default loadImageList;
