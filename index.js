// Definição da classe Book
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Função para criar um novo card de livro e adicioná-lo à tela
function addBookToLibrary(title, author, genre, pages, read) {
  // Criar um novo objeto Book
  var newBook = new Book(title, author, pages, read);

  // Selecionar a seção onde os cards serão exibidos
  var cardContainer = document.querySelector('.card-container');

  // Criar um novo elemento div para o card do livro
  var card = document.createElement('div');
  card.classList.add('card');

  // Montar o conteúdo do card com base nos dados do novo livro
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

  // Adicionar o novo card à seção de cards existente
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

    // Adicionar o novo livro à biblioteca (DOM)
    addBookToLibrary(title, author, genre, pages, read);

    // Fechar o modal após adicionar o livro
    modal.style.display = 'none';
    bg.style.display = 'none';

    // Limpar os campos do formulário (opcional)
    form.reset();
  });
});
