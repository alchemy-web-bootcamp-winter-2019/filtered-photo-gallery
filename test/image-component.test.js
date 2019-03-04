import { makeImageComponent } from '../src/image-component.js';
// import images from '../data/images.js';


const test = QUnit.test;

QUnit.module('template creation test');


const image = {
    'url': 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
    'title': 'UniWhal',
    'description': 'A unicorn and a narwhal nuzzling their horns',
    'keyword': 'narwhal',
    'horns': 1
};



test('create a template to create image tiles', function(assert) {
    //arrange
    const expected = /*html*/`
        <li>
            <h2 class="title">UniWhal</h2>
            <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
            <h2>Horns: 1</h2>
        </li>
    `;


    //act
    const result = makeImageComponent(image);

    //assert
    assert.htmlEqual(result, expected);
});