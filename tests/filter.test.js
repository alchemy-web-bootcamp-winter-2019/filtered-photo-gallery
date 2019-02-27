const test = QUnit.test;

QUnit.module('testing keyword and horns filters');

function filterImages(filter, images) {
    const results = images.filter(image => {
        const keywordFilter = !filter.keyword || image.keyword === filter.keyword;
        const hornFilter = !filter.horns || image.horns >= filter.horns;
        return keywordFilter && hornFilter;
    });
    return results;
}

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