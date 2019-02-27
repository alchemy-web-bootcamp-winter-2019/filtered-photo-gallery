import images from '../data/images.js';
import makeImageTemplate from './make-image-template.js';
//import filterImages from './filter-images.js';

const imageDisplay = document.getElementById('image-display');

//make dom

images.forEach(image => {
    const dom = makeImageTemplate(image);
    imageDisplay.appendChild(dom);
});

const filterForm = document.getElementById('filter-form');

filterForm.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(filterForm);
    const hornsFilter = formData.get('horns');
    let horns = 0;
    if(hornsFilter) {
        horns = parseInt(hornsFilter);
    }

    const filter = {
        keyword: formData.get('keyword'),
        horns: horns
    };
    console.log(filter);
});