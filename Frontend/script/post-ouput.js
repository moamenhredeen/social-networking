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




