export default function filterImages(filter, images) {
    const result = images.filter(image => {
        const keywordFilter = !filter.keyword || image.keyword === filter.keyword;
        const hornsFilter = !filter.horns || image.horns >= filter.horns;
        return keywordFilter && hornsFilter;
    });
    return result;
}