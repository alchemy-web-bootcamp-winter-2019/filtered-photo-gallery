const test = QUnit.test;

QUnit.module('filters');

const images = [
    { keyword: 'narwhal', horns: 1 },
    { keyword: 'narwhal', horns: 2 },
    { keyword: 'rhino', horns: 2 }
];

function filterImage(filter, images) {
    const result = images.filter(image => {
        const keywordFilter = !filter.keyword || image.keyword === filter.keyword;
        const hornsFilter = !filter.horns || image.horns === filter.horns;

        return keywordFilter && hornsFilter;
    });
    return result;
}

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