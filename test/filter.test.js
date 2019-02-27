const test = QUnit.test;

QUnit.module('html template testing');

const images = [
{ title: 'image1', keyword: 'blue', horns: 1 },
{ title: 'image2', keyword: 'blue', horns: 2 },
{ title: 'image3', keyword: 'red', horns: 2 }
];

function filterImages(images, filterBy) {
    return images.filter((image) => {
        let hasKeyword = image.keyword === filterBy.keyword;
        return hasKeyword;
    });
}



test('filter by KEYWORD', assert => {
    //arrange
    const filterBy = { keyword: 'blue' };
    const expected = [
        { title: 'image1', keyword: 'blue', horns: 1 },
        { title: 'image2', keyword: 'blue', horns: 2 },
    ];

    //act
    const result = filterImages(images, filterBy);

    //assert
    assert.deepEqual(result, expected);
});

test('return all w.o. a filter', assert => {
    const filterBy = { keyword: '' };
    const expected = [
        { title: 'image1', keyword: 'blue', horns: 1 },
        { title: 'image2', keyword: 'blue', horns: 2 },
        { title: 'image3', keyword: 'red', horns: 2 },
    ];

    const result = filterImages(images, filterBy);
})