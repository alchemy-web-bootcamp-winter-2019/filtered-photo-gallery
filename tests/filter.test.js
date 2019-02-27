const test = QUnit.test;

function filterObjects(imageArray, filter) {
  return imageArray.filter(image => {
    const hasKeyword = !filter.keyword || image.keyword === filter.keyword;
    const hasHorns = !filter.horns || image.horns >= filter.horns;

    return hasKeyword && hasHorns;
  });
}

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
