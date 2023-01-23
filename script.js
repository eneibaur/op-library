const container = document.querySelector('.body');
const readButtons = document.querySelectorAll('.read-toggle');
const readToggle = document.createElement('button');
const card = document.createElement('div');
const del = document.createElement('div');
const removeButton = document.createElement('button');
const title = document.createElement('p');
const author = document.createElement('p');
const pages = document.createElement('p');

card.classList.add('card', 'book');
del.classList.add('remove-row');
removeButton.classList.add('remove');
removeButton.innerText = 'X';
title.classList.add('info', 'title');
author.classList.add('info', 'author');
pages.classList.add('info', 'pages');
readToggle.classList.add('readToggle');

const myLibrary = [];

function Book(newTitle, newAuthor, newPages, read) {
  this.title = newTitle;
  this.author = newAuthor;
  this.pages = newPages;
  this.read = read;
}

Book.prototype.bookInfo = function () {
  const string = `${this.title} by ${this.author}, ${this.pages} pages`;
  return string;
};

// push a few fake books to library for display tests
myLibrary.push(new Book('Lord of the Reigns', 'K.T.T. Rojuwn', 234, false));
myLibrary.push(new Book('Theater of a Thespian', 'E.W. Neibaur', 156, false));

// function addBookToLibrary() {
// }

function makeBookDisplay() {
  for (let i = 0; i <= myLibrary.length; i++) {
    container.appendChild(card);
    card.appendChild(del);
    del.appendChild(removeButton);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(readToggle);
    // myLibrary[i] and write them to dom model
  }
}

makeBookDisplay();

// Next steps
// User pushes button on "new book element"
// a form pops up with fields for author, book title, pages, and a read toggle
// save information from that form into an object, which gets stored into the library array
// function loops over the array, creating a new div that fills out the appropriate fields
// with values from the each object in the array
// on cards - include button that runs a function that deletes that object from the array
