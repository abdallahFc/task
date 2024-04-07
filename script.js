function fetchUsers() {
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            if (!response.status === 200) {
                throw new Error('Failed to fetch users');
            }
            return response.json();
        })
        .catch(error => {
            console.log('Error fetching users:', error);
            return [];
        });
}

async function fetchUserPosts(userId) {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch user posts');
        }
        return await response.json();
    } catch (error) {
        console.log('Error fetching user posts:', error);
        return [];
    }
}

async function displayUserTabs() {
    try {
        let users = await fetchUsers();
        let userTabs = document.getElementById("userTabs");
        users.forEach((user, index) => {
            let button = document.createElement("button");
            button.textContent = user.name;
            userTabs.appendChild(button);
            button.addEventListener("click", async () => {
                let posts = await fetchUserPosts(user.id);
                displayPostTitles(posts);
            });
            if (index === 0) {
                button.click();
            }
        });
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}


function displayPostTitles(posts) {
    let postTitles = document.getElementById("postTitles");
    postTitles.innerHTML = "";
    posts.forEach(post => {
        let postCard = document.createElement("div");
        postCard.classList.add("PostCard");
        let title = document.createElement("p");
        title.textContent = post.title;
        postCard.appendChild(title);
        postTitles.appendChild(postCard);
    });
}

displayUserTabs();


