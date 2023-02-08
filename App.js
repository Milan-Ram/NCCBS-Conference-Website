const nav =document.getElementById('navbar');
const navbtn =document.getElementById('home-nav-link');

navbtn.addEventListener('click',()=>{
  nav.classList.toggle('open-drop-down')
})