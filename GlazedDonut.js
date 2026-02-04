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
