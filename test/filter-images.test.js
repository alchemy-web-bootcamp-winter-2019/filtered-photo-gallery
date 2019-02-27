const test = QUnit.test;

QUnit.module('filtering by keyword and horns');

function filterImages(filter, images) {
    return images.filter(image => {
        const hasKeyword = !filter.keyword || image.keyword === filter.keyword;
        const hasHorns = !filter.horns || image.horns === filter.horns;
        return hasKeyword && hasHorns;
    });
}

const images = [
    { title: 'image one', keyword: 'blue', horns: 1 },
    { title: 'image two', keyword: 'blue', horns: 2 },
    { title: 'image three', keyword: 'red', horns: 2 }
];

test('filter by keyword, return only objects with that keyword', assert => {
    // arrange
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

test('filter by keyword, if no keyword return all images', assert => {
    // arrange
    const filter = {
        keyword: ''
    };

    // act
    const result = filterImages(filter, images);
    // assert
    assert.deepEqual(result, images);
});

test('filter by horns, return objects with that amount of horns', assert => {
    // arrange
    const filter = {
        horns: 2
    };

    const expected = [
        { title: 'image two', keyword: 'blue', horns: 2 },
        { title: 'image three', keyword: 'red', horns: 2 }
    ];
    // act
    const result = filterImages(filter, images);
    // assert
    assert.deepEqual(result, expected);
});