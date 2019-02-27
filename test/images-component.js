import './html-equal.js';
import makeImageTemplate from '../src/image-template.js';

const test = QUnit.test;


function makeImageFilter(images){
    images.forEach(image => {
        const dom = makeImageTemplate(image);
        imageList.appendChild(dom);
    })
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
        },
        {
            keyword: 'chameleon',
            horns: 5
        },
    ];
    //act
    const result = makeImageFilter(images);
    //assert
    assert.deepEqual(result, [
        {
            keyword: 'rhino',
            horns: 2
        },
        {
            keyword: 'rhino',
            horns: 1
        }
    ]);

});