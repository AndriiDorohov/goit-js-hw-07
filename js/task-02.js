// Task 2
// In the HTML, there is an empty list with the id "ingredients".

// <ul id="ingredients"></ul>
// In JavaScript, there is an array of strings.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// Task 2
// Write a script that will create a separate <li> element for each item in the "ingredients" array,
// and then insert all <li> elements at once into the <ul> list with the class "ingredients".
// Use document.createElement() to create DOM nodes.

const ingridientsContainerEl = document.querySelector('#ingredients')

const elements = [];


ingredients.forEach(function(item, i, arr) {
    const option = ingredients[i];
    const listEl = document.createElement('li');
    listEl.textContent = option;
    elements.push(listEl);
});


ingridientsContainerEl.append(...elements);
