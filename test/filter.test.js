const test = QUnit.test;

const imageArray = [
    { keyword: 'red', horns: 1 },
    { keyword: 'red', horns: 2 },
    { keyword: 'blue', horns: 2 }
];

function filterImages(imageArray, filter) {
    return imageArray.filter(image => {
        const hasKeyword = !filter.keyword || image.keyword === filter.keyword;
        return hasKeyword;
    });
}

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