const selectorSelector = document.querySelector('#userInputSeasonSelector');
let seasonSelectorUserInput = document.querySelector('.seasonSelectorInput');
const submitButtonSelector = document.querySelector('#submitButton');

submitButtonSelector.addEventListener('click', () => {
    let userInput = selectorSelector.value;
    console.log(userInput);
})

