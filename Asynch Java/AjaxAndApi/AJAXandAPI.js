// fetch('https://swapi.tech/api/people/1')
//     .then((resolution) => {
//         console.log('FIRST REQUEST RESOLVED', resolution);
//         return resolution.json();
//     })
//     .then ((data) => {
//         console.log('FIRST JSON is done', data);
//         return fetch('https://swapi.tech/api/people/2')
//     })
//     .then((resolution) => {
//         console.log('SECOND REQUEST RESOLVED', resolution);
//         return resolution.json();
//     })
//     .then ((data) => {
//         console.log('SECOND JSON is done', data);
//         return fetch('https://swapi.tech/api/people/3')
//     })
//     .then((resolution) => {
//         console.log('THIRD REQUEST RESOLVED', resolution);
//         return resolution.json();
//     })
//     .then ((data) => {
//         console.log('THIRD JSON is done', data);
//     })
//     .catch(error => {
//         console.log('REQUEST ERROR', error);
//     });

const loadStarWarsPeople = async () => {
   try{ 
    const response = await fetch("https://swapi.tech/api/people/1");
    const data = await response.json();
    console.log(data);
    const response2 = await fetch("https://swapi.tech/api/people/2");
    const data2 = await response.json();
    console.log(data2);
   } catch (error){
    console.log('Error', error);
   }
};

loadStarWarsPeople();
