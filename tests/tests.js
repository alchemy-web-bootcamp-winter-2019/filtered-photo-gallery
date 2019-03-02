
const test = QUnit.test;
QUnit.module('html with interpolation');

test('make html from template with interpolation', function(assert) {
    //arrange
    const animalImage = 'UniWhal';
    //act
    const result = `<li>
    <h2>${animalImage}</h2>
    <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
</li>`;
    //assert
    assert.equal(result, `<li>
    <h2>UniWhal</h2>
    <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
</li>`);
});