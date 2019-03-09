const test = QUnit.test;

QUnit.module('FILTER TEST');

function filter() {
    return [
        { title: 'image1', keyword: 'blue', horns: 1 },
        { title: 'image1', keyword: 'blue', horns: 2 }
    ];
}

test('Filter using KEYWORD', assert => {
    //arrange
    const images = [
        { title: 'image1', keyword: 'blue', horns: 1 },
        { title: 'image1', keyword: 'blue', horns: 2 },
        { title: 'image1', keyword: 'red', horns: 2 }
    ];

    const expected = [
        { title: 'image1', keyword: 'blue', horns: 1 },
        { title: 'image1', keyword: 'blue', horns: 2 }
    ];

    //act
    const result = filter();

    //assert
    assert.deepEqual(result, expected);
});
