// console.log('Sending request to server');
// setTimeout(() => {
//     console.log('Here is your data from server');
// }, 3000);
// console.log('I am at the end of the file!');

setTimeout(() => {
    document.body.style.backgroundColor = 'red';
        setTimeout(() => {
        document.body.style.backgroundColor = 'orange';
            setTimeout(() => {
            document.body.style.backgroundColor = 'yellow';
                setTimeout(() => {
                document.body.style.backgroundColor = 'green';
                    setTimeout(() => {
                    document.body.style.backgroundColor = 'blue';
                        setTimeout(() => {
                        document.body.style.backgroundColor = 'indigo';
                            setTimeout(() => {
                            document.body.style.backgroundColor = 'violet';
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000);

// const colorChange = function(newColor,delay,doNext){
//     setTimeout(() =>{
//         document.body.style.backgroundColor = newColor;
//         doNext();
//     }, delay);
// }

// colorChange('red', 3000, function(){
//     colorChange('orange',3000,function(){
//         colorChange('yellow',3000,function(){
//             colorChange('green',3000,function(){
//                 colorChange('blue',3000,function(){
//                     colorChange('indigo',3000,function(){
//                         colorChange('violet',3000,function(){
//                         })
//                     })
//                 })
//             })
//         })
//     })
// });



// *****************************************************************************
// ASYNC PROMISES
const fakeRequestCallBack = (url, sucess, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if(delay > 4000) {
            failure('Connection Timeout')
        } else {
            sucess(`Here is your fake data from ${url}`)
        }
    }, delay)
}
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if(delay > 4000) {
                reject('Connection Timeout')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    }) 
}







// fakeRequestCallBack('books.com', function(){
//     console.log('It Worked!')
// }, function(){
//     console.log('Error!!!!')
// })

// fakeRequestCallBack('books.com', 
//     function(response){
//     console.log('It Worked!')
//     console.log(response)
// }, function(err){
//     console.log('Error!!!!')
//     console.log(err)
// })
// ********************************************************************
// ASYNC NESTED CALLBACKS
// fakeRequestCallBack('books.com/page1', 
//     function(response){
//         console.log('It Worked!')
//         console.log(response)
//         fakeRequestCallBack('books.com/page2',
//             function(response){
//                 console.log('It Worked Again!')
//                 console.log(response)
//                 fakeRequestCallBack('books.com/page3',
//                     function(response){
//                         console.log('It Worked Thrice!')
//                         console.log(response)
//                     },
//                      function(err){
//                         console.log('Error Page 3!!!!')
//                         console.log(err)
//                     })
//             },
//             function(err){
//                 console.log('Error Page 2!!!!')
//                 console.log(err)
//             })
//     }, function(err){
//         console.log('Error!!!!')
//         console.log(err)
// })

// ***********************************************************************************
// Async Promise
// FULL LENGTH PROMISE
// const request = fakeRequestPromise('yelp.com/api/page1');
// request.then(() => {
//     console.log('Page 1 success')
//     fakeRequestPromise('yelp.com/api/page2')
//         .then(() => {
//             console.log('Page 2 success')
//             fakeRequestPromise('yelp.com/api/page')
//                 .then(() => {
//                     console.log('Page 3 success')
//                 })
//                 .catch(() => {
//                     console.log('Error page 3');
//                 })
//         })
//         .catch(() => {
//         console.log('Error page 2');
//         })
// })
// .catch(() => {
//     console.log('Error page 1')
// })

// SHORTENED PROMISE DOES THE SAME THING AS ABOVE JUST SHORTER

fakeRequestPromise('yelp.com/api/page1')
    .then((data) => {
        console.log('Page 1 success')
        console.log(data)
        return fakeRequestPromise('yelp.com/api/page2')
    })
    .then((data) => {
        console.log('Page 2 success')
        console.log(data)
        return fakeRequestPromise('yelp.com/api/page3')
    })
    .then((data) => {
        console.log('Page 3 success')
        console.log(data)
        return fakeRequestPromise('yelp.com/api/page4')
    })
    .then((data) => {
        console.log('Page 4 success')
        console.log(data)
        return fakeRequestPromise('yelp.com/api/page5')
    })
    .catch((data) => {
        console.log('Oh no error')
    })
