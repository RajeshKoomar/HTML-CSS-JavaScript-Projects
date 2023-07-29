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