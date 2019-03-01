const test = QUnit.test;

QUnit.module('TEMPLATE TEST');

function makeTemplateFunction(images) {
    return `
    <li>
        <p class="title">${ images.title }</p>
        <img class="galleria" src="${ images.url }">
    </li>
    `;
}

test('cheater test', assert => {
    // arrange
    const images = {
        title: 'UniWhal',
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'
    };

    const expected = `
    <li>
        <p class="title">UniWhal</p>
        <img class="galleria" src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
    </li>
    `;
    // act
    const result = makeTemplateFunction(images);
    // assert
    assert.equal(result, expected);
});

test('dynamic object populating test', assert => {
    // arrange
    const images = {
        title: 'Rhino Family',
        url: 'https://images.unsplash.com/ photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&   s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80'
    };

    const expected = `
    <li>
        <p class="title">Rhino Family</p>
        <img class="galleria" src="https://images.unsplash.com/ photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&   s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80">
    </li>
    `;
    // act
    const result = makeTemplateFunction(images);
    // assert
    assert.equal(result, expected);
});