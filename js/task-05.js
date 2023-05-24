
// Task 5
// Write a script that, when the text is entered into the input field input#name-input (input event),
// displays its current value in the span#name-output. If the input is empty, the span should display the string 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

let input = document.querySelector('#name-input');
const nameOutputEl = document.getElementById('name-output');


input.oninput = function () {
    if (input.value === '') { nameOutputEl.innerHTML = 'незнакомец'; }
    else { nameOutputEl.innerHTML = input.value };
  };