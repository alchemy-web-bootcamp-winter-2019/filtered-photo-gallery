const filterForm = document.getElementById('filter-form');

export function filterImages(callback) {
    filterForm.addEventListener('submit', event => {
        event.preventDefault();
    
        const filterFormData = new FormData(filterForm);
    
        const filter = {
            keyword: filterFormData.get('keyword-filter'),
            horns: parseInt(filterFormData.get('horns-filter'))
        };
        callback(filter);
    });
}
