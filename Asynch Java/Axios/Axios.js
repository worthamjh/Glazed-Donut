// fetch ('https://api.tvmaze.com/shows/2/episodes')   
//     .then((res) => {
//         console.log('Resolution 1 Complete', res);
//         return res.json;
//     })
//     .then((data) => {
//         console.log('JSON Data 1 Complete', data);
//     })
//     .catch((error) => {
//         console.log('Error happened', error)
// });


// axios.get('https://api.tvmaze.com/shows/713/episodes')
//     .then ((response) => {
//         console.log('This is the response:', response);
//     })

const spongeBobEpisodes = async (id) => {
    try{
    const res =await axios.get(`https://api.tvmaze.com/episodes/${id}`);
    console.log(res.data.name);
    } catch (error) {
        console.log('Error', error);
    }
};

// spongeBobEpisodes(62896-3416349) episode id number range for spongebob

const getDadJokeButtonSelector = document.querySelector('#dadJokeButton');
const jokesSelector = document.querySelector('#jokes');

const getDadJoke = async () => {
    try{
    const config = {headers: { Accept: 'application/json'}}
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return res.data.joke;
    } catch (e){
        return 'Oh no error';
    }
}
const addNewJoke = async () => {
    const newJokeText = await getDadJoke();
    const newLI = document.createElement('LI');
    newLI.append(newJokeText);
    jokesSelector.append(newLI);
}
getDadJokeButtonSelector.addEventListener('click', addNewJoke);

