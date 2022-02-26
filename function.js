//Responsive Navbars
const toggleButton = document.getElementById('toggle-nav')
const navbarLinks = document.getElementById('navbar-items')

toggleButton.addEventListener('click', toggleNav)

function toggleNav(){
  navbarLinks.classList.toggle('active')
}