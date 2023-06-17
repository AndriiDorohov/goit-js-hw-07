# Admission criteria

- The repository `goit-js-hw-07` has been created
- When submitting homework, there are two links: to the source files and the work
page on GitHub pages
- The task was completed strictly according to the TOR
- Each task is executed in a separate file named `task-task_number.js`.
  Use `<script type="module">` to close the task code in a separate
scope and avoid identifier name conflicts
- When visiting the work page (GitHub pages) of the task, there are no errors and
warnings in the console
- The names of variables and functions are clear, descriptive
- The code is formatted with Prettier

## Task 1

The HTML has a list of categories `ul#categories'.

```html
<ul id="categories">
  <li class="item">
    <h2>Animals</h2>

    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
</ul>
</li>
<li class="item">
    <h2>Products</h2>

    <ul>
      <li>Bread</li>
      <li>Parsley</li>
      <li>Cottage cheese</li>
</ul>
</li>
<li class="item">
    <h2>Technologies</h2>

    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node</li>
    </ul>
  </li>
</ul>
```

Write a script that will perform the following operations.

Counts and outputs to the console the number of categories in `ul#categories`, that is
, the elements `li.item'. It will turn out `There are 3 categories in the list.".

For each element `li.item` in the list `ul#categories`, it will find and output to the
console the text of the element title (h2 tag) and the number of elements in the category
(all nested elements `li`).

For example, for the first category it will turn out:

- Category: Animals
- Number of elements: 4

## Task 2

The HTML has an empty list of `ul#ingredients'.

```html
<ul id="ingredients"></ul>
```

There is an array of strings in JS.

```js
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Greenery',
  'Seasonings',
];
``

Write a script that will create a separate `li` for each element of the `ingredients` array
, after which it will insert all the `li` in one operation into the list
`ul.ingredients`. To create DOM nodes, use `document.createElement()'.

## Task 3

Write a script to create a gallery of images based on an array of data.

The HTML has a list of 'ul#gallery'.

```html
<ul id="gallery"></ul>
```

Use an array of `images` objects to create `img` tags nested in `li'.
To create markup, use template strings and `insertAdjacentHTML()'.

- All gallery elements must be added to the DOM in one insertion operation.
- Add minimal gallery design with flexboxes or grids via
  css classes.

```js
const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
```

## Task 4

The counter consists of a span and buttons that should increase and decrease
the counter value by `1`.

- Create a variable `counterValue` in which the current value
of the counter will be stored.
- Create the `increment` and `decrement` functions to increase and decrease the value
  counter
- Add listeners to button clicks, function calls and interface updates

```html
<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
```

## Task 5

Write a script that, when typing in the input `input#name-input` (
input event), substitutes its current value in `span#name-output'. If the input
is empty, the string `stranger" should be displayed in the span.

```html
<input type="text" placeholder="Your name?" id="name-input" />
<h1>Hello, <span id="name-output">stranger</span>!</h1>
``

## Task 6

Write a script that, if you lose focus on the input, checks its contents
for the correct number of characters.

```html
<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Enter 6 characters"
/>
``

- How many characters should be in the input, specified in its attribute
  `data-length`.
- If a suitable quantity is entered, then the `border` of the input turns green,
if the wrong one is red.

To add styles, use CSS classes `valid` and `invalid'.

```css
#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}
```

## Task 7

Write a script that responds to changing the value of `input#font-size-control`
(input event) and changes the inline style of `span#text` by updating the property
`font-size`. As a result, when dragging the slider, the text size will change
.

```html
<input id="font-size-control" type="range" />
<br />
<span id="text">Abracadabra!</span>
```

## Task 8 is optional, it is not necessary to perform

Write a script for creating and cleaning a collection of items. The user enters
the number of elements in the `input` and clicks the `Create` button, after which
the collection is rendered. When you click on the `Clear` button, the collection of items
is cleared.

Create a function `createBoxes(amount)', which takes 1 parameter `amount' -
a number. The function creates as many `div` as specified in `amount` and adds them
to `div#boxes'.

Each created div:

- Has a random rgb background color
- The dimensions of the very first div are 30px by 30px
- Each subsequent div after the first one should be wider and higher than the previous one by
10px

Create a function `destroyBoxes()` that clears `div#boxes'.

```html
<div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Create</button>
  <button type="button" data-action="destroy">Clear</button>
</div>

<div id="boxes"></div>
```
