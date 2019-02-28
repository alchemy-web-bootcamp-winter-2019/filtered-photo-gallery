import filterImages from '../src/filter-images.js';
const test = QUnit.test;

QUnit.module('filter component');


const images = [
    { title: 'img1', keyword: 'blue', horns: 1 },
    { title: 'img2', keyword: 'blue', horns: 2 },
    { title: 'img3', keyword: 'red', horns: 2 }

];


test('filters based on keyword input', function(assert) {
    // arrange
    const filter = {
        keyword: 'blue'
    };

    const expected = [
        { title: 'img1', keyword: 'blue', horns: 1 },
        { title: 'img2', keyword: 'blue', horns: 2 }
    ];
    // act
    const result = filterImages(filter, images);

    // assert
    assert.deepEqual(result, expected);
});

test('no keyword input filter returns all images', assert => {
    // arrange
    const filter = {
        keyword: ''
    };
    const expected = images;
    // act
    const result = filterImages(filter, images);
    // assert
    assert.deepEqual(result, expected);
});

test('filter by number of horns', function(assert) {
    // arrange
    const filter = {
        horns: 2
    };
    const expected = [
        { title: 'img2', keyword: 'blue', horns: 2 },
        { title: 'img3', keyword: 'red', horns: 2 }
    ];
    // act
    const result = filterImages(filter, images);


    // assert
    assert.deepEqual(result, expected);
});

test('return all images if no horns selected', function(assert) {
    // arrange
    const filter = {
        horns: NaN
    };
    const expected = images;
    // act
    const result = filterImages(filter, images);

    // assert
    assert.deepEqual(result, expected);
});

test('filter by horns and keyword input', function(assert) {
    // arrange
    const filter = {
        horns: 2,
        keyword: 'blue'
    };
    const expected = [{ title: 'img2', keyword: 'blue', horns: 2 }];

    // act
    const result = filterImages(filter, images);

    // assert
    assert.deepEqual(result, expected);
});