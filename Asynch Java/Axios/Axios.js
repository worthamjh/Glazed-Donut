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
    console.log(res.data);
    } catch (error) {
        console.log('Error', error);
    }
};

// spongeBobEpisodes(62896-3416349) episode id number range for spongebob

