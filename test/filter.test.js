const test = QUnit.test;

QUnit.module('FILTER TEST');

const imagesArray = [
    { keyword: 'unicorn', horns: 1 },
    { keyword: 'unicorn', horns: 2 },
    { keyword: 'rhino', horns: 2 },
];

function filterObjectsFunction(imagesArray, theFilter) {
    return imagesArray.filter(image => {
        const hasKeyword = !theFilter.keyword || image.keyword === theFilter.keyword;
        const hasHorns = !theFilter.horns || image.horns >= theFilter.horns;
        return hasKeyword && hasHorns;
    });
}

test('filter by keyword unicorn', assert => {
    // arrange
    const expected = [
        { keyword: 'unicorn', horns: 1 },
        { keyword: 'unicorn', horns: 2 }
    ];

    const theFilter = { keyword: 'unicorn' };
    // act
    const result = filterObjectsFunction(imagesArray, theFilter);
    //assert
    assert.deepEqual(result, expected);
});

test('filter by keyword blank, if nothing input', assert => {
    // arrange
    const expected = imagesArray;
    
    const theFilter = { keyword: '' };
    // act
    const result = filterObjectsFunction(imagesArray, theFilter);
    //assert
    assert.deepEqual(result, expected);
});

test('filter by horns', assert => {
    // arrange
    const expected = [
        { keyword: 'unicorn', horns: 2 },
        { keyword: 'rhino', horns: 2 },
    ];

    const theFilter = { horns: 2 };
    // act
    const result = filterObjectsFunction(imagesArray, theFilter);
    //assert
    assert.deepEqual(result, expected);
});

test('filter by matching horns and keyword', assert => {
    // arrange
    const expected = [
        { keyword: 'unicorn', horns: 2 },
    ];

    const theFilter = { keyword: 'unicorn', horns: 2 };
    // act
    const result = filterObjectsFunction(imagesArray, theFilter);
    //assert
    assert.deepEqual(result, expected);
});