import makeTemplateFunction from '../src/make-template-function.js';

const test = QUnit.test;

QUnit.module('TEMPLATE TEST');

test('cheater test', assert => {
    // arrange
    const images = {
        title: 'UniWhal',
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'
    };

    const expected = `
    <li>
        <p class="title">UniWhal</p>
        <img class="galleria" src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
    </li>
    `;
    // act
    const result = makeTemplateFunction(images);
    // assert
    assert.htmlEqual(result, expected);
});

test('dynamic object populating test', assert => {
    // arrange
    const images = {
        title: 'Rhino Family',
        url: '${ images.url }'
    };

    const expected = `
    <li>
        <p class="title">${ images.title }</p>
        <img class="galleria" src="${ images.url }">
    </li>
    `;
    // act
    const result = makeTemplateFunction(images);
    // assert
    assert.htmlEqual(result, expected);
});