// console.log('Sending request to server');
// setTimeout(() => {
//     console.log('Here is your data from server');
// }, 3000);
// console.log('I am at the end of the file!');

// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//         setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//             setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//                 setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';
//                     setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue';
//                         setTimeout(() => {
//                         document.body.style.backgroundColor = 'indigo';
//                             setTimeout(() => {
//                             document.body.style.backgroundColor = 'violet';
//                         },1000)
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000);

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
fakeRequestCallBack('books.com/page1', 
    function(response){
        console.log('It Worked!')
        console.log(response)
        fakeRequestCallBack('books.com/page2',
            function(response){
                console.log('It Worked Again!')
                console.log(response)
                fakeRequestCallBack('books.com/page3',
                    function(response){
                        console.log('It Worked Thrice!')
                        console.log(response)
                    },
                     function(err){
                        console.log('Error Page 3!!!!')
                        console.log(err)
                    })
            },
            function(err){
                console.log('Error Page 2!!!!')
                console.log(err)
            })
    }, function(err){
        console.log('Error!!!!')
        console.log(err)
})

