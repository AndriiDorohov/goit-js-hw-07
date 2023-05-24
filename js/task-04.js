// Task 4
// The counter consists of a <span> element and buttons that should increase and decrease the counter value by 1.

// Create a variable called counterValue to store the current counter value.
// Create functions called increment and decrement to increase and decrease the counter value.
// Add click event listeners to the buttons, call the corresponding functions, and update the interface.

// <div id="counter">
// <button type="button" data-action="decrement">-1</button>
// <span id="value">0</span>
// <button type="button" data-action="increment">+1</button>
// </div>

//const targetBtn = document.querySelector('');
let counterValue = 0;

const decrementBtn = document.querySelector('#counter').firstElementChild;
const incrementBtn = document.querySelector('#counter').lastElementChild;
const counterValueEl = document.getElementById('value');


decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);

function increment(){
	counterValue +=1;
  counterValueEl.innerHTML = counterValue;
};

function decrement(){
	counterValue -=1;
  counterValueEl.innerHTML = counterValue;
};
