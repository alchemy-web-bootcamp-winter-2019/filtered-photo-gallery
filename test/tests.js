import './html-equal.js';

const test = QUnit.test;

function buildGallery(image) {
    const galleryImage = `
    <li>
        <h2>${image.title}</h2>
        <img src="${image.url}" alt="${image.description}">
    </li>
    `;

    const template = document.createElement('template');
    template.innerHTML = galleryImage;
    return template.content;
}


test('create gallery images dynamically', assert => {
    //arrange
    const image = {
        title: 'UniWhal',
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        description: 'A unicorn and a narwhal nuzzling their horns',
    };
    
    //act
    const result = buildGallery(image);
    const expected = `
        <li>
            <h2>UniWhal</h2>
            <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="A unicorn and a narwhal nuzzling their horns">
        </li>
    `;

    //assert
    assert.htmlEqual(result, expected);
});