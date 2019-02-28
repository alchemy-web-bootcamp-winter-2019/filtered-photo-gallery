import { filterImages } from '../src/filter-component.js';

const test = QUnit.test;

const images = [
    {
        keyword: 'red',
        horns: 2
    },
    {
        keyword: 'blue',
        horns: 2
    },
    {
        keyword: 'blue',
        horns: 1
    },
];



test('filter on keyword works', assert => {
    const filter = { keyword: 'blue' };
    const expected = [
        {
            keyword: 'blue',
            horns: 2
        },
        {
            keyword: 'blue',
            horns: 1
        }
    ];
    const result = filterImages(images, filter);
    assert.deepEqual(result, expected);
});

test('filter on horns works', assert => {
    const filter = { horns: 2 };
    const expected = [
        {
            keyword: 'red',
            horns: 2
        },
        {
            keyword: 'blue',
            horns: 2
        }
    ];
    const result = filterImages(images, filter);
    assert.deepEqual(result, expected);
});
