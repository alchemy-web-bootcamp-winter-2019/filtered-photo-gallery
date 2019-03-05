import generateHtmlTemplate from '../src/template.js';

const test = QUnit.test;
QUnit.module('test suite one');

test('make html from template with interpolation', function(assert) {
    const animalImage = {
        'url': 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        'title': 'UniWhal',
        'description': 'A unicorn and a narwhal nuzzling their horns',
        'keyword': 'narwhal',
        'horns': 1
    };
   
    const expected = `<li>
    <h2>UniWhal</h2>
    <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
    <p>Horns: 1</p>
</li>`;
    
    const result = generateHtmlTemplate(animalImage);
   
    assert.htmlEqual(result, expected);
});

export default './template-test.js';