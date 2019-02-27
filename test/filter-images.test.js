const test = QUnit.test;

function filterImages(images, filter) {
    return images.filter(image => {
        const hasKeyWord = image.keyword === filter.keyword;
        return hasKeyWord;
    });
}

test('filters on keyword', assert => {
    //arrange
    const images = [
        { keyword: 'yellow' },
        { keyword: 'blue' },
        { keyword: 'yellow' }
    ];
    const filter = { keyword: 'blue' };
    //act
    const filtered = filterImages(images, filter);
    //assert
    assert.deepEqual(filtered, [{ keyword: 'blue' }]);
})