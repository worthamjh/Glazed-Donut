// async function hello() {

// }

// const sing = async () => {
//     throw new Error ('You done fucked up')
//     return 'LA LA LA LA LA'
// }

// sing()
//     .then ((data) => {
//         console.log('Promise resolved with', data)
//     })
//     .catch ((err) => {
//         console.log('Promise rejected')
//         console.log(err)
//     })

// const logIn = async (username, password) => {
//     if (!username || !password) throw 'Missing Credentials'
//     if (password === 'balls') return 'Password Validated Ass'
//     throw 'invalid password'
// }

// logIn('tits', 'balls')
//     .then(msg => {
//         console.log('Logged In')
//         console.log(msg)
//     })
//     .catch(err => {
//         console.log('Error')
//         console.log(err)
// })


const delayedColorChange = (color,delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

 
async function rainbow() {
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)
    return 'All done!'
}

async function printRainbow() {
    await rainbow();
    console.log('That is the end of the rainbow')
}
