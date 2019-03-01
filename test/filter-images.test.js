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
        const hasKeyword = !filter.keyword || image.keyword === filter.keyword;
        const hasHorns = !filter.horns || image.horns === filter.horns;
        
        return hasKeyword && hasHorns;
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

test('no filter returns all images', assert => {
    //arrange
    const filter = { keyword: '' };
    //act
    const filtered = filterImages(images, filter);
    //assert
    assert.deepEqual(filtered, [
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
    ]);
});

test('filters on horns', assert => {
    //arrange
    const filter = { horns: 1 };
    //act
    const filtered = filterImages(images, filter);
    //assert
    assert.deepEqual(filtered, [
        {
            keyword: 'blue',
            horns:1 
        },
        {
            keyword: 'red',
            horns: 1 
        }
    ]);
});