function filterImages(images, filterBy) {
    return images.filter((image) => {
        const hasKeyword = !filterBy.keyword || image.keyword === filterBy.keyword;

        const hasHorns = !filterBy.horns || image.horns >= filterBy.horns;
        return hasKeyword && hasHorns;
    });
}

export default filterImages;