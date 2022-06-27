const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');

function storedData() {
  const formData = {
    title: inputTitle.value,
    author: inputAuthor.value,
  };
  localStorage.setItem('form', JSON.stringify(formData))
}

function getData(){
  const receivedData = localStorage.getItem('form');
  if(receivedData) {
    const formObject = JSON.parse(receivedData);
    inputTitle.value = formObject.title;
    inputAuthor.value = formObject.author;
  }
}

window.onload = () => {
  getData();
};

inputTitle.onchange = storedData;
inputAuthor.onchange = storedData;