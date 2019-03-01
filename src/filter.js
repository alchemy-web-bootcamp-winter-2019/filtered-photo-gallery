function filterImages(filter, images) {
    const results = images.filter(image => {
        const keywordFilter = !filter.keyword || image.keyword === filter.keyword;
        const hornFilter = !filter.horns || image.horns >= filter.horns;
        return keywordFilter && hornFilter;
    });
    return results;
}

export default filterImages;