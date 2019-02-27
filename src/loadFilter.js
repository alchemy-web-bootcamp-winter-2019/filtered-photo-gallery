function loadFilter(callback) {
    const form = document.getElementById('filter-form');
    form.addEventListener('submit', event => {
        event.preventDefault();
        const formDaddy = new FormData(form);
        
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
    
        console.log(filtered);
        callback(filtered)
    });
};

export default loadFilter