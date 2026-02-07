
const newButton =document.querySelector('.btnV2');

for (let i=0; i<50; i++){
const extraButton = document.createElement('button');
extraButton.innerText = 'Please Click Me' + i;
const extraButtonLocation = document.querySelector('#loopButtons');
extraButtonLocation.appendChild(extraButton) 
}

newButton.onclick = function () {

    console.log('You clicked the button')
};

const divSelector = document.querySelectorAll('div');
for (let div of divSelector){
    const description = document.createElement('span');
    description.innerText = 'This is a practice span';
    div.appendChild(description);
}





function scream(){
    console.log('AHHHHHHH');
}
const clickMeIIILocation = document.querySelector('#clickMeIII');
clickMeIIILocation.onmouseenter = scream;





const clickMeIVLocation = document.querySelector('#clickMeIV');
clickMeIVLocation.addEventListener('click', function(){
    alert('You single clicked Click Me IV');
})





function twist(){
    console.log('Twist')
}
function shout(){
    console.log('Shout')
}
function oneTimeOnly(){
    console.log('This will print one time only because look at the java script')
}
const clickMeVLocation = document.querySelector('#clickMeV');
clickMeVLocation.addEventListener('click', twist);
clickMeVLocation.addEventListener('click', shout);
clickMeVLocation.addEventListener('click', oneTimeOnly, {once: true});





function hello(){
    console.log('hello');
}
function goodBye(){
    console.log('goodbye');
}
const helloButton = document.querySelector('#hello');
helloButton.addEventListener('click', hello);
const goodByeButton = document.querySelector('#goodbye');
goodByeButton.addEventListener('click', goodBye);





// const randomColor = function(){
//      const r = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     return `rgb(${r}, ${g}, ${b})`;
// }
const changeColorButton = document.querySelector('#changeButton');
changeColorButton.addEventListener('click', function(){
    const newColor = randomColor();
    document.body.style.backgroundColor = newColor;
})




const randomColor2 = function(){
    const r = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}
const randomColor3 = function(){
    const r = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}
const changeColorButton2 = document.querySelectorAll('.btns');
for(let btn of changeColorButton2){
    btn.addEventListener('click', function(){
    const newColor2 = randomColor2();
    const newColor3 = randomColor3();
    btn.style.backgroundColor = newColor2;
    btn.style.color = newColor3;
})}
const h3 = document.querySelectorAll('h3');
for(let item of h3){
    item.addEventListener('click', function(){
        const newColor2 = randomColor2();
        item.style.backgroundColor = randomColor2;
    })
}




const eventObject = document.querySelector('#eventObjectButton');
eventObject.addEventListener('click', function(evt){
    console.log(evt);
})
const checkBox = document.querySelector('#checkBoxInput');
checkBox.addEventListener('keydown', function(evt){
    // console.log(evt);
    console.log(evt.key);
    console.log(evt.code);
})
checkBox.addEventListener('keyup', function(){
    console.log('Key Up');
})
// window.addEventListener('keydown', function(evt){
    // console.log(evt.key);
    // console.log(evt.code);
    // switch(evt.code){
    //     case'ArrowUp':
    //     console.log('UPPPPP');
    //     break;
    //     case'ArrowDown':
    //     console.log('DOWNNNN');
    //     break;
    //     case'ArrowLeft':
    //     console.log('LEFTTTT');
    //     break;
    //     case'ArrowRight':
    //     console.log('RIGHTTTT');
    //     break;
    //     default:
    //     console.log('Ignore');
    //     break;
    // }
// })



const formSubmit = document.querySelector('#formSubmitButton');
formSubmit.addEventListener('submit', function (evt) {
    evt.preventDefault();
    console.log('Submitted');
})





const formSubmit2 = document.querySelector('#shelterForm');
const catName = document.querySelector('#checkBoxInput2');
const catNameList = document.querySelector('#adoptableCats');
formSubmit2.addEventListener('submit', function(evt){
    evt.preventDefault();
    const catNameInput = catName.value;
    const catNameListItem = document.createElement('LI');
    catNameListItem.innerText = catNameInput;
    catNameList.append(catNameListItem);
    catName.value = '';
});



const formSelect = document.querySelector('#groceryForm');
const productSelect = document.querySelector('#product');
const quantitySelect = document.querySelector('#qty');
const listSelect = document.querySelector('#list');
formSelect.addEventListener('submit', function(evt){
    evt.preventDefault();
    const productItem = productSelect.value;
    const quantityItem = quantitySelect.value;
    const productListItem = document.createElement('LI'); 
    productListItem.innerText = quantityItem +  productItem;
    listSelect.append(productListItem);
    productSelect.value = '';
    quantitySelect.value = '';
});




// const changeEventInputSelector = document.querySelector('#changeEventInput');
// changeEventInputSelector.addEventListener('change', function(evt){
//     console.log('sdfsdfsdf');
// });

const changeEventInputSelector = document.querySelector('#changeEventInput');
const specialSpanSelector = document.querySelector('#specialSpan');
changeEventInputSelector.addEventListener('input', function(evt){
    specialSpanSelector.innerText=changeEventInputSelector.value;
});



const userNameSelector = document.querySelector('#username');
const h1Selector = document.querySelector('#headerPractice');
userNameSelector.addEventListener('input', function(evt){
    const userNameInput = userNameSelector.value;
    const h1Input = userNameInput.length;
    if (userNameInput.length > 0){
         h1Selector.innerText = `Welcome, ${userNameInput}`
        }
        else {
        h1Selector.innerHTML = 'Enter Your Username'
        } 
    }
)




