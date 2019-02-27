export default function filterImages(images, filter) {
    return images.filter(image => {
        const hasKeyword = !filter.keyword || image.keyword === filter.keyword;
        const hasHorns = !filter.horns || image.horns >= filter.horns;

        //const hasHorns = image.horns >= filter.horns;
        return hasKeyword && hasHorns;
    });
}