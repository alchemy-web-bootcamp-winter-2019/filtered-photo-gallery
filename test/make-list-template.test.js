import './html-equal.js';
import images from '../data/images.js';
const test = QUnit.test;

function makeListTemplate(image) {
    const html = `<li>
    <h2>${image.title}</h2>
    <img src="${image.url}">
    <p>
        Horns: ${image.horns}
    </p>
</li>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

test('correct html template is created', assert => {
    const image = images[0];
    const result = makeListTemplate(image);
    const expected = `<li>
    <h2>UniWhal</h2>
    <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
    <p>
        Horns: 1
    </p>
</li>`;
    assert.htmlEqual(result, expected);
});