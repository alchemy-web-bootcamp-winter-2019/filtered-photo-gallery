export function filterObjectsFunction(imagesArray, theFilter) {
    return imagesArray.filter(image => {
        const hasKeyword = !theFilter.keyword || image.keyword === theFilter.keyword;
        const hasHorns = !theFilter.horns || image.horns >= theFilter.horns;
        return hasKeyword && hasHorns;
    });
}

export default function loadFilterFunction(callback) {
    const filterForm = document.getElementById('filter-form');
    filterForm.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(filterForm);
        const filterInput = {
            keyword: formData.get('keyword-input'),
            horns: document.getElementById('horns-input').value
            // is there a cleaner way to grab horns value?
        };
        callback(filterInput);
    });
}
