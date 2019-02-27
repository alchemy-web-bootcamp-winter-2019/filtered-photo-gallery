const test = QUnit.test;

QUnit.module('creating image list template');

function createImageTemplate() {
    return /*html*/`
        <li>
            <h2>Rhino Family</h2>
            <img src="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80">
            <h3>Horns: 2</h3>
        </li>
    `;
}

test('create image template', assert => {
    // arrange
    const expected = /*html*/`
        <li>
            <h2>Rhino Family</h2>
            <img src="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80">
            <h3>Horns: 2</h3>
        </li>
    `;
    // act
    const result = createImageTemplate();
    // assert
    assert.equal(result, expected);
});