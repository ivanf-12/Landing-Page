const menuBar = document.querySelector("#menu-toggle");
const navBar = document.querySelector("#nav-bar");
const menuImage = document.querySelector("i");

menuBar.addEventListener('click', ()=>{
  const visibility = navBar.getAttribute('data-visible');
  if(visibility === "false") {
    menuBar.setAttribute('aria-expanded', true);
    navBar.setAttribute('data-visible', true);
  }
  else {
    menuBar.setAttribute('aria-expanded', false);
    navBar.setAttribute('data-visible', false);
  }
  menuImage.classList.toggle("fa-regular");
  menuImage.classList.toggle("fa-solid");
  menuImage.classList.toggle("fa-circle-xmark");
  menuImage.classList.toggle("fa-bars");
});