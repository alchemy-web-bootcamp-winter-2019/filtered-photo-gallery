/* eslint-disable quotes */
const test = QUnit.test;

QUnit.module('IMAGES TEMPLATE');

const image = {
    url: "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
    title: "UniWhal"
};

function imageTemplate(image) {
    const html = `
    <li>
      <p>${image.title}</p>
      <img src="${image.url}">
    </li>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}

test('display image URL and title of each image onto DOM', assert => {
//arrange
    const expected = `
    <li>
      <p>UniWhal</p>
      <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
    </li>
    `;

//act
    const result = imageTemplate(image);
//assert
    assert.htmlEqual(result, expected);
});