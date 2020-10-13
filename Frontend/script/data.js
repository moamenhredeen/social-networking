const getUserFromLocalStorage = ()=>{
    let users = [];
    const usersString = localStorage.getItem('users');
    if( usersString ){
         users =  JSON.parse(usersString);
    }
    return users;
}

const saveUsersInLocalStorage = (users)=>{
    localStorage.setItem('users',JSON.stringify(users));
}

const getPostsFromLocalStorage = () => {
    let posts = [];
    // get posts if stored in localstorage
    if (localStorage.getItem('posts') !== null){
        posts = JSON.parse(localStorage.getItem('posts'));
    }
    return posts;
}

const savePostsInLocalStorage = (posts) => {
    localStorage.setItem('posts',JSON.stringify(posts));
}

const addPostIdToUser = (userId, postId ) => {
    let users = getUserFromLocalStorage(); 
    users = users.map((el) => {
        if(el.id === userId ){
            const newUser = {...el}
            if(newUser.postIds){
                newUser.postIds.push(postId)
            }else{
                newUser.postIds = [postId]
            }
            return newUser;
        }else{
            return {...el};
        }
    })

    saveUsersInLocalStorage(users);
}


const addCommentToPost = (userId, postId,content) => {
    let posts = getPostsFromLocalStorage();
    posts = posts.map((el, index) => {
        const newEl = {...el};
        if(el.id === postId){
            if(newEl.comments){
                const newComments = [...newEl.comments];
                newComments.push({
                    content:content,
                    userId : userId
                });
                newEl.comments = newComments
            }else{
                const newComments = [{
                    content:content,
                    userId : userId
                }]
                newEl.comments = newComments
            }
            return newEl;
        }else{
            return newEl;
        }
    })
    savePostsInLocalStorage(posts);
}