const container = document.querySelector('.body');
const addButton = document.querySelector('.add-book');
const formBackground = document.querySelector('.form-background');
const divForm = document.querySelector('.form');
const form = document.querySelector('form');
const submit = document.querySelector('.submit');
const myLibrary = [];

addButton.addEventListener('click', () => {
  displayForm();
});

// readButtons.forEach((button) => {
//   button.addEventListener('click', () => {
//     const classList = this.className.split('');
//     console.log('hello!');
//   });
// });

// removeButtons.forEach((button) => {
//   button.addEventListener('click', () => {
//     console.log('hello!');
//   });
// });

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
    card.setAttribute('id', (myLibrary.length - 1));
    card.appendChild(del);
    del.appendChild(removeButton);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(readToggle);
    del.classList.add('remove-row');
    removeButton.classList.add('remove');
    removeButton.addEventListener('click', () => {
      const arrayPosition = (readToggle.parentElement.id);
      console.log(arrayPosition);
      deleteBook(arrayPosition, card);
    });
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
    readToggle.addEventListener('click', () => {
      const arrayPosition = (readToggle.parentElement.id);
      modifyRead(arrayPosition, readToggle);
    });
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

function deleteBook(num, card) {
  card.remove();
  myLibrary.splice(num, num);
}

function modifyRead(num, button) {
  if (button.innerText == 'READ') {
    button.classList.replace('on', 'off');
    button.innerText = 'UNREAD';
    myLibrary[num].read = 'unread';
    console.log(myLibrary[num].read);
  } else {
    button.classList.replace('off', 'on');
    button.innerText = 'READ';
    myLibrary[num].read = 'read';
    console.log(myLibrary[num].read);
  }
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
