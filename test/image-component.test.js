import images from '../data/images.js';
console.log(images[0]);
const test = QUnit.test;

QUnit.module('template creation test');

function makeImageComponent(images) {
    const html = /*html*/`
        <li>
            <h2>Name: ${images[0].title}</h2>
            <img src="${images[0].url}">
            <h2>Horns: ${images[0].horns}</h2>
        </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}

test('create a template to create image tiles', function(assert) {
    //arrange
    const expected = /*html*/`
        <li>
            <h2>Name: UniWhal</h2>
            <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
            <h2>Horns: 1</h2>
        </li>
    `;


    //act
    const result = makeImageComponent(images);

    //assert
    assert.htmlEqual(result, expected);
});