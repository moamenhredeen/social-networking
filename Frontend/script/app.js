// initial state
const restoreData = () => {
    for (let i = 0; i < posts.length; i++) {
        // create and edit post copy 
        const newPost = OUTPUT_POST.clone();
        newPost.removeClass('hide');
        const postContent = posts[i];
        const postConfig = UI.posts[i];
        newPost.attr('id', i);
        newPost.find('.post-content > p').text(postContent.body);

        // attach eventhandlers 
        newPost.find('.action-comment > span').click(() => {
            toggleComment(i);
        });

        // add to the dom
        MAIN.append(newPost)
    }
}




// entry point 
const main = () => {
    restoreData();
}

main()