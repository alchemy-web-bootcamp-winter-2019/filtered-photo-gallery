const test = QUnit.test;

QUnit.module('Template Testing');

function makeImageTemplate() {
    return `
        <li>
            <h2>Basically a unicorn</h2>
            <img src="https://i.pinimg.com/736x/b4/61/06/b46106830b841017ea59870b27ec18dc--narwhals-a-unicorn.jpg">
            <h3>Horns: 1</h3>
        </li>
    `;
}

test('Test dynamic template', function(assert) {
    // Arrange
    const expected = `
        <li>
            <h2>Basically a unicorn</h2>
            <img src="https://i.pinimg.com/736x/b4/61/06/b46106830b841017ea59870b27ec18dc--narwhals-a-unicorn.jpg">
            <h3>Horns: 1</h3>
        </li>
    `;
    // Act
    const result = makeImageTemplate();

    // Assert
    assert.equal(result, expected);
});