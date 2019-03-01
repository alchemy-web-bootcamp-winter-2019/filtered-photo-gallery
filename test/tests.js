import './html-equal.js';
// Photo Gallery Solo Build function:
// import buildGallery from '../src/build-gallery.js';

const test = QUnit.test;

function filteredImages(images, filter) {
    return images.filter(image => {
        const hasKeyword = !filter.keyword || image.keyword === filter.keyword;
        console.log(hasKeyword);
        return hasKeyword;
    });
}

const images = [
    { title: 'thing', keyword: 'banana', horns: 2 },
    { title: 'other thing', keyword: 'banana', horns: 1 },
    { title: 'last thing', keyword: 'apple', horns: 2 }
];

test('filter images by keyword', assert => {
    const filteredObject = { keyword: 'banana' };

    const filtered = filteredImages(images, filteredObject);

    assert.deepEqual(filtered, [
        { title: 'thing', keyword: 'banana', horns: 2 },
        { title: 'other thing', keyword: 'banana', horns: 1 }
    ]);
});

// Photo Gallery Solo Build test(s):
// test('create gallery images dynamically', assert => {
//     //arrange
//     const image = {
//         title: 'UniWhal',
//         url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
//         description: 'A unicorn and a narwhal nuzzling their horns',
//     };
    
//     //act
//     const result = buildGallery(image);
//     const expected = `
//         <li>
//             <h2>UniWhal</h2>
//             <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="A unicorn and a narwhal nuzzling their horns">
//         </li>
//     `;

//     //assert
//     assert.htmlEqual(result, expected);
// });