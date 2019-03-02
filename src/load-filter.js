
export default function loadFilter(callback) {
    const formNode = document.getElementById('filter-list');
    function update() {
        const formData = new FormData(formNode);
        const filter = {
            keyword: formData.get('keyword'),
            horns: formData.get('horns')
        };
        callback(filter);
    }
    update();
    
    formNode.addEventListener('submit', event => {
        event.preventDefault();
        update();
    });
}
