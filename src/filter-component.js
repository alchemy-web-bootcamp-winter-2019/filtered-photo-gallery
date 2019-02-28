const nodeFilter = document.getElementById('filter-form');


export default function loadFilter( callBack) {


    nodeFilter.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(nodeFilter);
        const filter = {
            horns: parseInt(formData.get('horns')),
            keyword: formData.get('keyword')
        };
        callBack(filter);
    });
}

