const filterForm = document.getElementById('filter-images');

export function filterImages(images, filter) {
    return images.filter(image => {
        const hasKeyWord = !filter.keyword || image.keyword === filter.keyword;
        const hasHorns = !filter.horns || image.horns === filter.horns;
        return hasKeyWord && hasHorns;
    });
}

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