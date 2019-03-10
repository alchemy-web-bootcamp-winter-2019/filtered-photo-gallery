export function filteredImages(imagesArray, filtered) {
    return imagesArray.filter((image) => {
        const hasKeyword = !filtered.keyword || image.keyword === filtered.keyword;
        const hasHorns = !filtered.horns || image.horns >= filtered.horns;
        return hasKeyword && hasHorns;
    });
}

// Need callback function??