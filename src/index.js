import makeImageList from './make-image-list.js';
import images from '../data/images.js';
import filterImages from '../src/filter.js';

makeImageList(images);

const filterFormNode = document.getElementById('filter-form');
const imageListNode = document.getElementById('image-list');

images.forEach(image => {
    const imageLi = makeImageList(image);
    imageListNode.appendChild(imageLi);
});

filterFormNode.addEventListener('submit', event => {
    event.preventDefault();
    while(imageListNode.children.length > 0) {
        imageListNode.removeChild(imageListNode.lastChild);
    }

    const formData = new FormData(filterFormNode);

    const filter = {
        keyword: formData.get('keyword'),
        horns: formData.get('horns')
    };

    const filteredImages = filterImages(images, filter);
    makeImageList(filteredImages);
    filteredImages.forEach(image => {
        const imageLi = makeImageList(image);
        imageListNode.appendChild(imageLi);
    });
});
