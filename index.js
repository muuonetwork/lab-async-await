// Function to Display Posts - Task 2
function displayPosts(posts) {
    const postList = document.getElementById('post-list');
    postList.innerHTML = ''; // Clears the list

    posts.forEach(post => {
        // Create elements
        const li = document.createElement('li');
        const h1 = document.createElement('h1');
        const p = document.createElement('p');

        // Add content
        h1.textContent = post.title;
        p.textContent = post.body;

        // Append structure
        li.appendChild(h1);
        li.appendChild(p);
        postList.appendChild(li);
    });
}

// Async function to fetch and trigger display - Task 2 Refactor
async function fetchAndDisplayPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json();
        displayPosts(data);
    } catch (error) {
        console.error('There was an error fetching the posts:', error);
    }
}

// Initialize the script
fetchAndDisplayPosts();// Write your code here!
