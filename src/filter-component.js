const filterForm = document.getElementById('filter-form');

export default function loadFilter(callback) {
    filterForm.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(filterForm);
        let horns = 0;
        const hornsInput = formData.get('horns');
        if(hornsInput) {
            horns = parseInt(hornsInput);
        }
        const filter = {
            keyword: formData.get('keyword'),
            horns: horns
        };
        callback(filter);
    });
}

export function filterImages(images, filter){
    const filtered = images.filter(image => {
        return (!filter.keyword || image.keyword === filter.keyword) && 
        (!filter.horns || image.horns === filter.horns);
    });
    return filtered;
}