import './html-equal.js';
//import buildImageGallery from '../src/build-image-gallery.js';
const test = QUnit.test;

const images = [
    { title: 'thing', keyword: 'banana', horns: 2 },
    { title: 'other thing', keyword: 'banana', horns: 1 },
    { title: 'and other thing', keyword: 'apple', horns: 2 }
];

function filterImages(images, filter) {
    return images.filter(image => {
        const hasKeyword = !filter.keyword || image.keyword === filter.keyword;
        console.log(hasKeyword);
        return hasKeyword;
    });  
};

test('filter image by keyword', assert => {
    const filteredObject = { keyword: 'banana'};

    const filtered = filterImages(images, filteredObject);

    assert.deepEqual(filtered, [
        { title: 'thing', keyword: 'banana', horns: 2 },
        { title: 'other thing', keyword: 'banana', horns: 1 }
    ]);
});

// Photo gallery solo build test
// test('to see if gallery will dynamically populate images', assert => {
//     //fake data
//     const fakeAssImage = {
//         title:'UniWhal',
//         url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg', 
//         description: 'A unicorn and a narwhal nuzzling their horns'
//     };

//     //act
//     const result = buildImageGallery(fakeAssImage);
//     const expected = `
//     <li>
//         <h2>UniWhal</h2>
//         <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="A unicorn and a narwhal nuzzling their horns">
//     </li>`;
//     //assert
//     assert.htmlEqual(result, expected);
// });