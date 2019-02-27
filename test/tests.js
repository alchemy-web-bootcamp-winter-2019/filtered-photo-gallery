import './html-equal.js';
import makeHtmlTemplate from '../src/make-html-template.js';
import filterImages from '../src/filter-images.js';

const test = QUnit.test;

const images = [
    {
        keyword: 'rhino',
        horns: 2
    },
    {
        keyword: 'rhino',
        horns: 3
    },
    {
        keyword: 'unicorn',
        horns: 3
    }
];


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

test('filter images by keyword', assert => {
    const filter = {
        keyword: 'rhino',
        horns: ''
    };
    const expected = [
        {
            keyword: 'rhino',
            horns: 2
        },
        {
            keyword: 'rhino',
            horns: 3
        }
    ];

    const result = filterImages(filter, images);

    assert.deepEqual(result, expected);
});

test('filter images by horns', assert => {
    const filter = {
        keyword: '',
        horns: 3
    };
    const expected = [
        {
            keyword: 'rhino',
            horns: 3
        },
        {
            keyword: 'unicorn',
            horns: 3
        }
    ];

    const result = filterImages(filter, images);

    assert.deepEqual(result, expected);
});

test('filter by keyword and horns', assert => {
    const filter = {
        keyword: 'unicorn',
        horns: 3
    };
    const expected = [
        {
            keyword: 'unicorn',
            horns: 3
        }
    ];

    const result = filterImages(filter, images);

    assert.deepEqual(result, expected);
});