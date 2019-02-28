const test= QUnit.test;

QUnit.module('Filter by Keyword');

const images = [
    { title: 'img1', keyword: 'blue', horns: 1 },
    { title: 'img2', keyword: 'blue', horns: 2 }
];

test('filters based on keyword input', function(assert) {
    // arrange
    const filter = {
        keyword: 'blue'
    };

    const expected = [
        { title: 'img1', keyword: 'blue', horns: 1 },
        { title: 'img2', keyword: 'blue', horns: 2 }
    ];
    // act
    const result = filterImages(filter, images);

    // assert
    assert.deepEqual(result, expected);
});