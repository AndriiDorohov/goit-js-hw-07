// Задание 1
// В HTML есть список категорий ul#categories.
// Напиши скрипт, который выполнит следующие операции.

// 1.Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// 2.Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество 
// элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const menuItemsByClass = document.querySelectorAll(".item");
console.log(`В списке ${menuItemsByClass.length} категории`);

const navEl = document.querySelector('#categories');
const navCatEl = navEl.querySelectorAll('.item');

for (let i = 0; i < navCatEl.length; i++) {
    console.log(`Категория: ${navCatEl[i].firstElementChild.textContent}`);
    console.log(`Количество элементов: ${navCatEl[i].querySelectorAll('li').length}`);
};
