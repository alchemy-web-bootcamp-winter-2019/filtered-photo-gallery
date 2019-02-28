const filterForm = document.getElementById('filter-form');

export default function loadFilter(callback) {

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
        callback(filter);
    }); 
}