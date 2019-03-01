import images from '../data/images.js';
import filterImage from './filters.js';
import { loadImage } from './make-html.js';

const filterForm = document.getElementById('filter-form');

loadImage(images);



// make a callback function with event listener to add/remove when filtered

function loadFilter(callback) {
    filterForm.addEventListener('submit', event => {
        event.preventDefault();

        const formDaddy = new FormData(filterForm);

        const filter = {
            keyword: formDaddy.get('keyword-input'),
            horns: formDaddy.get('horns-input')
        };

        callback(filter);
    
    });
}

loadFilter(filter => {
    const filtered = filterImage(filter, images);
    loadImage(filtered);
});