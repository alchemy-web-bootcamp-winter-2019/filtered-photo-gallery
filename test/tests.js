import './html-equal.js';

const test = QUnit.test;

function makeHtmlTemplate(image) {
    const template = document.createElement('template');
    template.innerHTML = `
        <li>
            <h2>${image.title}</h2>
            <img src="${image.url}" alt="creature">
            <h3>Horns: ${image.horns}</h3>
        </li>
    `;

    return template.content;
}



test('create image html', assert => {
    const image = {
        'url': 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        'title': 'UniWhal',
        'description': 'A unicorn and a narwhal nuzzling their horns',
        'keyword': 'narwhal',
        'horns': 1
    };
    const expected = `
        <li>
            <h2>UniWhal</h2>
            <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="creature">
            <h3>Horns: 1</h3>
        </li>
    `;

    const result = makeHtmlTemplate(image);

    assert.htmlEqual(result, expected);
});