const filterForm = document.getElementById('filter-input');

function filterInput(callback) {
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
export default filterInput;