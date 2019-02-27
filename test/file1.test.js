const test = QUnit.test;
import buildGallery from '../src/build-gallery.js';
QUnit.module('Template Literal Function');

test('Write a function that returns a specific html code dynamically', function(assert) {
    const images = {
        'url': 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        'title': 'UniWhal',
        'description': 'A unicorn and a narwhal nuzzling their horns',
        'keyword': 'narwhal',
        'horns': 1
    };
    const result = buildGallery(images);
    const expected = `
    <li><h2>UniWhal</h2>
    <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="A unicorn and a narwhal nuzzling their horns">
    </li>`;
    assert.htmlEqual(result, expected);
});