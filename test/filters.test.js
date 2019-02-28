const test = QUnit.test;

import filterImage from '../src/filters.js';    

QUnit.module('filters');

const images = [
    { keyword: 'narwhal', horns: 1 },
    { keyword: 'narwhal', horns: 2 },
    { keyword: 'rhino', horns: 2 }
];

test('keyword filter test for narwhal', assert => {
    const filter = { keyword: 'narwhal', horns: '' };

    const result = filterImage(filter, images);

    const expected = [
        { keyword: 'narwhal', horns: 1 },
        { keyword: 'narwhal', horns: 2 }
    ];

    // assert
    assert.deepEqual(result, expected);
});

test('keyword filter test for 2 horns', assert => {
    const filter = { keyword: '', horns: 2 };

    const result = filterImage(filter, images);

    const expected = [
        { keyword: 'narwhal', horns: 2 },
        { keyword: 'rhino', horns: 2 }
    ];

    // assert
    assert.deepEqual(result, expected);
});

test('keyword filter test for 2 horns and keyword', assert => {
    const filter = { keyword: 'narwhal', horns: 2 };

    const result = filterImage(filter, images);

    const expected = [
        { keyword: 'narwhal', horns: 2 },
    ];

    // assert
    assert.deepEqual(result, expected);
});