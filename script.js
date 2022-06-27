const books = [];
function book (title, author) {
    this.title = title,
    this.author = author
}

 function displayBooks() {
    books.forEach(book => {
        
    })
 }
function addBook(title, author){
   books.push(new book(title, author));
   displayBooks();
}

const addButton = document.querySelector('#addButton');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
addButton.addEventListener('click',addBook(title, author));