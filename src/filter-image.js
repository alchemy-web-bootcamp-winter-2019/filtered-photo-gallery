export default function filterImage(images, filter) {
    const filteredImage = images.filter(image => {
        const filterByKeyword = !filter.keyword || image.keyword === filter.keyword;
        const filterByHorns = !filter.horns || image.horns >= filter.horns;
        return filterByKeyword && filterByHorns;

    });
    
    return filteredImage;
}