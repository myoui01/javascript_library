function Book (title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    const read = this.read ? 'read' : 'not read';
    return `${this.title} by ${this.author}, ${this.pages} páginas, ${read}`;
  };
}

function addBookToLibrary (title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    const book = document.createElement('div');
    book.classList.add('book');

    const title = document.createElement('h4');
    title.classList.add('title');
    title.innerHTML = myLibrary[i].title;

    const author = document.createElement('p');
    author.classList.add('author');
    author.innerHTML = myLibrary[i].author;

    const pages = document.createElement('p');
    pages.classList.add('pages');
    pages.innerHTML = myLibrary[i].pages + ' páginas';

    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pages);

    booksContainer.append(book);
  }
}

const myLibrary = [];
const menu = document.querySelector('.menu');
const headerNav = document.querySelector('.header-nav');
const booksContainer = document.querySelector('.main');

function removeBookAndUpdateDisplay (bookIndex) {
  myLibrary.splice(bookIndex, 1);
  booksContainer.innerHTML = '';
  displayBooks();
}

function enableReadButton() {
  const readButtons = document.querySelectorAll('.read');

  readButtons.forEach((readButton) => {
    readButton.addEventListener('click', () => {
      const bookIndex = readButton.dataset.book;
      if (myLibrary[bookIndex].read === 0) {
        myLibrary[bookIndex].read = 1;
      } else {
        myLibrary[bookIndex].read = 0;
      }
      readButton.textContent = myLibrary[bookIndex].read ? 'Lido' : 'Não lido';
    });
  });
}

function enableRemoveButton () {
  const removeButtons = document.querySelectorAll('.remove');

  removeButtons.forEach((removeButton) => {
    removeButton.addEventListener('click', () => {
      const bookIndex = removeButton.dataset.book;
      removeBookAndUpdateDisplay(bookIndex);
    });
  });
}

addBookToLibrary('Cracking the Coding Interview', 'Gayle McDowell', 708, 0);
addBookToLibrary('The Mythical Man-Month', 'Fred Brooks', 336, 0);
addBookToLibrary('Code Complete', 'Steve McConnell', 960, 0);
addBookToLibrary('Programming Pearls', 'Jon Bentley', 256, 0);
addBookToLibrary('Code: The Hidden Language of Computer Hardware and Software', 'Charles Petzold', 400, 0);
addBookToLibrary('Introduction to the Theory of Computation', 'Michael Sipser', 456, 0);
addBookToLibrary('Gödel, Escher, Bach: An Eternal Golden Braid', 'Douglas R. Hofstadter', 756, 0);


menu.addEventListener('click', () => {
  headerNav.classList.toggle('toggle');
});

displayBooks();

let readButtons = document.querySelectorAll('.read');
let removeButtons = document.querySelectorAll('.remove');

const modal = document.querySelector('dialog');
const form = document.querySelector('form');
const addBook = document.querySelector('form button');
const close = document.querySelector('form svg');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const readInput = document.getElementById('read');

const addBookButtons = document.querySelectorAll('.add');
addBookButtons.forEach((addBook) => {
  addBook.addEventListener('click', () => {
    modal.showModal();
    if (addBook.parentElement.classList.contains('header-nav')) {
      headerNav.classList.toggle('toggle');
    }
  });
});

close.addEventListener('click', () => modal.close());

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = titleInput.value;
  const author = authorInput.value;
  const pages = parseInt(pagesInput.value);
  const readingStatus = readInput.checked ? 1 : 0;

  addBookToLibrary(title, author, pages, readingStatus);

  booksContainer.innerHTML = '';
  displayBooks();

  enableReadButton();
  enableRemoveButton();

  form.reset();
});

addBook.addEventListener('click', (e) => {
  modal.close();
});

