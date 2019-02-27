const test = QUnit.test;

import './html-equal.js';
import './make-html.test.js';


// const image = [
//     {
//         horns: 1,
//         keyword: 'narwhal'
//     },
//     {
//         horns: 2,
//         keyword: 'narwhal'
//     },
//     {
//         horns: 2,
//         keyword: 'rhino'
//     }
    
// ];

// Testing for filters

test('filter by keyword', assert => {

    const result = [
        {
            horns: '',
            keyword: 'narwhal'
        },
        {
            horns: '',
            keyword: 'narwhal'
        }
    ];

    const expected = {
        keyword: 'narwhal',
        horns: ''
    };

    assert.htmlEqual(result, expected);
});