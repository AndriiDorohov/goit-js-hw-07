// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и 
// изменяет инлайн - стиль span#text обновляя свойство font - size.В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>


const fontEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

fontEl.addEventListener('click', resizeText);

function resizeText() {
    textEl.setAttribute("style", `font-size: ${fontEl.value}px !important;`);
}