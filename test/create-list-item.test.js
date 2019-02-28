import './html-equal.js';
import createListItem from '../src/create-list-item.js';

const test = QUnit.test;


test('test image template function', (assert => {
    //Arrange

    const imageObject =
    {
        'url': 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        'title': 'UniWhal',
        'description': 'A unicorn and a narwhal nuzzling their horns',
        'keyword': 'narwhal',
        'horns': 1,
    };


    const expected = `
                    <li>
                        <h2>UniWhal</h2>
                        <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
                        <p>horns: 1</p>
                    </li>`;



    //Act

    const actual = createListItem(imageObject);


    //Assert
    assert.htmlEqual(actual, expected);

}));