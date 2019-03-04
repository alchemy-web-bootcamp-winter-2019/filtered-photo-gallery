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

const sortSelector = document.getElementById('sort-selector');
// const ulContainer = document.getElementById('ul-container');

export default function loadSortedArray(callback) {
    sortSelector.addEventListener('change', () => {
        const sortSelection = {
            property: sortSelector.value
        };
        callback(sortSelection);
    });

    // function clearImages() {
    //     while(ulContainer.children.length > 0) {
    //         ulContainer.lastElementChild.remove();
    //     } 
    // }
}
