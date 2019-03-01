const test = QUnit.test;

QUnit.module('filter images function');

import filterImages from '../src/filter-images.js';

const images = [
    {
        title: 'UniWhal',
        keyword: 'narwhal',
        horns: 1
    },
    {
        title: 'Basically a unicorn',
        keyword: 'narwhal',
        horns: 1
    },
    {
        title: 'Rhino Family',
        keyword: 'rhino',
        horns: 2
    }
];
test('Filters Images for Keyword', assert => {
    //arrange
    const filter = { keyword: 'narwhal', horns:'' };
    //act
    const result = filterImages(images, filter);
    const expected = [
        {
            title: 'UniWhal',
            keyword: 'narwhal',
            horns: 1
        },
        {
            title: 'Basically a unicorn',
            keyword: 'narwhal',
            horns: 1
        }
    ];

    //assert
    assert.deepEqual(result, expected);
});
test('returns full array if keyword is blank', assert => {
    //arrange
    const filter = { keyword: '', horns:'' };
    //act
    const result = filterImages(images, filter);
    const expected = [
        {
            title: 'UniWhal',
            keyword: 'narwhal',
            horns: 1
        },
        {
            title: 'Basically a unicorn',
            keyword: 'narwhal',
            horns: 1
        },
        {
            title: 'Rhino Family',
            keyword: 'rhino',
            horns: 2
        }
    ];

    //assert
    assert.deepEqual(result, expected);
});
test('filters for horns', assert => {
    //arrange
    const filter = { keyword: '', horns: 2 };
    //act
    const result = filterImages(images, filter);
    const expected = [
        {
            title: 'Rhino Family',
            keyword: 'rhino',
            horns: 2
        }
    ];

    //assert
    assert.deepEqual(result, expected);
});

test('return full array with no keyword or horns input', assert => {
    //arrange
    const filter = { keyword: '', horns: '' };
    //act
    const result = filterImages(images, filter);
    const expected = [
        {
            title: 'UniWhal',
            keyword: 'narwhal',
            horns: 1
        },
        {
            title: 'Basically a unicorn',
            keyword: 'narwhal',
            horns: 1
        },
        {
            title: 'Rhino Family',
            keyword: 'rhino',
            horns: 2
        }
    ];

    //assert
    assert.deepEqual(result, expected);
});