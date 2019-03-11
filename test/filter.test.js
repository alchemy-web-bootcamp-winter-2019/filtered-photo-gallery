const test = QUnit.test;

QUnit.module('Filtering');

const images = [
    {
        keyword: 'narwal',
        horns: 1
    },
    {
        keyword: 'narwal',
        horns: 2
    },
    {
        keyword: 'rhino',
        horns: 2
    }
];

import filterImages from '../src/filter.js';

test('filtering by keyword', assert => {
    //arrange
    const filter = {
        keyword: 'narwal',
        horns: ''
    };

    const expected = [
        {
            keyword: 'narwal',
            horns: 1
        },
        {
            keyword: 'narwal',
            horns: 2
        },
    ];
    //act
    const results = filterImages(filter, images);
    //assert
    assert.deepEqual(results, expected);
});

test('filtering by horns', assert => {
    //arrange
    const filter = {
        keyword: '',
        horns: 2
    };

    const expected = [
        {
            keyword: 'narwal',
            horns: 2
        },
        {
            keyword: 'rhino',
            horns: 2
        }
    ];  
    //act
    const results = filterImages(filter, images);
    
    //assert
    assert.deepEqual(results, expected);
});

test('filter for both', assert => {
    //arrange
    const filter = {
        keyword: 'narwal',
        horns: 2
    };
    const expected = [
        {
            keyword: 'narwal',
            horns: 2
        }
    ];
    //act
    const results = filterImages(filter, images);
    //assert
    assert.deepEqual(results, expected);
});