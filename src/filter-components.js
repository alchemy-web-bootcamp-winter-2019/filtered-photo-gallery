export default function loadFilter(callback) {
    const formNode = document.getElementById('form');
    updateFilter();
    function updateFilter() {
        const formData = new FormData(formNode);
        const filterSetting = {
            keyword: formData.get('keyword'),
            horns: formData.get('horns')
        };
        callback(filterSetting);

    }
    formNode.addEventListener('submit', event => {
        event.preventDefault();
        updateFilter();
    });
}