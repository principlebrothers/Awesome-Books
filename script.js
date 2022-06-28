const displayBook = document.querySelector(".display-Books");
const addButton = document.querySelector("#addButton");

let books = [];

class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
}

function addBook(title, author) {
  const id = books.length + 1;
  const newBook = new Book(id, title, author);
  books.push(newBook);
  storedData(books);
}

function displayBooks() {
  const allBooks = getData();
  books = allBooks;
  displayBook.innerHTML = "";
  allBooks.forEach((book) => {
    displayBook.insertAdjacentHTML(
      "beforeend",
      `<h3>${book.title}</h3> <h3>${book.author}</h3>
    <button type='button' class='removeBtn' id=${book.id} title= '${book.title}'>Remove</button><hr/>`
    );
  });
}

addButton.addEventListener("click", () => {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  addBook(title, author);
  displayBooks();
});

function removeBook(id) {
  const allBooks = getData();
  const newBookList = allBooks.filter((book) => book.id !== +id);
  storedData(newBookList);
  displayBooks();
}

displayBook.addEventListener("click", (e) => {
  if (e.target.classList.contains("removeBtn")) {
    removeBook(e.target.id);
  }
  displayBooks(books);
});

window.onload = () => {
  getData();
  displayBooks();
};