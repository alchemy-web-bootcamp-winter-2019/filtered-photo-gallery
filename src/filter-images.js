// import makeImageFilter from './images-component.js';
// import images from '../data/images.js';

const form = document.getElementById('form-list');


export default function loadFilters(callback){
    form.addEventListener('submit', event => {
        event.preventDefault();

        // const imageList = document.getElementById('image-list');
    
        const formData = new FormData(form);
        let hornChoice = 0;

        const hornInput = formData.get('horns');
        if(hornInput) {
            hornChoice = parseInt(hornInput);
        }
        console.log(hornChoice);

        const filterSelect = {
            keyword: formData.get('keyword'),
            horns: hornChoice
        };
        
        callback(filterSelect);
        // const filteredResult = makeImageFilter(images, filterSelect);
        // const imageFiltered = imageList.children;

        // while(imageList.length > 0){
        //     imageList.lastElementChild.remove(imageFiltered);
        // }

        // filteredResult.forEach(function(filteredResult){
        //     const dom = makeImageFilter(filteredResult);
        //     imageList.appendChild(dom);
        // });

    });
}