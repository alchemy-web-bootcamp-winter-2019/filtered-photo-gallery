
import images from '../assets/images.js';
import { loadImages } from './loadImages.js';

const filterForm = document.getElementById('filter-form');

loadImages(images);

function getFilter(callback) {
    filterForm.addEventListener('submit', event => {
        event.preventDefault();

        const formDaddy = new FormData(filterForm);

        const filter = {
            keyword: formDaddy.get('keyword-filter'),
            horns: formDaddy.get('horns-filter')
        };

        callback(filter); 
    });
}

