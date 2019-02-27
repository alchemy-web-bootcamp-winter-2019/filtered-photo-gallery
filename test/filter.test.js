import filterImages from '../src/filter.js';

const test = QUnit.test;

const imageArray = [
    { keyword: 'red', horns: 1 },
    { keyword: 'red', horns: 2 },
    { keyword: 'blue', horns: 2 }
];

test('filter array by keyword', assert => {
    const filter = {
        keyword: 'red'
    };
    const expected = [
        { keyword: 'red', horns: 1 },
        { keyword: 'red', horns: 2 },
    ];

    const result = filterImages(imageArray, filter);

    assert.deepEqual(result, expected);
});

test('how all images if keyword is empty', assert => {
    const filter = {
        keyword: ''
    };
    const expected = [
        { keyword: 'red', horns: 1 },
        { keyword: 'red', horns: 2 },
        { keyword: 'blue', horns: 2 }
    ];

    const result = filterImages(imageArray, filter);

    assert.deepEqual(result, expected);
});

test('filter by horns', assert => {
    const filter = {
        keyword: '',
        horns: 2
    };
    const expected = [
        { keyword: 'red', horns: 2 },
        { keyword: 'blue', horns: 2 }
    ];

    const result = filterImages(imageArray, filter);

    assert.deepEqual(result, expected);
});

test('how all images if horns is empty', assert => {
    const filter = {
        keyword: '',
        horns: NaN
    };
    const expected = [
        { keyword: 'red', horns: 1 },
        { keyword: 'red', horns: 2 },
        { keyword: 'blue', horns: 2 }
    ];

    const result = filterImages(imageArray, filter);

    assert.deepEqual(result, expected);
});