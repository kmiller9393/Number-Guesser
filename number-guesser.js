// declared variables
var guessButton = document.querySelector('#guess-button');
var clearButton = document.querySelector('#clear-button');
var resetButton = document.querySelector('#reset-button');
var submitButton = document.querySelector('#submit-button');

var formInput = document.querySelector('#form-input');
var minInput = document.querySelector('#min-input');
var maxInput = document.querySelector('#max-input');
var recentGuess = document.querySelector('#recent-guess');
var numberGuess = document.querySelector('#number-guess');

var min = 1;
var max = 100;
var randomNumber = (Math.floor(Math.random() * max) + min);
console.log(randomNumber);




// event listeners
clearButton.addEventListener('click', clearInput);

resetButton.addEventListener('click', resetAll);

formInput.addEventListener('keyup', disableButton);
minInput.addEventListener('keyup', disableMin);
maxInput.addEventListener('keyup', disableMax);

guessButton.addEventListener('click', function(event) {
  event.preventDefault();
  checkGuess();
  displayGuess();
  notInRange();
  notNumber();
})

submitButton.addEventListener('click', setMinMaxRandom);

//functions
function checkGuess() {
  if ((parseInt(formInput.value)) === randomNumber) {
    recentGuess.innerText = 'BOOM!';
  }
  else if ((parseInt(formInput.value)) < randomNumber) {
    recentGuess.innerText = 'That is too low';
  }
  else if ((parseInt(formInput.value)) > randomNumber) {
    recentGuess.innerText = 'That is too high';
  }
}  

function displayGuess() {
  numberGuess.innerText = formInput.value;
}

function clearInput() {
  formInput.value = '';
  disableButton();
}

function resetAll() {
  randomNumber = Math.floor(Math.random() * max) + min;
  recentGuess.innerText = '';
  numberGuess.innerText = '';
  clearInput();
  disableButton();
}

function clearGuess() {
  recentGuess.innerText = '';
  numberGuess.innerText = '';
}

function notInRange() {
  if (parseInt(formInput.value) > max || parseInt(formInput.value) < min) {
    alert('NUMBER MUST BE BETWEEN 1 AND 100!');
    clearInput();
    clearGuess();
  }
}

function notNumber() {
  if (isNaN(formInput.value)) {
    alert('PLEASE ENTER A NUMBER!');
    clearGuess();
    clearInput();
  }  
}  


function disableButton() {
  if (formInput.value === '') {
    guessButton.disabled = true;
    clearButton.disabled = true;
    resetButton.disabled = true;
  } else {
    guessButton.disabled = false;
    clearButton.disabled = false;
    resetButton.disabled = false;
  }
}

function disableMin() {
  if (minInput.value === '') {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }  
}

function disableMax() {
  if (maxInput.value === '') {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
}

function setMinMaxRandom() {
  min = parseInt(minInput.value);
  max = parseInt(maxInput.value);
  randomNumber = (Math.floor(Math.random() * (max - min) + min));
  console.log(randomNumber);
}




