const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7){
                resolve('Your fake data here');
            }
            reject('Request error');
        }, 1000)
        
    })
}

fakeRequest('/dogs/1')
    .then(() => {
        console.log('Done with request')
        console.log('data is:', data)
    })
    .catch((err) => {
        console.log('Oh no', err)
    })