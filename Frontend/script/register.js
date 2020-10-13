
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

const reset =  ()=>{
    [userNameInput, passwordInput, eamilInput, dateInput, genderInput ]
      .forEach(e=>{
          e.val('');
      })
}
const getUserData = ()=>{
   let isValid = true;  
    return[([userNameInput, passwordInput, eamilInput, dateInput, genderInput ]
      .map((e)=>{
       if(! e.val()){
        e.parent().addClass('redBorder'); 
         isValid = false; 
       }else{
        e.parent().removeClass("redBorder");
       }
       return {key:e.attr('name'), value:e.val()};
   })),isValid];
           
    
} ;

const addUser = (userData)=>{
    const users = getUserFromLocalStorage();
    const user ={id:users.length};
    userData.forEach(e => {
        user[e.key] = e.value; 
    });
   users.push(user); 
   log(users);
   saveUsersInLocalStorage(users);
}

const register  = (e)=>{
    e.preventDefault();
    const [data,isValid] = getUserData();

    if(isValid){
       addUser(data);
       reset();
    }
}


registerBtn.click(register)

