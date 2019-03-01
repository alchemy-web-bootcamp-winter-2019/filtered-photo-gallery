import images from '../data/images.js';
import buildGallery from './gallery-component.js';
import loadFilter from './filter-components.js';
import filterImages from './filter-images.js';

loadFilter(filterSetting => {
    const filteredImages = filterImages(images, filterSetting);
    buildGallery(filteredImages);
});
