// Task 3
// Write a script to create an image gallery based on an array of data.

// In HTML, there is an empty <ul> with the id "gallery".

// <ul id="gallery"></ul>

// Use the "images" array of objects to create <img> tags nested within <li>.
// Use template strings and insertAdjacentHTML() to create the markup.

// All gallery elements should be inserted into the DOM in a single insertion operation.
// Apply minimal styling to the gallery using CSS classes, such as flexbox or grids.


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

images.forEach(function(galleryEl, i, arr) {
    document.querySelector('#gallery').insertAdjacentHTML('beforeEnd', `<li><img src="${galleryEl.url}" alt="${galleryEl.alt}"></li>`);
});

