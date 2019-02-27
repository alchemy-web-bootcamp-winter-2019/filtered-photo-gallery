import images from '../data/images.js';
import { loadImages } from './make-html-template.js';
import filterImages from './filter-images.js';

const filterForm = document.getElementById('filter-form');

loadImages(images);

function loadFilter(callback) {
    filterForm.addEventListener('submit', event => {
        event.preventDefault();

        const formData = new FormData(filterForm);
        const filter = {
            keyword: formData.get('keyword-filter'),
            horns: formData.get('horns-filter')
        };
        callback(filter);
    });
}

loadFilter(filter => {
    const filteredImages = filterImages(filter, images);
    loadImages(filteredImages);
});