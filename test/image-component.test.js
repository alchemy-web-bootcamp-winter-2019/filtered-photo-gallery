import { createTemplate } from '../src/image-component.js';
const test = QUnit.test;

QUnit.module('CREATE IMAGE TEMPLATE');

test('Create template', function(assert) {
    // arrange
    const image = {
        title: 'UniWhal',
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        horns: 1
    };

    const expected = /*html*/`
        <li class="image-card">
            <p class="image-title">UniWhal</p>
            <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
            <p class="horn-count">Horns: 1</p>
        </li>
    `;

    // act
    const result = createTemplate(image);

    // assert
    assert.htmlEqual(result, expected);
});