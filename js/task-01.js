// Task 1
// There is a list of categories in HTML with the ul#categories selector.
// Write a script that performs the following operations.

// 1. Counts and outputs the number of categories in the ul#categories, i.e., the number of li.item elements.
// The output should be 'There are 3 categories in the list.'

// 2. For each li.item element in the ul#categories list, finds and outputs the text of the element's heading (h2 tag) and the number
// of elements in the category (all nested li elements).

// For example, for the first category, the output should be:

// Category: Animals
// Number of elements: 4

const menuItemsByClass = document.querySelectorAll(".item");
console.log(`В списке ${menuItemsByClass.length} категории`);

const navEl = document.querySelector('#categories');
const navCatEl = navEl.querySelectorAll('.item');

navCatEl.forEach(function(item, i, arr) {
  console.log(`Категория: ${navCatEl[i].firstElementChild.textContent}`);
    console.log(`Количество элементов: ${navCatEl[i].querySelectorAll('li').length}`);
});