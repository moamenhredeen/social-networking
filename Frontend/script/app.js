



// initial state
const updatePosts = (posts) => {
    for (let i = 0; i < posts.length; i++) {
        createNewPost(posts[i].id, posts[i].body);
        if(posts[i].comments){
            for(let j = 0 ; j < posts[i].comments.length; j++){
                addCommentToPostUI(
                    posts[i].id,
                    posts[i].comments[j].content
                    )
            }
        }
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
    const userId = getUserAuthenticationData().userId ;
    createNewPost(lastId, userInput)
    posts.push({
        id: lastId,
        body: userInput,
        userId : userId
    });
    addPostIdToUser(userId, lastId);
    console.log(posts)
    textArea.val('')
    savePostsInLocalStorage(posts);
}




// excute functions 
const posts = getPostsFromLocalStorage();
updatePosts(posts);


// attach eventhandler
submitBtn.click(addPost);

