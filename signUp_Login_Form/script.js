
// navbar header section
const navbar = document.querySelector(".nav-bar");
const menuBlock = document.querySelector(".menu");
navbar.addEventListener("click", function () {
  navbar.firstElementChild.classList.toggle("fa-xmark");

  if (menuBlock.style.display === "block") {
    menuBlock.style.display = "none";
  } else {
    menuBlock.style.display = "block";
  }
});

document.onclick = function(e){
  if(!menuBlock.contains(e.target)  &&  !navbar.contains(e.target)){
    menuBlock.style.display = "none";
    navbar.firstElementChild.classList.replace("fa-xmark" , "fa-bars");
  }
}

// form Section password display onclick eyeIcon

function display(){
const password = document.getElementById('Password');

  if(password.type === "password"){
    password.type = "text"
  }else{
    password.type = "password"
    
  }
}
// eyeIcon change on click
 document.getElementById('iconPassword').addEventListener('click' , function(){
  this.classList.toggle("fa-eye")
})
document.getElementById('iconConfirmPassword').addEventListener('click' , function(){
  this.classList.toggle("fa-eye")
})



function displayConfirmP(){
  const confirmPassword = document.getElementById('confirmPassword');
 
  if(confirmPassword.type === "password"){
    confirmPassword.type = "text"
  }else{
    confirmPassword.type = "password"
  }
}


// onclick signup/login show 
 
 var login =document.querySelector('.loginBtn')
 var signup =document.querySelector('.signupBtn')
 var loginContainer =document.querySelector('.login-c')
 var signupContainer =document.querySelector('.sign-up-container')
 var form =document.querySelector('.form-container')
  
 signup.addEventListener("click" , function(){
  if(  signupContainer.style.display = "none"){
  signupContainer.style.display = "block"
    loginContainer.style.display = "none"
}


  })

  login.addEventListener("click" , function(){
   if(loginContainer.style.display = "none"){
      signupContainer.style.display = "none"
      loginContainer.style.display = "block"
    }
 })
