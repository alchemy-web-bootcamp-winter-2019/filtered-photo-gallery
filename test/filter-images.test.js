const test = QUnit.test;

QUnit.module('Filter Testing');

const images = [
    { title: 'first', keyword: 'yea', horns: 1 },
    { title: 'second', keyword: 'nah', horns: 2 },
    { title: 'third', keyword: 'yea', horns: 3 }
];

function filterImages(filter, images) {
    return images.filter(image => {
        return !filter.keyword || image.keyword === filter.keyword;
    });
}

test('Filter with Keyword', function(assert) {
    // Arrange
    const expected = [
        { title: 'first', keyword: 'yea', horns: 1 },
        { title: 'third', keyword: 'yea', horns: 3 }
    ];
    const filter = { keyword: 'yea' };

    // Act
    const result = filterImages(filter, images);

    // Assert
    assert.deepEqual(result, expected);
});

test('Filter with no Keyword', function(assert) {
    // Arrange
    const expected = images;
    const filter = { keyword: '' };

    // Act
    const result = filterImages(filter, images);

    // Assert
    assert.deepEqual(result, expected);
});