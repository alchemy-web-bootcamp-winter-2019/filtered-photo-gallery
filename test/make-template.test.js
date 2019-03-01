import { makeTemplateFunction } from '../src/make-template-function.js';

const test = QUnit.test;

QUnit.module('TEMPLATE TEST');

test('cheater test', assert => {
    // arrange
    const image = {
        title: 'UniWhal',
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        horns: '1'
    };

    const expected = `
    <li>
        <p class="title">UniWhal</p>
        <img class="galleria" src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
        <p class="horns">Horns: ${ image.horns }</p>
    </li>
    `;
    // act
    const result = makeTemplateFunction(image);
    // assert
    assert.htmlEqual(result, expected);
});

test('dynamic object populating test', assert => {
    // arrange
    const image = {
        title: 'Rhino Family',
        url: '${ image.url }',
        horns: 2
    };

    const expected = `
    <li>
        <p class="title">${ image.title }</p>
        <img class="galleria" src="${ image.url }">
        <p class="horns">Horns: ${ image.horns }</p>
    </li>
    `;
    // act
    const result = makeTemplateFunction(image);
    // assert
    assert.htmlEqual(result, expected);
});