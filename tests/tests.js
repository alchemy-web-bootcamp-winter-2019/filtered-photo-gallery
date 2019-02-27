import './html-equal.js';
import { createImageLI } from '../src/image-list-component.js';
const test = QUnit.test;


const imageObj = {
  url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
  title: 'UniWhal',
  description: 'A unicorn and a narwhal nuzzling their horns',
  keyword: 'narwhal',
  horns: 1
};

test('test function which creates interpolated template', assert => {
  //arrange
  const expected = '<li><h2>UniWhal</h2><img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"></li>';

  //act
  const result = createImageLI(imageObj);
  //assert
  assert.htmlEqual(result, expected);
});
