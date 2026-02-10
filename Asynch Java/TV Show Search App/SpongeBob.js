const selectorSelector = document.querySelector('#userInputSeasonSelector');
const seasonSelectorUserInput = document.querySelector('.seasonSelectorInput');
const submitButtonSelector = document.querySelector('#submitButton');

submitButtonSelector.addEventListener('change', () => {
    console.log(selectorSelector.value);
})