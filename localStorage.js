const inputTitle = document.getElementById("title");
const inputAuthor = document.getElementById("author");

function storedData(book) {

  localStorage.setItem("form", JSON.stringify(book));
}

function getData() {
  const receivedData = localStorage.getItem("form");
  if (receivedData) {
    return JSON.parse(receivedData);
  }
}