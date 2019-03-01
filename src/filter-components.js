export default function loadFilter(callback) {
    const formNode = document.getElementById('form');
    const filterSetting = {
        keyword:'',
        horns:''
    };
    formNode.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(formNode);
        filterSetting.keyword = formData.get('keyword');
        filterSetting.horns = formData.get('horns');
        callback(filterSetting);
    });
}