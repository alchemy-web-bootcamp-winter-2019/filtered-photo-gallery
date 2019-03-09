import { filteredImages } from '../src/filter-component.js';

const test = QUnit.test;

QUnit.module('FILTER TEST');

const imagesArray = [
    { title: 'image1', keyword: 'blue', horns: 1 },
    { title: 'image2', keyword: 'blue', horns: 2 },
    { title: 'image3', keyword: 'red', horns: 2 }
];

// KEYWORD TEST:
test('Filter using KEYWORD', assert => {
    //arrange
    const filtered = { keyword: 'blue' };
        
    const expected = [
        { title: 'image1', keyword: 'blue', horns: 1 },
        { title: 'image2', keyword: 'blue', horns: 2 }
    ];

    //act
    const result = filteredImages(imagesArray, filtered);

    //assert
    assert.deepEqual(result, expected);
});

// HORN TEST:
test('Filter using HORNS', assert => {
    //arrange
    const filtered = { horns: 2 };

    const expected = [
        { title: 'image2', keyword: 'blue', horns: 2 },
        { title: 'image3', keyword: 'red', horns: 2 }
    ];

    //act
    const result = filteredImages(imagesArray, filtered);

    //assert
    assert.deepEqual(result, expected);
});