const test = QUnit.test;

import filterImages from '../src/filter.js';

QUnit.module('testing keyword and horns filters');

const images = [
    { keyword: 'narwhal', horns: 1 },
    { keyword: 'narwhal', horns: 2 },
    { keyword: 'rhino', horns: 2 }
];

test('testing to see if keyword filter works', assert => {
    // arrange
    const filter = {
        keyword: 'narwhal',
        horns: ''
    };
    const expected = [
        { keyword: 'narwhal', horns: 1 },
        { keyword: 'narwhal', horns: 2 }
    ];

    // act
    const results = filterImages(filter, images);
    // assert
    assert.deepEqual(results, expected);
});

test('testing to see if horns filter works', assert => {
    // arrange
    const filter = {
        keyword: '',
        horns: '2'
    };
    const expected = [
        { keyword: 'narwhal', horns: 2 },
        { keyword: 'rhino', horns: 2 }
    ];

    // act
    const results = filterImages(filter, images);
    // assert
    assert.deepEqual(results, expected);
});

test('testing to see if keyword and horn filters works', assert => {
    // arrange
    const filter = {
        keyword: 'narwhal',
        horns: '2'
    };
    const expected = [
        { keyword: 'narwhal', horns: 2 }
    ];

    // act
    const results = filterImages(filter, images);
    // assert
    assert.deepEqual(results, expected);
});