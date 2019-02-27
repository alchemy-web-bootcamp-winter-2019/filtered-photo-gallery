import filterImages from '../src/filter-images.js';

const test = QUnit.test;

QUnit.module('Filter Testing');

const images = [
    { title: 'first', keyword: 'yea', horns: 1 },
    { title: 'second', keyword: 'nah', horns: 2 },
    { title: 'third', keyword: 'yea', horns: 3 }
];


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

test('Filter with number of Horns', function(assert) {
    // Arrange
    const expected = [
        { title: 'second', keyword: 'nah', horns: 2 },
        { title: 'third', keyword: 'yea', horns: 3 }
    ];
    const filter = { horns: 2 };

    // Act
    const result = filterImages(filter, images);

    // Assert
    assert.deepEqual(result, expected);
});

test('Filter with no number of Horns', function(assert) {
    // Arrange
    const expected = images;
    const filter = { horns: 0 };

    // Act
    const result = filterImages(filter, images);

    // Assert
    assert.deepEqual(result, expected);
});

test('Filter with Keyword and number of Horns', function(assert) {
    // Arrange
    const expected = [{ title: 'third', keyword: 'yea', horns: 3 }];
    const filter = { keyword: 'yea', horns: 2 };

    // Act
    const result = filterImages(filter, images);

    // Assert
    assert.deepEqual(result, expected);
});