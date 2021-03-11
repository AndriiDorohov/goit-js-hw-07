// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

// <div id="counter">
//  <button type="button" data-action="decrement">-1</button>
//  <span id="value">0</span>
//  <button type="button" data-action="increment">+1</button>
// </div>

//const targetBtn = document.querySelector('');
let counterValue = 0;

const decrementBtn = document.querySelector('#counter').firstElementChild;
const incrementBtn = document.querySelector('#counter').lastElementChild;

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);

function increment(){
	counterValue +=1;
  document.getElementById('value').innerHTML = counterValue;
};

function decrement(){
	counterValue -=1;
  document.getElementById('value').innerHTML = counterValue;
};
