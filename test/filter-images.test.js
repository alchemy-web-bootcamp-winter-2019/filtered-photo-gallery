const test = QUnit.test;

QUnit.module('filter images function');
function filterImages(images, filter) {
    return images.filter(image => image.keyword === filter.keyword);
}

const images = [
    {
        title: 'UniWhal',
        keyword: 'narwhal',
        horns: 1
    },
    {
        title: 'Basically a unicorn',
        keyword: 'narwhal',
        horns: 1
    },
    {
        title: 'Rhino Family',
        keyword: 'rhino',
        horns: 2
    }
];
test('Filters Images for Keyword', assert => {
    //arrange
    const filter = { keyword: 'banana', horns:'' };
    //act
    const result = filterImages(images, filter);
    const expected = [
        {
            title: 'UniWhal',
            keyword: 'narwhal',
            horns: 1
        },
        {
            title: 'Basically a unicorn',
            keyword: 'narwhal',
            horns: 1
        }
    ];

    //assert
    assert.deepEqual(result, expected);
});
test('Filters images for Keyword and Horns', assert => {
    //arrange
    const filter = { keyword: 'banana', horns:'' };
    //act
    const result = filterImages(images, filter);
    const expected = [
        {
            title: 'UniWhal',
            keyword: 'narwhal',
            horns: 1
        },
        {
            title: 'Basically a unicorn',
            keyword: 'narwhal',
            horns: 1
        }
    ];

    //assert
    assert.deepEqual(result, expected);
});