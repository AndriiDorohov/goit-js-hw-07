// Task 8 (optional, not required to complete)
// Write a script for creating and clearing a collection of elements.
// The user enters the number of elements in the input and clicks the Create button, after which the collection is rendered.
// When the Clear button is clicked, the collection of elements is cleared.

// Create a function createBoxes(amount) that takes 1 parameter amount, which is a number. The function creates div elements equal to the specified amount and adds them to the div#boxes.

// Each created div should have:
// - A random background color in RGB format.
// - The size of the first div should be 30px by 30px.
// - Each subsequent div should be 10px wider and taller than the previous one.

// Create a function destroyBoxes() that clears the div#boxes.

// <div id="controls">
// <input type="number" min="0" max="100" step="1" />
// <button type="button" data-action="render">Создать</button>
// <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

const input = document.querySelector('#controls input');
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxesContainer = document.querySelector('#boxes');

renderBtn.addEventListener('click', () => createBoxes(input.value));
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  destroyBoxes(); // Очищаємо попередню колекцію перед створенням нової

  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomColor();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    boxes.push(box);
    size += 10;
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
