// 1. Task: Select and change header element
// Your HTML shows <h1 id="header">
const header = document.querySelector('#header');
header.textContent = 'Flatiron Bookstore';

// 2. Task: Remove the placeholder "Example Title"
// Your HTML has an <li> with id="delete-this"
const exampleItem = document.querySelector('#delete-this');
if (exampleItem) {
    exampleItem.remove();
}

// 3. Task: Create elements and append to existing DOM element
// Ensure 'bookCatalog' matches the array name at the top of your index.js
bookCatalog.forEach(book => {
    // Create the elements required by the rubric
    const bookContainer = document.createElement('li'); // Using <li> since it's inside a <ul>
    const bookTitle = document.createElement('h2');
    const bookAuthor = document.createElement('p');
    const bookImage = document.createElement('img');

    // Populate the elements
    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookImage.src = book.image;
    
    // Append elements to the container
    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(bookImage);

    // Append the container to the <ul> with id="book-list"
    const bookList = document.querySelector('#book-list');
    bookList.appendChild(bookContainer);
});