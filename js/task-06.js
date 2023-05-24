// Task 6
// Write a script that checks the input content for the correct number of characters when it loses focus.

// <input
// type="text"
// id="validation-input"
// data-length="6"
// placeholder="Введи 6 символов"
// />

// The required number of characters for the input is specified in its data-length attribute.
// If the input contains the correct number of characters, the input border becomes green. If it's incorrect, it becomes red.
// Use the CSS classes valid and invalid to apply the styles.

// CSS styles:
// #validation-input {
// border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
// border-color: #4caf50;
// }

// #validation-input.invalid {
// border-color: #f44336;
// }

const checkEl = document.getElementById("validation-input");

checkEl.onblur = function() {
  if (Number(this.getAttribute('data-length')) === this.value.length) { 
    this.classList.remove('invalid');
    this.classList.add('valid');
  } else {
    this.classList.remove('valid');
    this.classList.add('invalid');
  }
};
