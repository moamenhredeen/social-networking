
const searchData = (email, pass)=>{
      const users = getUserFromLocalStorage();

      const found =users.find( (e)=>e.email === email && e.pass === pass);

      if(found != undefined){
          return true;
      }
      return false;
}

const loginHandler = (e)=>{
    e.preventDefault();
    const email = emailInput_login.val();
    const password = password_login.val();
 
     
    if(validateEmail(email) &&  searchData(email, password)){
            window.location.href = '../index.html';
    }else{
        errorMessageLogin.removeClass('hide');
    }
}
     
loginBtn.click(
    loginHandler 
)