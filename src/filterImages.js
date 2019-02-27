function filterImages(images, filterBy) {
    return images.filter((image) => {
        let hasKeyword = !filterBy.keyword || image.keyword === filterBy.keyword;

        let hasHorns = !filterBy.horns || image.horns >= filterBy.horns;
        return hasKeyword && hasHorns;
    });
}

export default filterImages;