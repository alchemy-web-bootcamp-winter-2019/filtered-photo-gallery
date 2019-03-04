import { sortingFunction } from '../src/sortingFunction.js';

const test = QUnit.test;

QUnit.module('SORTING TESTS');

const sortingArray = [
    { horns: 2, title: 'cat' },
    { horns: 3, title: 'and' },
    { horns: 1, title: 'boo' },
];

test('sort by number of horns', assert => {
    // arrange
    const sortChoice = { property: 'horns' };

    const expected = [
        { horns: 1, title: 'boo' },
        { horns: 2, title: 'cat' },
        { horns: 3, title: 'and' },
    ];
    // act
    const result = sortingFunction(sortingArray, sortChoice);
    // assert
    assert.deepEqual(result, expected);
});
