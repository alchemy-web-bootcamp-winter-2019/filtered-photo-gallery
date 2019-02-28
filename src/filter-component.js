const filterForm = document.getElementById('filter-form');

export default function loadFilters(callback) {
    filterForm.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(filterForm);

        const horns = parseInt(formData.get('horns-filter'));

        const filter = {
            keyword: formData.get('keyword-filter'),
            horns: horns
        };
        callback(filter);
    });

}
