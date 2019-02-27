const test = QUnit.test;

function makeImageList(image) {
    const template = document.createElement('template');

    template.innerHTML = `<li>
    <h2>${image.title}</h2>
    <img src="${image.url}">
    <p>Horns: ${image.horns}</p>
    </li>`;

    const dom = template.content;
    return dom;
}

test('make html from template using interpolation', assert => {
    const image = {
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

    const result = makeImageList(image);

    assert.htmlEqual(result, expected);
});