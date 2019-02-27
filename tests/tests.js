import './html-equal.js';

const test = QUnit.test;

QUnit.module('template creating');

function makeTemplate(image) {
    const template = document.createElement('template');
    template.innerHTML = `
    <li>
        <h2>${image.title}</h2>
        <img src="${image.url}" alt="img">
        <p>Horns: ${image.horns}</p>
    </li>`;
    return template.content;
}

test('testing if the template output is correct', assert => {
    // arrange
    const image = {
        title: 'UniWhal',
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        horns: 1
    };

    const expected = `
    <li>
        <h2>UniWhal</h2>
        <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="img">
        <p>Horns: 1</p>
    </li>`;

    // act
    const results = makeTemplate(image);
    // assert
    assert.htmlEqual(results, expected);
});