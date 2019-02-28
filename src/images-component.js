export default function makeImageFilter(images, filter) {
    
    const filteredImages = images.filter(image => {
        
        const hasKeyword = !filter.keyword || image.keyword === filter.keyword;
        const hasHorns = !filter.horns || image.horns >= filter.horns;

        return hasKeyword && hasHorns;
    });

    console.log(filteredImages);
    return filteredImages;
}
