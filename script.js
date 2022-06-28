const displayBook = document.querySelector('.display-Books');
const addButton = document.querySelector('#addButton');

function storedData(book) {
  localStorage.setItem('form', JSON.stringify(book));
}

function getData() {
  const receivedData = localStorage.getItem('form');
  if (receivedData) {
    return JSON.parse(receivedData);
  }
  return JSON.parse(receivedData);
}

let books = [];

class Book {
  constructor(title, author, id) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
  addBook() {
    const id = books.length +1;

    books.push(new Book(this.title, this.author, id));
    return books;
  }
  static removeBook(bookCollection,id) {
    return bookCollection.filter((book) => book.id !== +id);  
  }
  
}


function displayBooks() {
  const allBooks = getData();
  if (allBooks) {
    books = allBooks;
  }
  displayBook.innerHTML = '';
  books.forEach((book) => {
    displayBook.insertAdjacentHTML(
      'beforeend',
      `<h3>${book.title}</h3> <h3>${book.author}</h3>
    <button type='button' class='removeBtn' id=${book.id} title= '${book.title}'>Remove</button><hr/>`,
    );
  });
}
addButton.addEventListener('click', () => {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const newBook = new Book(title, author);
  storedData(newBook.addBook());
  displayBooks();
  
});


displayBook.addEventListener('click', (e) => {
  if (e.target.classList.contains('removeBtn')) {
    const allBooks = getData();
    const id = e.target.id;
    const remainingBooks = Book.removeBook(allBooks,id);
    storedData(remainingBooks);
    displayBooks();
  }
});

window.onload = () => {
  getData();
  displayBooks();
};