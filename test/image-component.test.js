const test = QUnit.test;

QUnit.module('image component');



// function createImageTemplate(image) {
//     const template = document.getElementById('template');
//     const html = /*html*/`
//     <li>
//         <h2>UniWhal</h2>
//         <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
//         <h2>Horns: 1</h2>
//     </li>
// `;
//     template.innerHTML = html;
//     const dom = template.content;
//     return dom;
// }

test('create image template', function(assert) {
    // arrange
    const expected = /*html*/ `
    <li>
        <h2>UniWhal</h2>
        <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
        <h2>Horns: 1</h2>
    </li>
`;

    const image = {
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        title: 'UniWhal',
        horns: 1
    };
    // act
    result = 

    // assert
    assert.equal(result, expected);
});