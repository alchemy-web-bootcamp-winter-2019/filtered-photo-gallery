const test = QUnit.test;

const image = {
    url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
    title: 'UniWhal',
    horns: 1,
    keyword: 'narwhal'
};

function makeHtmlTemplate(image) {
    const template = document.createElement('template');
    template.innerHTML = `
    <li>   
        <h3>${image.title}</h3>
        <img src="${image.url}"> 
        <h4>Horns: ${image.horns}</h4>
    </li>
    `;

    return template.content;
}

QUnit.module('template');
test('testing html templates', assert => {
    const result = makeHtmlTemplate(image);

    const expected = `
        <li>   
            <h3>UniWhal</h3>
            <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"> 
            <h4>Horns: 1</h4>
        </li>
        `;

    assert.htmlEqual(result, expected);
});