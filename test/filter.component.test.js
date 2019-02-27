const test = QUnit.test;

function filterImages(images, filter) {
    return images.filter(function(image) {
        const hasKeyword = image.keyword === filter.keyword;
    
        return hasKeyword;

    });
}

const images = [
    { keyword: 'blue', horns: 1 },
    { keyword: 'red', horns: 2 },
    { keyword: 'blue', horns: 1 },
    
];

test('image list filters by keyword only', assert => {
    // arrange
    const filter = { keyword: 'blue' };

    // act
    const result = filterImages(images, filter);
    const expected = [
        { keyword: 'blue', horns: 1 },
        { keyword: 'blue', horns: 1 }
    ];

    // assert
    assert.deepEqual(result, expected);
});