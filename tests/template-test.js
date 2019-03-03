import generateHtmlTemplate from '../src/template.js';

const test = QUnit.test;
QUnit.module('test suite one');

test('make html from template with interpolation', function(assert) {
    const animalImage = {
        title: 'UniWhal',
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'
    };
   
    const result = generateHtmlTemplate(animalImage);
   
    assert.htmlEqual(result, `<li>
    <h2>UniWhal</h2>
    <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
</li>`);
});

export default './template-test.js';