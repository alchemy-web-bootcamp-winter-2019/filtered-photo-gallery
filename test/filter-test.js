const test = QUnit.test;

QUnit.module('filter-test');

import filterImage from '../src/filter-image.js';

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



test('write a test to sort image gallery by keyword', function(assert) {
    //arrange
    
    
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

test('write a test to sort image gallery keyword and horns', function(assert) {
    //arrange
    
    
    
    const filter = 
        
    {
        'keyword': '',
        'horns': ''
        
    };
    
    //act
    const result = filterImage(images, filter);
    const expected = [
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



    //assert

    assert.deepEqual(result, expected);
});

