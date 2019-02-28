import images from '../data/images.js';
import { loadImages } from './image.js';
import filterImages from './filter.js';

const filterForm = document.getElementById('filter-form');

loadImages(images);

function loadFilter(callback) {

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

loadFilter(filter => { 
    const filterEDList = filterImages(filter, images);
    loadImages(filterEDList);
});