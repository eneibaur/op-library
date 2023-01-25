const container = document.querySelector('.body');
const readButtons = document.querySelectorAll('.read-toggle');
const removeButtons = document.querySelectorAll('.remove');
const addButton = document.querySelector('.add-book');
const formBackground = document.querySelector('.form-background');
const divForm = document.querySelector('.form');
const form = document.querySelector('#form');
const myLibrary = [];

// addButton.addEventListener('click', () => {
//   displayForm();
// });

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
myLibrary.push(new Book('Artifices of an Architect', 'E.W.T. Neibaur', 250, true));

// function addBookToLibrary() {
// }

function makeBookDisplay() {
  for (let i = 0; i < myLibrary.length; i++) {
    const card = document.createElement('div');
    const del = document.createElement('div');
    const removeButton = document.createElement('button');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const readToggle = document.createElement('button');
    container.appendChild(card);
    card.classList.add('card', 'book');
    card.appendChild(del);
    del.appendChild(removeButton);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(readToggle);
    del.classList.add('remove-row');
    removeButton.classList.add('remove');
    removeButton.innerText = 'X';
    title.classList.add('info', 'title');
    author.classList.add('info', 'author');
    pages.classList.add('info', 'pages');
    readToggle.classList.add('read-toggle');
    title.innerText = myLibrary[i].title;
    author.innerText = myLibrary[i].author;
    pages.innerText = myLibrary[i].pages;
    if (myLibrary[i].read) {
      readToggle.innerText = 'READ';
      readToggle.classList.add('on');
    } else {
      readToggle.innerText = 'UNREAD';
      readToggle.classList.add('off');
    }
  }
}

function displayForm() {
  formBackground.classList.replace('disabled', 'enabled');
  divForm.classList.remove('hidden');
  form.classList.remove('hidden');
}
makeBookDisplay();

// Next steps
// User pushes button on "new book element"
// a form pops up with fields for author, book title, pages, and a read toggle
// save information from that form into an object, which gets stored into the library array
// function loops over the array, creating a new div that fills out the appropriate fields
// with values from the each object in the array
// on cards - include button that runs a function that deletes that object from the array
