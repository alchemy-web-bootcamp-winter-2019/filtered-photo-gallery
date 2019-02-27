import filterImages from '../src/filter-images.js';

const test = QUnit.test;

QUnit.module('filtering by keyword and horns');

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

test('filter by horns, all images if no horns', assert => {
    // arrange
    const filter = {
        horns: NaN
    };
    // act
    const result = filterImages(filter, images);
    // assert
    assert.deepEqual(result, images);
});

test('filter by keyword and horns, return objects matching both', assert => {
    // arrange
    const filter = {
        keyword: 'blue',
        horns: 1
    };

    const expected = [
        { title: 'image one', keyword: 'blue', horns: 1 }
    ];
    // act
    const result = filterImages(filter, images);
    // assert
    assert.deepEqual(result, expected);
});