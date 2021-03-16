// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

let input = document.querySelector('#name-input');
const nameOutputEl = document.getElementById('name-output');


input.oninput = function () {
    if (input.value === '') { nameOutputEl.innerHTML = 'незнакомец'; }
    else { nameOutputEl.innerHTML = input.value };
  };