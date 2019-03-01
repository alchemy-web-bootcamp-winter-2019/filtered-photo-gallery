const test = QUnit.test;

QUnit.module('Template Literal Function');

import { makeImageHTML } from '../src/gallery-component.js';

test('Write a function that returns a specific html code dynamically', function(assert) {
    const image = {
        'url': 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        'title': 'UniWhal',
        'description': 'A unicorn and a narwhal nuzzling their horns',
        'keyword': 'narwhal',
        'horns': 1
    };

    const result = makeImageHTML(image);

    const expected = /*html*/`
    <li>
        <h2>UniWhal</h2>
        <p>
            <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="A unicorn and a narwhal nuzzling their horns">
        </p>
    </li>`;
    assert.htmlEqual(result, expected);
});