import loadImageList from './image-list-component.js';
import loadFilter from './filter-component.js';
import { filterObjects } from './filter-component.js';
import images from '../data/images.js';

loadImageList(images);
loadFilter(filter => {
  const filtered = filterObjects(images, filter);
  loadImageList(filtered);
});
