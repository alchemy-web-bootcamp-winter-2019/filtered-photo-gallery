const test = QUnit.test;
const images = [
    { keyword: 'yellow' },
    { keyword: 'blue' },
    { keyword: 'yellow' }
];

function filterImages(images, filter) {
    return images.filter(image => {
        const hasKeyWord = image.keyword === filter.keyword;
        return hasKeyWord;
    });
}

test('filters on keyword', assert => {
    //arrange
    const filter = { keyword: 'blue' };
    //act
    const filtered = filterImages(images, filter);
    //assert
    assert.deepEqual(filtered, [{ keyword: 'blue' }]);
});

test('no keyword filter returns all images', assert => {
    //arrange
    const filter = { keyword: '' };
    //act
    const filtered = filterImages(images, filter);
    //assert
    assert.deepEqual(filtered, images);
});