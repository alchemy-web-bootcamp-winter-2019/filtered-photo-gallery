import './html-equal.js';
import filteredImages from '../src/filtered-images.js';

const test = QUnit.test;

const images = [
    { title: 'city', medium: 'watercolor', animalNumber: '0' },
    { title: 'nature party', medium: 'embroidery', animalNumber: '1' },
    { title: 'flower', medium: 'watercolor', animalNumber: '0' }
];

test('if medium watercolor is selected, show only watercolor images', assert => {
    const filterChoice = { medium: 'watercolor' };

    const filtered = filteredImages(images, filterChoice);

    assert.deepEqual(filtered, [
        { title: 'city', medium: 'watercolor', animalNumber: '0' },
        { title: 'flower', medium: 'watercolor', animalNumber: '0' }
    ]);
});

test('if number of animals is 1, return the images with 1 animal', assert => {
    const filterChoice = { animalNumber: '1' };

    const filtered = filteredImages(images, filterChoice);

    assert.deepEqual(filtered, [
        { title: 'nature party', medium: 'embroidery', animalNumber: '1' },
    ]);
});

test('if no medium entered, show all images', assert => {
    const filterChoice = { medium: '' };
    const filtered = filteredImages(images, filterChoice);

    assert.deepEqual(filtered, [
        { title: 'city', medium: 'watercolor', animalNumber: '0' },
        { title: 'nature party', medium: 'embroidery', animalNumber: '1' },
        { title: 'flower', medium: 'watercolor', animalNumber: '0' }
    ]);
});