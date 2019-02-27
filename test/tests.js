const test = QUnit.test;

import './html-equal.js';
import makeHtmlTemplate from '../src/make-html.js';


const image = {
    url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
    title: 'UniWhal',
    horns: 1
};





// Testing for template functionality
QUnit.module('template');
test('testing html templates', assert => {
    const result = makeHtmlTemplate(image);

    const expected = `
        <li>   
            <h3>UniWhal</h3>
            <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"> 
            <h4>Horns: 1</h4>
        </li>
        `;

    assert.htmlEqual(result, expected);
});