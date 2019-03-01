const test = QUnit.test;

QUnit.module('filter-test');

function filterImage(images, filter) {
    const filterArray = images.filter(image => image.keyword === filter.keyword);
    return filterArray;
}




test('write a test to sort image gallery by keyword', function(assert) {
    //arrange
    
    const images = [
        {
            'keyword': 'narwhal',
            'horns': 1
        },
        {
            'keyword': 'rhino',
            'horns': 2
        },
        {
            'keyword': 'unicorn',
            'horns': 1
        }
    ];
    
    const filter = 
        
    {
        'keyword': 'narwhal',
        
    };
    
    //act
    const result = filterImage(images, filter);
    const expected = [
        {
            'keyword': 'narwhal',
            'horns': 1
        },
        
    ];



    //assert

    assert.deepEqual(result, expected);
});