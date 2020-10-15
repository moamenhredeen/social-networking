
// post-logic =====================================================

const toggleComment = (id) => {
    const item = $(`#${id}`);
    item.find('.post-output-comment').toggleClass('hide')
}

const addCommentToPostUI = (postId, content) => {
    const commentContainer = $(`#${postId} > .post-output-comment`)
    const newComment = commentOutput.clone();
    newComment.removeClass('hide');
    newComment.find('p').text(content);
    commentContainer.append(newComment);
}


const addComment = (postId) => {
    const content = $(`#${postId}`)
        .find('.comment-input > input');
    addCommentToPost(
        getUserAuthenticationData().userId, 
        postId,
        content.val() );
    addCommentToPostUI(postId, content.val());
    content.val('')
}


const createNewPost = (id, content) => {
    const newPost = outputPost.clone();
    newPost.removeClass('hide');
    newPost.attr('id', id);
    newPost.find('.post-content > p').text(content);

    // attach eventhandlers 
    newPost.find('.action-comment > span').click(() => {
        toggleComment(id);
    });

    newPost.find('.comment-input > span').click(() => {
        addComment(id);
    })


    // add to the dom
    main.prepend(newPost)
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


// entry point ===============================================
const posts = getPostsFromLocalStorage();
updatePosts(posts);


// attach eventhandler
submitBtn.click(addPost);

