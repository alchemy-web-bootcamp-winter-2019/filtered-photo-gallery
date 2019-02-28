import { createImageComponentTemplate } from '../src/image-component.js';

const test = QUnit.test;
QUnit.module('image component');

test('create image template', function(assert) {
    // arrange
    // back ticks are marker for template
    const expected = /*html*/ `
    <li>
        <h2>UniWhal</h2>
        <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
        <h2>Horns: 1</h2>
    </li>
`;

    const image = {
        title: 'UniWhal',
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        horns: 1
    };
    // act
    const result = createImageComponentTemplate(image);

    // assert
    assert.htmlEqual(result, expected);
});
