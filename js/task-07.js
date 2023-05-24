// Task 7
// Write a script that reacts to the change of the input#font-size-control value (input event) and updates the inline style of span#text by changing the font-size property. As a result, dragging the slider will change the text size.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>


const fontEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

fontEl.addEventListener('click', resizeText);

function resizeText() {
    textEl.setAttribute("style", `font-size: ${fontEl.value}px !important;`);
}