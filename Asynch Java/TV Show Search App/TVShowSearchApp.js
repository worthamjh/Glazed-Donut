const searchFormSelector = document.querySelector('#searchForm');
searchForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const userTextInput = searchForm.elements.query.value;
    config = { params: {q: userTextInput}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=`, config);
    allTvShowImages(res.data);
    searchForm.elements.query.value= '';
})
const allTvShowImages = async (shows) => {
    for(let result of shows){
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}