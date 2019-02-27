import './html-equal.js';
import makeImageTemplate from '../src/image-template.js';
// import images from '../data/images.js';
const test = QUnit.test;

// function makeImageTemplate(image) {
//     // let lizardType = '';
//     // if(image.keyword === 'lizard'){
//     //     lizardType = ;
//     // }

//     const html = `<li class='lizardType'>
//     <h2>${image.title}</h2>
//     <img src="${image.url}">
// </li>`;

//     const template = document.createElement('template');
//     template.innerHTML = html;
//     const dom = template.content;

//     return dom;
// }

test('make template from image', assert => {
    //arrange
    const image = {
        title: 'This Animal',
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        description: 'lizard'
    };

    //act
    const dom = makeImageTemplate(image);

    //assert
    assert.htmlEqual(dom, `<li>
    <h2>This Animal</h2>
    <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
</li>`);
});

test('add class based on key in image object', assert => {
    //arrange
    const imageLizard = {
        description: 'animal'
    };
    //act
    const animalType = imageLizard.description;

    //assert
    assert.equal(animalType, 'animal');
});

// test('if animal is selected then class is added', assert => {
//     //arrange 

//     //act
//     const animalType = images.description;

//     //assert
//     assert.equal(animalType, 'lizard');
// });

