const filterForm = document.getElementById('filter-form');

export default function loadFilters(callback) {
    filterForm.addEventListener('submit', event => {
        event.preventDefault();

        const formData = new FormData(filterForm);

        let animals = 0;
        const animalInput = formData.get('animals');
        if(animalInput) {
            animals = parseInt(animalInput);
        }

        const filter = {
            keyword: formData.get('medium'),
            animals: animals
        };

        callback(filter);
    });
}