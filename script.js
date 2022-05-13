const menu_bar = document.querySelector("#menu-toggle");
const navBar = document.querySelector("#nav-bar");

menu_bar.addEventListener('click', ()=>{
  const visibility = navBar.getAttribute('data-visible');
  if(visibility === "false") {
    navBar.setAttribute('data-visible', true);
  }
  else {
    navBar.setAttribute('data-visible', false);
  }
});