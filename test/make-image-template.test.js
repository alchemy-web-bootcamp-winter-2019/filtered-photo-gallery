import { makeImageTemplate } from '../src/image-component.js';
const test = QUnit.test;

QUnit.module('Template Testing');



test('Test dynamic template', assert => {
    // Arrange
    const expected = `
        <li>
            <h2>Basically a unicorn</h2>
            <img src="https://i.pinimg.com/736x/b4/61/06/b46106830b841017ea59870b27ec18dc--narwhals-a-unicorn.jpg">
            <h3>Horns: 1</h3>
        </li>
    `;
    
    const image = {
        title: 'Basically a unicorn',
        url: 'https://i.pinimg.com/736x/b4/61/06/b46106830b841017ea59870b27ec18dc--narwhals-a-unicorn.jpg',
        horns: 1
    };
    // Act
    const result = makeImageTemplate(image);

    // Assert
    assert.htmlEqual(result, expected);
});