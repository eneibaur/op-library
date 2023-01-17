function books(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    function info() {
      const string = 'this.title + " by " this.author + "," + this.pages + " pages, " + this.read';
      return string;
    }
  }
  
  const theHobbit = Books('The Hobbit', 'J.R.R. Tolkien', 295, 'Not read yet');
  
  console.log(theHobbit.info);