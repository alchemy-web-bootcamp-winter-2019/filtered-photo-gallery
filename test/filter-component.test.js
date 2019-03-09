const test = QUnit.test;

QUnit.module('FILTER TEST');

function filteredImages(imagesArray, filtered) {
    return imagesArray.filter((image) => {
        const hasKeyword = image.keyword === filtered.keyword;
        return hasKeyword;
    });
}

test('Filter using KEYWORD', assert => {
    //arrange
    const imagesArray = [
        { title: 'image1', keyword: 'blue', horns: 1 },
        { title: 'image2', keyword: 'blue', horns: 2 },
        { title: 'image3', keyword: 'red', horns: 2 }
    ];
    
    const filtered = { keyword: 'blue' };
        
    const expected = [
        { title: 'image1', keyword: 'blue', horns: 1 },
        { title: 'image2', keyword: 'blue', horns: 2 }
    ];

    //act
    const result = filteredImages(imagesArray, filtered);

    //assert
    assert.deepEqual(result, expected);
});
