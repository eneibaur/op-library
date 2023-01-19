const myLibrary = [];

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  function info() {
    const string = 'this.title + " by " this.author + "," + this.pages + " pages, " + this.read';
    return string;
  }
}

function addBookToLibrary() {
}
