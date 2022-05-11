const menu_bar = document.querySelector("#menu-bar");
const nav_bar = document.querySelector("#nav-bar");

menu_bar.addEventListener('click', ()=>{
  if(nav_bar.classList.contains("active")){
    nav_bar.classList.remove("active");
    menu_bar.classList.remove("fa-xmark");
    menu_bar.classList.add("fa-bars");
  }
  else{
   menu_bar.classList.remove("fa-bars");
   menu_bar.classList.add("fa-xmark");
   nav_bar.classList.add("active");
 }
});