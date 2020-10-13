const getUserFromLocalStorage = ()=>{
    let users = [];
    const usersString = localStorage.getItem('users');
    if( usersString ){
         users =  JSON.parse(usersString);
    }
    return users;
}