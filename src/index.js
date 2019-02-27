import loadImageList from './image-list-component.js';
import { filterObjects } from './filter-component.js';
import images from '../data/images.js';

const filterForm = document.getElementById('filter-form');

loadImageList(images);

filterForm.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(filterForm);
  const filterInput = {
    keyword: formData.get('keyword-input'),
    horns: formData.get('horns-input')
  };

  const filtered = filterObjects(images, filterInput);
  loadImageList(filtered);
});