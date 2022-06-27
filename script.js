const displayBook = document.querySelector('.display-Books');
const addButton = document.querySelector('#addButton');

let books = [];

function Book(title, author, id) {
  this.id = id;
  this.title = title;
  this.author = author;
}

function addBook(title, author) {
  const id = books.length;
  books.push(new Book(title, author, id));
}

function displayBooks() {
  displayBook.innerHTML = '';
  books.forEach((book) => {
    displayBook.insertAdjacentHTML('beforeend', `<h3>${book.title}</h3> <h3>${book.author}</h3>
    <button type='button' class='removeBtn' id=${book.id} title= '${book.title}'>Remove</button><hr/>`);
  });
}

addButton.addEventListener('click', () => {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  addBook(title, author);
  displayBooks();
});

function removeBook(selectedBook) {
  const newBookList = books.filter((book) => book.id !== Number(selectedBook));
  books = newBookList;
  return books;
}

displayBook.addEventListener('click', (e) => {
  if (e.target.classList.contains('removeBtn')) {
    removeBook(e.target.id);
  }
  displayBooks(books);
});
