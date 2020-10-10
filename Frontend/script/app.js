const posts = JSON.parse(localStorage.getItem('posts'));
console.log(posts)
// initial state
const updatePosts = (posts) => {
    for (let i = 0; i < posts.length; i++) {
        createNewPost(posts[i].id, posts[i].body);
    }
}


const addPost = () => {
    const lastId = ++(posts[posts.length - 1].id)
    const userInput = textArea.val();
    createNewPost(lastId, userInput)
    posts.push({
        id: lastId,
        body: userInput
    });
    console.log(posts)
    textArea.val('')
    localStorage.setItem('posts', JSON.stringify(posts))
}


// attach eventhandler 
submitBtn.click(addPost);


// entry point 
const entryPoint = () => {
    updatePosts(posts);
}

entryPoint()