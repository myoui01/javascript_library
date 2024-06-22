function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, genre, pages, read) {
  var newBook = new Book(title, author, pages, read);
  var cardContainer = document.querySelector('.card-container');
  var card = document.createElement('div');
  
  card.classList.add('card');
  card.innerHTML = `
    <img src="imgs/book-placeholder.jpg" alt="Placeholder do Livro">
    <div class="card-content">
      <div class="card-title">${newBook.title}</div>
      <div class="card-author">${newBook.author} • ${genre}</div>
      <div class="card-bottom">
        <div class="card-pags">${newBook.pages} pages</div>
        <div class="card-icon">
          <img src="imgs/yes.png" alt="check">
        </div>
      </div>
    </div>
  `;
  cardContainer.appendChild(card);
}

document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById('myModal');
  var bg = document.querySelector('.bg');
  var btn = document.querySelector('.botao');
  var span = document.getElementsByClassName('close')[0];
  var form = document.getElementById('bookForm');

  btn.onclick = function() {
    modal.style.display = 'block';
    bg.style.display = 'flex';
  }

  span.onclick = function() {
    modal.style.display = 'none';
    bg.style.display = 'none';
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
      bg.style.display = 'none';
    }
  }

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var genre = document.getElementById('genre').value;
    var pages = document.getElementById('pages').value;
    var read = document.getElementById('is-read').checked;

    addBookToLibrary(title, author, genre, pages, read);

    modal.style.display = 'none';
    bg.style.display = 'none';

    form.reset();
  });
});
