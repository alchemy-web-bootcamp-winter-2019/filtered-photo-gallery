const test = QUnit.test;

QUnit.module('filtering by keyword and horns');

function filterImages(filter, images) {
    return images.filter(image => {
        const hasKeyword = image.keyword === filter.keyword;
        return hasKeyword;
    });
}

test('filter by keyword, return only objects with that keyword', assert => {
    // arrange
    const images = [
        { title: 'image one', keyword: 'blue', horns: 1 },
        { title: 'image two', keyword: 'blue', horns: 2 },
        { title: 'image three', keyword: 'red', horns: 2 }
    ];
    const filter = {
        keyword: 'blue'
    };
    const expected = [
        { title: 'image one', keyword: 'blue', horns: 1 },
        { title: 'image two', keyword: 'blue', horns: 2 }
    ];
    // act
    const result = filterImages(filter, images);
    // assert
    assert.deepEqual(result, expected);
});