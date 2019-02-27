const test = QUnit.test;

QUnit.module('CREATE IMAGE TEMPLATE');


function createTemplate(image) {
    const template = document.createElement('template');
    const html = /*html*/`
        <li>
            <p>UniWhal</p>
            <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
            <p>Horns: 1</p>
        </li>
    `;
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}

test('Create template', function(assert) {
    // arrange
    const image = {
        title: 'UniWhal',
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        horns: 1
    };

    const expected = /*html*/`
        <li>
            <p>UniWhal</p>
            <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
            <p>Horns: 1</p>
        </li>
    `;

    // act
    const result = createTemplate(image);

    // assert
    assert.htmlEqual(result, expected);
});