function loadFilter(callback) {
    const form = document.getElementById('form-filter');
    form.addEventListener('submit', event => {
        formDaddy = new FormData(form);
        
        const keywordInput = formDaddy.get('keyword-input');
        const hornInput = formDaddy.get('horn-input');
    
        let horns = 0
        if(hornInput){
            horns = parseInt(hornInput);
        }
    
        const filtered = {
            keyword: keywordInput,
            horns: horns
        };
    
        callback(filtered)
    });
};