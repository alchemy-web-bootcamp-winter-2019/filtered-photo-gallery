const form = document.getElementById('filter-list');

export function filterImages(images, filter) {
    return images.filter(image => {
        const hasKeyword = !filter.keyword || image.keyword === filter.keyword;
        const hasHorns = !filter.horns || image.horns === filter.horns;
        
        return hasKeyword && hasHorns;
    });
   
}

export default function loadFilters(callback) {
    form.addEventListener('submit', event => {
        event.preventDefault();

        const formData = new FormData(form);

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