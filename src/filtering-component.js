export function filterObjectsFunction(imagesArray, theFilter) {
    return imagesArray.filter(image => {
        const hasKeyword = !theFilter.keyword || image.keyword === theFilter.keyword;
        const hasHorns = !theFilter.horns || image.horns >= theFilter.horns;
        return hasKeyword && hasHorns;
    });
}
