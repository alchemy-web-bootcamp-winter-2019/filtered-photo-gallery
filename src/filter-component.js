export function filterImages(imagesArray, filtered) {
    return imagesArray.filter(image => {
        const hasKeyword = !filtered.keyword || image.keyword === filtered.keyword;
        const hasHorns = !filtered.horns || image.horns === filtered.horns;
        return hasKeyword && hasHorns;
    });
}

export default function loadFilter(callback) {
    const filterForm = document.getElementById('filter-form');

    filterForm.addEventListener('submit', event => {
        event.preventDefault();
    
        const formData = new FormData(filterForm);

        const filterInput = {
            keyword: formData.get('keyword-input'),
            horns: parseInt(formData.get('horn-input'))
        };
        callback(filterInput);
    });    
}
