import images from '../data/images.js'

function filterImages(images, filterBy) {
    const filteredImages = images.filter(function(image) {
        const hasKeyword = !filterBy.keyword || image.keyword === filterBy.keyword;

        const hasHorns = !filterBy.horns || image.horns >= filterBy.horns;
        return hasKeyword && hasHorns;
    });
}

export default filterImages;