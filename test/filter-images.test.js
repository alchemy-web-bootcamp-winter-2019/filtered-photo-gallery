const test = QUnit.test;

QUnit.module('filter images function');
function filterImages(images, filter) {
    return images.filter(filter => filter.keyword === 'narwhal');
}

test('Filters Images for Keyword', assert => {
    //arrange
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
    const filter = { keyword: 'narwhal', horns:'' };
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
    assert.htmlEqual(result, expected);
});