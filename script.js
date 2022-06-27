const displayBook = document.querySelector('.display-Books');
const addButton = document.querySelector('#addButton');

let books = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function addBook(title, author) {
  books.push(new Book(title, author));
}

function displayBooks() {
  displayBook.innerHTML = '';
  books.forEach((book, index) => {
    displayBook.insertAdjacentHTML('beforeend', `<h3>${book.title}</h3> <h3>${book.author}</h3>
    <button type='button' class='removeBtn' id=${index} title= '${book.title}'>Remove</button><hr/>`);
  });
}

addButton.addEventListener('click', () => {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  addBook(title, author);
  displayBooks();
});

function removeBook(selectedBook) {
  const newBookList = books.filter((book) => book.title !== selectedBook);
  books = newBookList;
  return books;
}

displayBook.addEventListener('click', (e) => {
  if (e.target.classList.contains('removeBtn')) {
    removeBook(e.target.title);
  }
  displayBooks(removeBook());
});
