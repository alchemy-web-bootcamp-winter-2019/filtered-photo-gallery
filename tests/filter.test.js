const test = QUnit.test;

function filterObjects(imageArray, filter) {
  return imageArray.filter(image => {
    const hasKeyword = image.keyword === filter.keyword;
    return hasKeyword;
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