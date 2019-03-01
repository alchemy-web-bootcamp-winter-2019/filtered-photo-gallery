export default function filteredImages(images, filter) {
    return images.filter(image => {
        const hasKeyword = !filter.medium || image.medium === filter.medium;
        const hasAnimals = !filter.animalNumber || image.animalNumber === filter.animalNumber;
        return hasKeyword && hasAnimals;
    });
}