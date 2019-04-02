import { filterImages } from '../src/filter-component.js';

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
    const result = filterImages(imagesArray, filtered);

    //assert
    assert.deepEqual(result, expected);
});

// NO FILTER TEST:
test('Displays all images if NO FILTER entered by user', assert => {
    //arrange
    const filtered = { keyword: '', horns: null };

    const expected = [
        { title: 'image1', keyword: 'blue', horns: 1 },
        { title: 'image2', keyword: 'blue', horns: 2 },
        { title: 'image3', keyword: 'red', horns: 2 }
    ]; 

    //act
    const result = filterImages(imagesArray, filtered);

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
    const result = filterImages(imagesArray, filtered);

    //assert
    assert.deepEqual(result, expected);
});

// BOTH KEYWORDS TEST:
test('Displays by BOTH by KEYWORD AND HORNS', assert => {
    //arrange
    const filtered = { keyword: 'red', horns: 2 };

    const expected = [
        { title: 'image3', keyword: 'red', horns: 2 }
    ];

    //act
    const result = filterImages(imagesArray, filtered);

    //assert
    assert.deepEqual(result, expected);
});