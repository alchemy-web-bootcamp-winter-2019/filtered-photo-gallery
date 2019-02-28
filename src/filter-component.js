export function filterObjects(imageArray, filter) {
  return imageArray.filter(image => {
    const hasKeyword = !filter.keyword || image.keyword === filter.keyword;
    const hasHorns = !filter.horns || image.horns >= filter.horns;

    return hasKeyword && hasHorns;
  });
}

function loadFilter(callback) {
  const filterForm = document.getElementById('filter-form');
  filterForm.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(filterForm);
    const filterInput = {
      keyword: formData.get('keyword-input'),
      horns: formData.get('horns-input')
    };
    callback(filterInput);
  });

}
export default loadFilter;