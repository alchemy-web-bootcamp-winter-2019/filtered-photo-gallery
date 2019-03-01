const test = QUnit.test;

QUnit.module('TEMPLATE TEST');

function makeTemplateFunction() {
    return `
    <li>
        <p class="title">UniWhal</p>
        <img class="galleria" src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
    </li>
    `
}

test('dynamic object populating test', assert => {
    // arrange
    const expected = `
    <li>
        <p class="title">UniWhal</p>
        <img class="galleria" src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
    </li>
    `;
    // act
    const result = makeTemplateFunction();
    // assert
    assert.equal(result, expected);
});