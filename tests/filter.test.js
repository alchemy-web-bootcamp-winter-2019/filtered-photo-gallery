import { filterObjects } from '../src/filter-component.js';
const test = QUnit.test;


QUnit.module('Filter testing suite');
const imageArray = [
  { keyword: 'unicorn', horns: 1 },
  { keyword: 'rhino', horns: 2 },
  { keyword: 'rhino', horns: 1 }
];


test('testing filter function for keyword = rhino', assert => {
  //arrange
  const expected = [
    { keyword: 'rhino', horns: 2 },
    { keyword: 'rhino', horns: 1 }
  ];
  const filter = {
    keyword: 'rhino'
  };
  //act
  const result = filterObjects(imageArray, filter);
  //assert
  assert.deepEqual(result, expected);
});

test('testing filter function for no keyword', assert => {
  const expected = imageArray;
  const filter = {
    keyword: ''
  };
  const result = filterObjects(imageArray, filter);
  assert.deepEqual(result, expected);
});

test('testing filter function for horns = 2', assert => {
  const expected = [
    { keyword: 'rhino', horns: 2 }
  ];
  const filter = {
    horns: 2
  };
  const result = filterObjects(imageArray, filter);
  assert.deepEqual(result, expected);
});

test('testing filter function for keyword = rhino and horns = 2', assert => {
  const expected = [
    { keyword: 'rhino', horns: 2 }
  ];
  const filter = {
    keyword: 'rhino',
    horns: 2
  };
  const result = filterObjects(imageArray, filter);
  assert.deepEqual(result, expected);
});
