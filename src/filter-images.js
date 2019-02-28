const form = document.getElementById('form-list');

export default function loadFilters(callback) {
    form.addEventListener('submit', event => {
        event.preventDefault();

        const formData = new FormData(form);

        let hornChoice = 0;
        const hornInput = formData.get('horns');
        if(hornInput) {
            hornChoice = parseInt(hornInput);
        }

        const filterSelect = {
            keyword: formData.get('keyword'),
            horns: hornChoice
        };
        
        callback(filterSelect);
    });
}