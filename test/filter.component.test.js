import { filterImages } from '../src/filter-component.js';
const test = QUnit.test;

const images = [
    { keyword: 'blue', horns: 1 },
    { keyword: 'blue', horns: 2 },
    { keyword: 'red', horns: 1 },
    
];

test('image list filters by keyword only', assert => {
    // arrange
    const filter = { keyword: 'blue' };

    // act
    const result = filterImages(images, filter);
    const expected = [
        { keyword: 'blue', horns: 1 },
        { keyword: 'blue', horns: 2 }
    ];

    // assert
    assert.deepEqual(result, expected);
});

test('no filters returns all images', assert => {
    // arrange
    const filter = { keyword: '' };

    // act
    const result = filterImages(images, filter);
    const expected = images;

    // assert
    assert.deepEqual(result, expected);
});

test('image list filters by horns only', assert => {
    // arrange
    const filter = { horns: 1 };

    // act
    const result = filterImages(images, filter);
    const expected = [
        { keyword: 'blue', horns: 1 },
        { keyword: 'red', horns: 1 }
    ];

    // assert
    assert.deepEqual(result, expected);
});

test('image list filters by keyword and horns', assert => {
    // arrange
    const filter = { keyword: 'blue', horns: 1 };

    // act
    const result = filterImages(images, filter);
    const expected = [
        { keyword: 'blue', horns: 1 }
    ];

    // assert
    assert.deepEqual(result, expected);
});