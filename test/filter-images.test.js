const test = QUnit.test;

const images = [
    {
        keyword: 'blue',
        horns:1 
    },
    {
        keyword: 'red',
        horns: 1 
    },
    {
        keyword: 'blue',
        horns: 2 
    }
];

function filterImages(images, filter) {
    return images.filter(image => {
        const hasKeyword = image.keyword === filter.keyword;
        return hasKeyword;
    });
}

test('filters on keyword', assert => {
    //arrange
    const filter = { keyword: 'blue' };
    //act
    const filtered = filterImages(images, filter);
    //assert
    assert.deepEqual(filtered, [
        {
            keyword: 'blue',
            horns: 1
        },
        {
            keyword: 'blue',
            horns: 2
        }
    ]);
});