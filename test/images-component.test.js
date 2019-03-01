import './html-equal.js';
import makeImageFilter from '../src/images-component.js';
const test = QUnit.test;

test('image filter test', function(assert) {
    //arrange
    const images = [
        {
            keyword: 'rhino',
            horns: 2
        }
    ];
    
    const filter = { keyword: 'rhino', horns: 2 };
    //act
    const filtered = makeImageFilter(images, filter);
    //assert
    assert.deepEqual(filtered, images);
});

test('show all images', function(assert) {
    //arrange
    
    const filter = [
        {
            keyword: ' ',
            horns: ''
        }
    ];

    const images = [
        {
            keyword: 'rhino',
            horns: 2
        },
        {
            keyword: 'rhino',
            horns: 1
        },
        {
            keyword: 'chameleon',
            horns: 45
        }
    ];
    //act
    const filtered = makeImageFilter(images, filter);
    //assert
    assert.deepEqual(filtered, images);
});

test('filter horns', function(assert) {
    //arrange
    
    const filter = [
        {
            keyword: ' ',
            horns: 2
        }
    ];

    const images = [
        {
            keyword: 'rhino',
            horns: 2
        },
        {
            keyword: 'rhino',
            horns: 1
        },
        {
            keyword: 'chameleon',
            horns: 45
        }
    ];
    //act
    const filtered = makeImageFilter(images, filter);
    //assert
    assert.deepEqual(filtered, images);
});


