const container = document.querySelector('.body');
const addButton = document.querySelector('.add-book');
const formBackground = document.querySelector('.form-background');
const divForm = document.querySelector('.form');
const form = document.querySelector('form');
const submit = document.querySelector('.submit');
const myLibrary = [];

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

function deleteBook(num) {
  if (myLibrary.length === 1) {
    myLibrary.length = 0;
  } else {
    myLibrary.splice(num, num);
  }
  console.log(myLibrary);
}

function updateDisplay() {
  const currentDisplay = document.querySelector('.body');
  do {
    currentDisplay.removeChild(currentDisplay.lastChild);
  } while (currentDisplay.childNodes.length > 2);
  for (let i = 0; i < myLibrary.length; i++) {
    makeNewBook(i);
  }
}

function modifyRead(num, button) {
  if (button.innerText === 'READ') {
    button.classList.replace('on', 'off');
    button.innerText = 'UNREAD';
    myLibrary[num].read = 'unread';
  } else {
    button.classList.replace('off', 'on');
    button.innerText = 'READ';
    myLibrary[num].read = 'read';
  }
}

function makeNewBook(num) {
  for (let i = num; i <= (myLibrary.length - 1); i++) {
    const card = document.createElement('div');
    const del = document.createElement('div');
    const removeButton = document.createElement('button');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const readToggle = document.createElement('button');
    container.appendChild(card);
    card.classList.add('card', 'book');
    card.setAttribute('id', num);
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
      deleteBook(arrayPosition);
      updateDisplay();
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
    console.table(myLibrary);
  }
}

addButton.addEventListener('click', () => {
  displayForm();
});

submit.addEventListener('click', () => {
  hideForm();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const bookObject = Object.fromEntries(formData);
  myLibrary.push(bookObject);
  makeNewBook((myLibrary.length - 1));
});
