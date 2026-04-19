<<<<<<< HEAD
async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  displayPosts(posts);
}

function displayPosts(posts) {
  const ul = document.getElementById('post-list');

  posts.forEach(post => {
    const li = document.createElement('li');

    const h1 = document.createElement('h1');
    h1.textContent = post.title;

    const p = document.createElement('p');
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);
    ul.appendChild(li);
  });
}

getPosts();
=======
// Task 2: Fetch Data from API with Async/Await

function displayPosts(posts) {
  const ul = document.getElementById("post-list");

  posts.forEach((post) => {
    const li = document.createElement("li");

    const h1 = document.createElement("h1");
    h1.textContent = post.title;

    const p = document.createElement("p");
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);
    ul.appendChild(li);
  });
}

async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  displayPosts(posts);
}

fetchPosts();
>>>>>>> 678a17c7512e7b24790e305b718731b3b8c9d628
