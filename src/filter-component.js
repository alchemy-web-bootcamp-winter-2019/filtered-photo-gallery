export default function loadFilter(callback) {

    const gefilterForm = document.getElementById('gefilter-form');
    gefilterForm.addEventListener('submit', event => {
        event.preventDefault();
        
        const formDaddy = new FormData(gefilterForm);
        const filter = {
            keyword: formDaddy.get('keyword-filter'),
            horns: Number(formDaddy.get('horns-filter'))
        };

        callback(filter);
    });
}