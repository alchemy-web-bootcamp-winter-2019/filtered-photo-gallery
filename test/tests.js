import './html-equal.js';

const test = QUnit.test;

//make array of images

const images = [
    { title: 'unicorn', keyword: 'unicorn', horns: 1 },
    { title: 'double unicorn', keyword: 'unicorn', horns: 2 },
    { title: 'triceratops', keyword: 'dinosaur', horns: 3 }
];

function filterImages(images, filter) {
    return images.filter(image => {
        const hasKeyword = image.keyword === filter.keyword;

        return hasKeyword;
    });
}

test('filter only displays images with matching keyword of unicorn', assert => {
//arrange

    const filter = { keyword: 'unicorn' };
//act
    let filtered = filterImages(images, filter);

//assert
    assert.deepEqual(filtered, [
        { title: 'unicorn', keyword: 'unicorn', horns: 1 },
        { title: 'double unicorn', keyword: 'unicorn', horns: 2 }
    ]);
});