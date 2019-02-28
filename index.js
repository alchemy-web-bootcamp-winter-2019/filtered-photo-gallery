import createListItem from './src/create-list-item.js'; //returns html to create a list item with
import images from './data/images.js'; //imports original array of image objects;
import loadFilter from './src/filter-component.js'; //this is the call back function with event listener
import filterByKeyword from './src/filter-list-item.js';  //takes filter term and data as input arguments returns filtered array

const galleryNode = document.getElementById('photo-gallery'); //this is the ul in index.html that we want to append new list item


//creates image gallery on initial load of page
images.forEach(imageObject =>{
    const listItem = createListItem(imageObject);
    galleryNode.appendChild(listItem);
});


//renders new gallery depending on filter choices
loadFilter(callBackFilterTerm =>{
    while(galleryNode.children.length > 0){
        galleryNode.removeChild(galleryNode.lastChild);
    }

    const filteredImages = filterByKeyword(images, callBackFilterTerm);
    console.log('callBAckFilterTerm', callBackFilterTerm);
    filteredImages.forEach(imageObject => {
        const listItem = createListItem(imageObject);
        galleryNode.appendChild(listItem);

    });
});



//note for me tomorrow..... filtered takes 2 values.  call back value is received by loadFilter and is the search term.