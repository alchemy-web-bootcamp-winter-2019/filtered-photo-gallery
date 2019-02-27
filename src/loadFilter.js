function loadFilter(callback) {
    const form = document.getElementById('filter-form');
    const imageContainer = document.getElementById('image-container');
    form.addEventListener('submit', event => {
        event.preventDefault();
        const formDaddy = new FormData(form);

        while(imageContainer.firstChild) 
        {
        imageContainer.removeChild(imageContainer.firstChild);
        }
        
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