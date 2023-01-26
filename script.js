const container = document.querySelector('.body');
const readButtons = document.querySelectorAll('.read-toggle');
const removeButtons = document.querySelectorAll('.remove');
const addButton = document.querySelector('.add-book');
const formBackground = document.querySelector('.form-background');
const divForm = document.querySelector('.form');
const form = document.querySelector('form');
const submit = document.querySelector('.submit');
const myLibrary = [];

addButton.addEventListener('click', () => {
  displayForm();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const bookObject = Object.fromEntries(formData);
  myLibrary.push(bookObject);
  console.log(myLibrary);
  makeBookDisplay();
});

submit.addEventListener('click', () => {
  hideForm();
});

function makeBookDisplay() {
  for (let i = myLibrary.length - 1; i <= (myLibrary.length - 1); i++) {
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
    if (myLibrary[i].read == 'read') {
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

function hideForm() {
  formBackground.classList.replace('enabled', 'disabled');
  divForm.classList.add('hidden');
  form.classList.add('hidden');
}

// function Book(newTitle, newAuthor, newPages, read) {
//   this.title = newTitle;
//   this.author = newAuthor;
//   this.pages = newPages;
//   this.read = read;
// }

// Book.prototype.bookInfo = function () {
//   const string = `${this.title} by ${this.author}, ${this.pages} pages`;
//   return string;
// };

// Fix read/unread toggle on cards
// make way to tag cards for delete button
