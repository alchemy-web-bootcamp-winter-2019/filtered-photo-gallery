const test = QUnit.test;
import images from '../data/images.js';

function makeImageTemplate(image) {
    const html = /*html*/`
    <li>
                <h2>${image.title}</h2>
                <img src="${image.url}">
                <p>Horns: ${image.horns}</p>
            </li>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

test('make image list template from images array', assert => {
    //Arrange
    let image = images[0];
    const expected = /*html*/`
    <li>
                <h2>UniWhal</h2>
                <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
                <p>Horns: 1</p>
            </li>`;
    //Act
    const result = makeImageTemplate(image);
    //Assert

    assert.htmlEqual(result, expected);
});