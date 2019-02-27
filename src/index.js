import images from '../data/images.js';
import loadImages from './image-component.js';
// import './filter-component.js';

loadImages(images);

const gefilterForm = document.getElementById('gefilter-form');

gefilterForm.addEventListener('submit', event => {
    event.preventDefault();
    
    const formDaddy = new FormData(gefilterForm);
    const filter = {
        keyword: formDaddy.get('keyword-filter'),
        horns: Number(formDaddy.get('horns-filter'))
    };

    const filteredImages = filterImages(filter, images);
    loadImages(filteredImages);

});

function filterImages(filter, images) {
    return images.filter(image => {
        const hasKeyword = !filter.keyword || image.keyword === filter.keyword;
        const hasHorns = !filter.horns || image.horns >= filter.horns;
        return hasKeyword && hasHorns;
    });
}
