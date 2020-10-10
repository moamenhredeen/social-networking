
const getDataFromLocalStorage = () => {
    let posts = [];
    // get posts if stored in localstorage
    if (localStorage.getItem('posts') !== null){
        posts = JSON.parse(localStorage.getItem('posts'));
    }
    return posts;
}

// initial state
const updatePosts = (posts) => {
    for (let i = 0; i < posts.length; i++) {
        createNewPost(posts[i].id, posts[i].body);
    }
}


const addPost = () => {
    let lastId
    if(posts.length === 0 ){
        lastId = 0 ;         
    }else{
        lastId = ++(posts[posts.length - 1].id)
    }
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



// excute functions 
const posts = getDataFromLocalStorage();
updatePosts(posts);


// attach eventhandler
submitBtn.click(addPost);

