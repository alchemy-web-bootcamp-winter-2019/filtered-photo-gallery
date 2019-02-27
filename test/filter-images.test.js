const test = QUnit.test;
import { filterImages } from '../src/filter-component.js';
const images = [
    { keyword: 'yellow', horns: 1 },
    { keyword: 'blue', horns: 2 },
    { keyword: 'yellow', horns: 2 }
];


test('filters on keyword', assert => {
    //arrange
    const filter = { keyword: 'blue' };
    //act
    const filtered = filterImages(images, filter);
    //assert
    assert.deepEqual(filtered, [{ keyword: 'blue', horns: 2 }]);
});

test('no keyword filter returns all images', assert => {
    //arrange
    const filter = { keyword: '' };
    //act
    const filtered = filterImages(images, filter);
    //assert
    assert.deepEqual(filtered, images);
});

test('filters on horns', assert => {
    //arrange
    const filter = { horns: 1 };
    //act
    const filtered = filterImages(images, filter);
    //assert
    assert.deepEqual(filtered, [{ keyword: 'yellow', horns: 1 }]);
});

test('filters on keyword and horns', assert => {
    //arrange
    const filter = { keyword: 'yellow', horns: 1 };
    //act
    const filtered = filterImages(images, filter);
    //assert
    assert.deepEqual(filtered, [{ keyword: 'yellow', horns: 1 }]);
});