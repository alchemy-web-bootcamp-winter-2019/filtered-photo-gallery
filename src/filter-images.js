export default function filterImages(filter, images) {
    const results = images.filter(image => {
        const hasKeyword = !filter.keyword || image.keyword === filter.keyword;
        const hasHorns = !filter.horns || image.horns >= filter.horns;

        return hasKeyword && hasHorns;
    });

    return results;
}