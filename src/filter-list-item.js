export default function filterByKeyWord(imagesArray, filterTerm) {
    return imagesArray.filter(imageObject => {
        const keywordPasses = filterTerm.keyword === '' || filterTerm.keyword === imageObject.keyword;
        const hornsPasses = filterTerm.horns === '' || filterTerm.horns === imageObject.horns;
        return hornsPasses && keywordPasses;
    });
}