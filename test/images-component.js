import './html-equal.js';
// import makeImageTemplate from '../src/image-template.js';
// const imageList = document.getElementById('image-list');
const test = QUnit.test;

function makeImageFilter(images, filter){
    return images.filter(image => {
        const hasKeyword = !filter.keyword || image.keyword === filter.keyword;
        return hasKeyword;
    });
}


test('image filter test', function(assert) {
    //arrange
    const images = [
        {
            keyword: 'rhino',
            horns: 2
        },
        {
            keyword: 'rhino',
            horns: 1
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

