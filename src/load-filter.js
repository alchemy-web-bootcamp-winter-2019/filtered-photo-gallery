const filterForm = document.getElementById('filter-form');

export default function loadFilter(callback) {
    filterForm.addEventListener('submit', event => {
        event.preventDefault();

        const formData = new FormData(filterForm);
        const filter = {
            keyword: formData.get('keyword-filter'),
            horns: formData.get('horns-filter')
        };
        callback(filter);
    });
}