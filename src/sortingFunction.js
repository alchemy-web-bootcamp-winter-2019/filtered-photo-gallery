export function sortingFunction(sortingArray, sortChoice) {
    const property = sortChoice.property;
    return sortingArray.sort((a, b) => {
        if(a[property] === b[property]) {
            return 0;
        }
        if(a[property] > b[property]) {
            return 1;
        }
        return -1;
    });
}
