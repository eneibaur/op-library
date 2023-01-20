const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.bookInfo = function () {
  const string = `${this.title} by ${this.author}, ${this.pages} pages`;
  return string;
};

myLibrary.push(new Book('Lord of the Reigns', 'K.T.T. Rojuwn', 234, false));

console.log(myLibrary[0].bookInfo());
// function addBookToLibrary() {
// }

// Next steps
// User pushes button on "new book element"
// a form pops up with fields for author, book title, pages, and a read toggle
// save information from that form into an object, which gets stored into the library array
// function loops over the array, creating a new div that fills out the appropriate fields
// with values from the each object in the array
// on cards - include button that runs a function that deletes that object from the array
